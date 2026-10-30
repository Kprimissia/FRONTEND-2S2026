const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const agora = new Date();

  res.json({
    dataHora: agora.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo"
    }),
    status: "API funcionando"
  });
});

app.listen(PORT, () => {
  console.log("API funcionando na porta " + PORT);
});