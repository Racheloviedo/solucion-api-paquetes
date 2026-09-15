const paquetes = require('../data/paquetes.js');
//metodo para ecirle como se comporta la logica de la informacion
const crearPaquete = (req, res) => {
    const { id, cliente, peso, destino} = req.body;
    const estado = "pendiente";
    const nuevoPaquete = { id, cliente, peso, destino, estado};

    if(!cliente || !peso || !destino){
        return res.status(400).json({ error: 'Faltan datos obligatorios'});
    }

    paquetes.push(nuevoPaquete);
    res.status(201).json(nuevoPaquete); // 201 --> el recurso se creo y fue exitoso
};

const obtenerPaquete = (req, res) => {
    const { id } = req.params;
    const paquete = paquetes.find(p => p.id == id); //lo que recupere del arreglo qe manejo y de la busqueda
    //le estoy diciendo que recorra el areglo hasta encotrar coincidencia con el id
    if(!paquete){
        return res.status(400).json({error: 'Paquete no encontrado'});

        res.json(paquete); //retorna el paquete si lo encuentra
    }
};

const filtrarPaquetes = (req, res) => {
    const { estado, destino } = req.query;
    let paquetesFiltrados = paquetes;

    if(!estado && !destino){
        return res.status(400).json({ error: 'Se requiere al menos un parametro de filtrado'});
    }

    if(estado){
        paquetesFiltrados = paquetesFiltrados.filter(p => p.estado === estado);
    }

    if(destino){
        paquetesFiltrados = paquetesFiltrados.filter(p => p.destino === destino);
    }

    res.json(paquetesFiltrados);
};

module.exports = {
    crearPaquete,
    obtenerPaquete,
    filtrarPaquetes
};


