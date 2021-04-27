//Se importa la clase Roter de express
const { Router } = require('express');

//Se incluye el archivo de los controles provenientes de 'controllers/index.js'
const controllers = require('../controllers');

//Se crea un objeto de la clase Router
const router = Router();

//La ruta que solo tenga la diagonal, mandará un mensaje de prueba
router.get('/', (req, res) => res.send('Bienvenid@ a la API del Team Producto'));

//Post sirve para insertar un nuevo usuario
router.post('/productos', controllers.createProduct);

//Get sirve para obtener todos los usuarios
router.get('/productos', controllers.getAllProducts);

module.exports = router;