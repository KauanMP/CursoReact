const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Rotas - endpoints
app.post("/createproduct", (req, res) => {
  const name = req.body.name;
  const price = req.body.price;

  console.log(name);
  console.log(price);

  if (!name) {
    res.status(422).json({ message: "O campo nome é obrigatório!" });
    return;
  }

  res
    .status(201)
    .json({ message: `O produto ${name} foi criado com sucesso!` });
});

app.listen(3000);
