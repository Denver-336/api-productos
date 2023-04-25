import { Router } from "express";

const rutas = Router();

rutas.get("/usuarios", (req, res) => {
  res.send("Página de inicio");
});

rutas.post("/usuarios", (req, res) => {
  console.log(req.body);
  res.json({ msg: "Usuario recibido" });
});

export default rutas;
