require('dotenv').config()
const connectDB = require('./db/connect')
const Product = require('./models/product')
const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.DB_KEY)
        await Product.deleteMany()
        await Product.create(jsonProducts)
        console.log('Populate.js code successfully finished!')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()
