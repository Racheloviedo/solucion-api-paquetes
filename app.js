const express = require('express'); //Importar express
const paquetesRoutes = require('./routes/paquetes.routes.js'); //Crear carpeta routes para administrarlo

const app = express(); //lo almacenamos en una constante llamada app
const port =3124; //el puerto sera el 3124

app.use(express.json()); //hacemos un use de json pra decirle como van a ser las salidas
app.use('/api/paquetes', paquetesRoutes); //quien maneje o administre la ruta

app.listen(port, () => {
    console.log('Sevisor escuchando en http://localhost:${port}');
}) // log para decirle al puerto en donde esta escuchando



