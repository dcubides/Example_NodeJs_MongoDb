const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if(!err){
        console.log('Conectado db');
    } else {
        console.log('error de conexion :' + err);
    }
});