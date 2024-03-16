const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
    return res.json(users);
});

app.listen(PORT, () => console.log("Server Live!!"));


