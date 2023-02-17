require('dotenv').config()
require('express-async-errors')
const express = require('express')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.use('/api/v1/products', productsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
    try {
        connectDB(process.env.DB_KEY)
        app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}...`))
    } catch(error) {
        console.log(error)
    }
}

start()