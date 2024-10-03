const mongoose=require('mongoose')
const noteSchema= new mongoose.Schema({
    note:String,
})

const register=mongoose.model('userdata',noteSchema)
module.exports=register