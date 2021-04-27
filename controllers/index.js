//Se especifican los modelos sobre los que se va a trabajar
const models = require("../database/models");

//Se especifica el método para la creación de un nuevo usuario
const createProduct = async (req, res) => {
    try {
        //Genera una sentencia SQl tipo 'INSERT INTO...'
        const producto = await models.Producto.create(req.body);
        //Código 201: insertado OK
        return res.status(201).json({
            producto
        });
    } catch (error) {
        //Código 500: error del lado del server
        return res.status(500).json({error: error.message});
    }
};

//Se especifica el método para obtener TODOS los usuarios
const getAllProducts = async (req, res) => {
    try {
        const products = await models.Producto.findAll({
            include: []
        });
        //Código 200: ejecutado con éxito
        return res.status(200).json({
            products
        });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
};

module.exports = {
    createProduct,
    getAllProducts
};