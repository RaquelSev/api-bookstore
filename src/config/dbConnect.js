import mongoose from "mongoose";

mongoose.connect("mongodb+srv://raquelsevcelia:123@livraria.e2kcvdm.mongodb.net/node-bookstore");

let db = mongoose.connection;

export default db;