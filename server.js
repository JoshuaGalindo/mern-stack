const express = require('express')
const app = express()

//Importar conexión
const archivoBD = require('./conexion')

app.get('/', (req,res) => {
    res.end('Bienvenidos al servidor backend Node.js. Corriendo...')
})

//Configurar server basico
app.listen(5001, function(){
    console.log('El servidor NODE está corriendo correctamente!')
})