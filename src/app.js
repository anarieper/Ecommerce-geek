const  express = require("express");
const routes = require("./routes");

const app = express();

app.use(routes);

app.listen(5000, ()=> console.log("Servidor rodando na porta 5000"))