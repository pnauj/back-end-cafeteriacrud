// modelamos el dato a guardar en la database
import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
    productName: {
        type: String,
        maxlength: 200,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true,
        maxlength: 2000,

    },
    urlImg: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;    