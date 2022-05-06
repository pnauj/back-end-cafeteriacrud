// la mision del arachivo es mantener las rutas o peticiones
import { Router } from "express";
import productoCtrl from "../controllers/productos.controllers";

const router = Router();

// crear la ruta
router
  .route("/products")
  .get(productoCtrl.listarProductos)
  .post(productoCtrl.crearProducto);

router
  .route("/products/:id")
  .get(productoCtrl.obtenerProducto)
  .put(productoCtrl.editarProducto)
  .delete(productoCtrl.borrarProducto);

export default router;
