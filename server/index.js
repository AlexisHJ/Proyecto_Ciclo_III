const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const productModel = require('./models/Productos')


app.use(cors())
app.use(express.json())

// DATA BASE CONNECTION
//mongoose.connect("mongodb+srv://admin:gjP9xrfKcSQf2cTP@store.gc4sq.mongodb.net/products?authSource=admin&replicaSet=atlas-13cxb0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
//{useNewUrlParser:true})
mongoose.connect("mongodb://localhost:27017/Productos").catch(
    (error)=>{
        console.error(error);
    }
)


app.post('/addProduct',async(req,res)=>{


    const id = req.body.id
    const valor = req.body.valor
    const estado = req.body.estado
    const descripcion = req.body.descripcion

    const producto = new productModel({
        id:id,
        valor: valor,
        estado:estado,
        descripcion:descripcion
    }
    );
    try{
        await producto.save()
        res.send("Registrado exitosamente!")
    }catch(err){
        res.send("Ocurrio un error")
    }
    
})

app.get('/readData',async(req,res)=>{
    productModel.find({},async(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
})

app.listen(3001,()=> {
    console.log("You are connected!: 3001")
})
