const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    valor:{
        type:Number,
        require:true
    },
    estado:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
})

const productModel = mongoose.model('data_products',productsSchema)

module.exports = productModel