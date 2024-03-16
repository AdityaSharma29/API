const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.json(users);
});

app.get("/:id", (req, res) => {
    
    for(var i = 0; i < users.length; i++) {
        if(users[i].id == req.params.id) {
            return res.json({"name": users[i].name});
        }
    }
    return res.json({"error": "User not found. Kindly enter ID between 1001 and 1050."});
});

app.listen(PORT, () => console.log("Server Live!!"));
