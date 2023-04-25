import mongoose from "mongoose";

function db() {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
    })
    .then((db) => console.log("Conexión a base de datos exitosa"))
    .catch((err) => console.err("Error de conexión con la base de datos"));
}
export default db;
