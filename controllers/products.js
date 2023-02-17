const getAllProducts = async (req, res) => {
    res.status(200).json({message: 'Products test'})
}

const getAllProductsStatic = async (req, res) => {
    res.status(200).json({message: 'Products test'})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}