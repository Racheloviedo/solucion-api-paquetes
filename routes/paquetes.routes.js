const express = require('express'); //Importar express
const router = express.Router(); // metodo de express
//router es un objeto que esta guardando recursos

const { //para decirle como se van a llamar mis metodos
    crearPaquete,
    obtenerPaquete,
    filtrarPaquetes
} = require('../cpntrollers/paquetes.controller.js'); // lo obtenemos de controllers/paquetesControllers
 
router.post('/', crearPaquete);
router.get('/:id', obtenerPaquete);
router.get('/', filtrarPaquetes);

module.exports = router;



