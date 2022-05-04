const productoCtrl = {};

// agregamos la logica para obtener la lista de producto
productoCtrl.listarProductos = (req, res) => {
    //toda la logica para obtener la lista
    res.send('hola desde el backend2');
};

productoCtrl.crearProducto = (req, res) => {

    console.log(req.body)
    res.send('voy a crear un producto')
}

export default productoCtrl;