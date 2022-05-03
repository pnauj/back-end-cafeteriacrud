import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

//creo una constancia de express
const app = express();

//crear un puerto
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("estoy en el puerto " + app.get("port"));
});

//middlewares o configuraciones extras
app.use(morgan("dev")); // informacion extra en la terminal
app.use(cors()); // permite recibir peticiones externas
// interpretar objetos en formatos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Aqui mostramos por defecto el index.html de la carpeta public
app.use(express.static(path.join(__dirname, "../public")));

//ruta de prueba
app.get("/products", (req, res) => {
  //lo que quiero que pase cuando se ejecute la consulta
  res.send("hola desde el  backend");
});
app.get("/", (req, res) => {
  //lo que quiero que pase cuando se ejecute la consulta
  res.send("hola desde la ruta principal");
});

// clase 14 de febrero
// tiempo 0:58
