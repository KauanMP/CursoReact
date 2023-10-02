const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Rotas - endpoints
app.get("/", (req, res) => {
  res.json({ message: "Primeira rota criada com sucesso!" });
});
app.post("/products", (req, res) => {
    const products = {
        name: "gabinete",
        category: "computador"
    } 

    res.status(201).json(products)
});

app.listen(3000);
