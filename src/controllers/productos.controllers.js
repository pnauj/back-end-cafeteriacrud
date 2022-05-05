import Producto from "../models/producto";

const productoCtrl = {};

// agregamos la logica para obtener la lista de producto
productoCtrl.listarProductos = (req, res) => {
    //toda la logica para obtener la lista
    res.send('hola desde el backend2');
};

productoCtrl.crearProducto = async (req, res) => {
    try {
        console.log(req.body);
        // validar 
        // crear productos en la base de datos
        const productoNuevo = new Producto({
            productName: req.body.productName,
            price: req.body.price,
            urlImg: req.body.urlImg,
            category: req.body.category
        })
        // guardar el objeto nuevo en la base de datos
        await productoNuevo.save();
        //enviar respuesta
        res.status(201).json({
            mensaje: 'producto correctamente creado'
        })

    } catch (error) {
        console.log(error);
        //enviar codigo de error
        res.status(404).json({
            mensaje: 'Error al intentar agregar un producto'
        })
    }

}

export default productoCtrl;