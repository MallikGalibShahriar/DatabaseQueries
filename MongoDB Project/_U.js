const { Product, mongoose } = require('./index.js')

//Upadte Data
async function updateInfo() {

    const product = await Product.findOne({ company: "Aarong" });
    product.inStock = false;

    await product.save();

    console.log(`===============Data After Updating=================`);
    console.log(product);
}
updateInfo();