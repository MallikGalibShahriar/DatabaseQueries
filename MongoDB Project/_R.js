const { Product, mongoose } = require('./index.js')
//Read Data
async function fetchInfo() {
    //Simple Queries (1-6)
    const product_query1 = await Product.findById('637932d4aede02d6a81dc881'); //This won't ne worked for ID generates newly each time
    const product_query2 = await Product.find({ productName: "Coffee" });
    const product_query3 = await Product.find({ productName: "Coffee" }).select('productName price');//Only I need Name & Price
    const product_query4 = await Product.find({ productName: "Coffee" }).select('-price');//Need all without price
    const product_query5 = await Product.find({ inStock: true }).select('productName price').sort('-price');//Sort descendingly by price (high to low)
    const product_query6 = await Product.find({ inStock: true }).select('productName price').limit(3);// I need 3 datas

    //Complex Queries (7-11)
    const product_query7 = await Product.find({ price: { $gte: 50 } }); // show price 50 or above products
    const product_query8 = await Product.find({ price: { $lt: 50 } });  //price less than 50 (50 not included)
    const product_query9 = await Product.find({ company: { $in: 'Pran' } });//Only pran products
    const product_query10 = await Product.find().or([{ company: 'Pran' }, { inStock: false }])//Pran or not in Stock
    const product_query11 = await Product.find().and([{ company: 'Pran' }, { inStock: false }])//Pran and not in Stock (NULL)

    //Very Complex Query (12)
    const product_query12 = await Product.find().or([{ company: 'Pran' }, { price: { $gte: 50 } }]).select('productName price').sort('price')//Show only NAME , Price greater than 50 and Pran with sorted (low to high price)

    console.log(`===============Data for Query 1=================`);
    console.log(product_query1);
    console.log(`This Query won't be worked because findByID`);
    console.log(`===============Data for Query 2=================`);
    console.log(product_query2);
    console.log(`===============Data for Query 3=================`);
    console.log(product_query3);
    console.log(`===============Data for Query 4=================`);
    console.log(product_query4);
    console.log(`===============Data for Query 5=================`);
    console.log(product_query5);
    console.log(`===============Data for Query 6=================`);
    console.log(product_query6);
    console.log(`===============Data for Query 7=================`);
    console.log(product_query7);
    console.log(`===============Data for Query 8=================`);
    console.log(product_query8);
    console.log(`===============Data for Query 9=================`);
    console.log(product_query9);
    console.log(`===============Data for Query 10=================`);
    console.log(product_query10);
    console.log(`===============Data for Query 11=================`);
    console.log(product_query11);
    console.log(`===============Data for Query 12=================`);
    console.log(product_query12);
}
fetchInfo();