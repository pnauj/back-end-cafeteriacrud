import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017/cafecrud';
const url = 'mongodb+srv://pnauj:arigat00_@clustertest.tpxmw.mongodb.net/'


mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', () =>{
    console.log('BD conectada');
})