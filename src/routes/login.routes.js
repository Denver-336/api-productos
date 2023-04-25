import * as dotenv from "dotenv";
import { Router } from "express";
import jwt from "jsonwebtoken";

//variables de entorno
dotenv.config();

const rutas = Router();

const LLAVE = process.env.LLAVE;
const USUARIO = {
  email: process.env.EMAIL,
  password: process.env.PASSWORD,
};

rutas.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === USUARIO.email && password == USUARIO.password) {
    jwt.sign({ user: USUARIO }, LLAVE, { expiresIn: "1h" }, (err, token) => {
      res.json({ token });
    });
  } else {
    res.json({ msg: "Usuario y/o contraseña incorrectos" });
  }
});

rutas.post("/cuenta", verificarToke, (req, res) => {
  jwt.verify(req.token, LLAVE, (err, data) => {
    if (err) {
      //res.sendStatus(403);
      res.json({ msg: "Autorización denegada", LLAVE });
    } else {
      res.json({
        msg: "Bienvenido",
        data,
      });
    }
  });
});

function verificarToke(req, res, next) {
  const header = req.headers["authorization"];

  if (header == undefined) {
    //res.sendStatus(403);
    res.json({ msg: "Necesita autorización" });
  } else {
    req.token = header.split(" ")[1];
    next();
  }
}

export default rutas;
