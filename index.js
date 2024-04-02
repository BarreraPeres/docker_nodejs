const express = require("express");

const PORT = 4000;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req,res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send("Olá Mundo!🦊");
});

app.listen(PORT, HOST)