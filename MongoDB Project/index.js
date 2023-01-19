//Assignment 03 - Mallik Galib Shahriar

//Database Connect
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/test')
    .then(() => console.log('database is connected!'))
    .catch((err) => console.log(err));


//Schema (Shape of a doc)
const productSchema = new mongoose.Schema({
    productName: String,
    price: Number,
    inStock: Boolean,
    company: String,
    discount: Number,
});

//Create a Model (object) - Product
const Product = mongoose.model('Product', productSchema);


//Export

module.exports = { Product, mongoose }

