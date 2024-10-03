const mongoose=require('mongoose')
const db= 'TODO'
mongoose.connect('mongodb://127.0.0.1:27017/'+db)
.then(
    ()=>{
        console.log('connected')
    }
)
.catch((e)=>{
    console.log('failed ')
})
