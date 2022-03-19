const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://rootdb:rootdb@cluster0.o7gzf.mongodb.net/restapitest?retryWrites=true&w=majority').
then((result)=>{
    console.log('Establish connection with e-commerce database');
}).catch((error)=>{
    console.log('cannot connect with database for some resions');
})

module.exports = mongoose.connection;