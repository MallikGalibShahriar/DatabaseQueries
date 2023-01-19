const { Product, mongoose } = require('./index.js')

//Create a Model (object) - Product
async function storeInfo() {
    const product = new Product({
        productName: "Cake",
        price: 65,
        inStock: true,
        company: "Dancake",
        discount: 0,
    });

    await product.save();

    console.log(product);
}
//Store
storeInfo();