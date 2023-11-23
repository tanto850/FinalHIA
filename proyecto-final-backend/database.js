const mongoose = require('mongoose');
//const URI = 'mongodb://localhost/ProyectoFinal';
const URI = 'mongodb://mongo1:27017/ProyectoFinal';
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;
