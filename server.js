const port = 3001;
const express = require("express");
const app = express();

////////////body parser///////////////////
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
///////////////////cors middelware/////////////
const cors = require("cors");
app.use(cors())
require("./db/conn");



const regis = require("./db/model");

app.post("/post-data", async (req, res) => {
  const {note}=req.body;
  const Regisdata=new regis({note})
  const result= await Regisdata.save()
 res.send({message:"Task Added Successfully"})
});
app.get("/ftch", async(req, res) => {
  const result = await regis.find();
  res.send({ result });
});
app.delete('/delete/:id',async (req,res)=>{
  await regis.deleteOne({_id:req.params.id})
  res.send({message:'Task Deleted Successfully'})
})
app.delete('/deleteall',async(req,res)=>{
  await regis.deleteMany({})
  res.send({message:'All Tasks Have Been Cleared'})
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
