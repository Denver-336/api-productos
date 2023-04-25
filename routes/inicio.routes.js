import { Router } from "express";

const rutas = Router();

rutas.get("/", (req, res) => {
  res.send("Página de inicio");
});

export default rutas;
