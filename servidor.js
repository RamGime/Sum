const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/cliente.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(__dirname + "/public/cliente.js");
});


app.post("/suma", (req, res) => {
    const num1 = req.body.numero1;
    const num2 = req.body.numero2;

    if (isNaN(num1) || isNaN(num2)) {
        res.status(400).json({error: "Los valores ingresados no son números"});
        return;
    }

    const resultado = num1 + num2;
    res.json({suma: resultado});
});

app.listen(3000, () => console.log("Servidor iniciado en http://localhost:3000"));
