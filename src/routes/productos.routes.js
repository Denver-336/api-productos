import { Router } from "express";
import esquemaProducto from "../models/productos.models.js";

const rutas = Router();

//lista de productos
rutas.get("/productos", async (req, res) => {
  try {
    const productos = await esquemaProducto.find();
    res.json({ productos: productos });
  } catch (error) {
    res.sendStatus(404);
  }
});

//un producto x id
rutas.get("/productos/:id", async (req, res) => {
  try {
    const producto = await esquemaProducto.findById(req.params.id);
    res.json({ productos: producto });
  } catch (error) {
    res.sendStatus(406);
  }
});

//crear producto
rutas.post("/productos", async (req, res) => {
  try {
    const nuevoProducto = new esquemaProducto(req.body);
    await nuevoProducto.save();
    //res.sendStatus(201);
    res.json({ msg: "Producto creado", producto: nuevoProducto });
  } catch (error) {
    res.sendStatus(400);
  }
});

//actualizar producto
rutas.put("/productos/:id", async (req, res) => {
  try {
    const productoActualizado = await esquemaProducto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    //res.sendStatus(203);
    res.json({ msg: "Producto actualizado", producto: productoActualizado });
  } catch (error) {
    res.sendStatus(406);
  }
});

//eliminar producto
rutas.delete("/productos/:id", async (req, res) => {
  try {
    await esquemaProducto.findByIdAndDelete(req.params.id);
    //res.sendStatus(204);
    res.json({ msg: "Producto eliminado" });
  } catch (error) {
    res.sendStatus(410);
  }
});

export default rutas;
