const { Product, mongoose } = require('./index.js')

//Delete Data
async function deleteInfo() {

    await Product.findOneAndDelete({ company: "Radhuni" });
    console.log(`Data succesfully Deleted`);
}
deleteInfo();