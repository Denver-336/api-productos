import { Schema, model } from "mongoose";

const esquemaProducto = new Schema(
  {
    titulo: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    descripction: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Producto", esquemaProducto);
