import Producto from "../models/producto";

const productoCtrl = {};

// agregamos la logica para obtener la lista de producto
productoCtrl.listarProductos = async (req, res) => {
    //toda la logica para obtener la lista
    try {
        //crear un arreglo de productos y enviarlos
        const listaProductos = await Producto.find();
        res.status(200).json(listaProductos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al intentar agregar una lista'
        })
    }
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

productoCtrl.obtenerProducto = async (req, res) => {
    try {
        //acceder al id
        console.log(req.params.id)
        // buscar el producto
        const productoBuscado = await Producto.findById(req.params.id)
        //enviar el producto por res
        res.status(200).json(productoBuscado)
    } catch (error) {
        console.log(error);
        //enviar codigo de error
        res.status(404).json({
            mensaje: 'Error no se pudo obtener el producto buscado'
        });
    }
}

export default productoCtrl;