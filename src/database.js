import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/cafecrud';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('bd conectada');
})