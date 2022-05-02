import express from "express";
import morgan from "morgan";
import cors from "cors"; 


//creo una constancia de express
const app = express();

//crear un puerto
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("estoy en el puerto " + app.get("port"));
});

//middlewares o configuraciones extras
app.use(morgan('dev')); // informacion extra en la terminal
app.use(cors()); // permite recibir peticiones externas


//ruta de prueba
app.get('/products', (req, res)=>{
  //lo que quiero que pase cuando se ejecute la consulta
  res.send('hola desde el  backend')
})
app.get('/', (req, res)=>{
  //lo que quiero que pase cuando se ejecute la consulta
  res.send('hola desde la ruta principal')
})


// clase 09 de febrero
// tiempo 1:36