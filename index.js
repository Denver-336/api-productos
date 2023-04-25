import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import db from "./db.js";
import login from "./routes/login.routes.js";
import inicio from "./routes/inicio.routes.js";
import productos from "./routes/productos.routes.js";

const app = express();

//VARIABLES DE ENTOTNO
dotenv.config();

//DB
db();

//GLOBAL
app.set("port", process.env.PUERTO);

//CONFIGURACIONES
app.use(morgan("dev"));
app.use(express.json());

//ENDPOINTS
app.use(inicio);
app.use(productos);
app.use(login);

//SERVER
app.listen(app.get("port"), () => {
  console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
