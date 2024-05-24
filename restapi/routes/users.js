var express = require('express');
var router = express.Router();
const user=require('../models/users');

/* GET users listing. */
router.post('/', async (req, res) =>{
  console.log(req.body);

  const data=new user({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    email: req.body.email,
    dob: req.body.dob
  })
  console.log(data)
  try{
    const dataToSave=await data.save();
    res.status(201).json(dataToSave);
  }
  catch(error){
    res.status(400).json({message: error.message});
  }
});

router.get('/',async (req,res)=>{
  try{
    const data = await user.find();
    res.status(200).json(data);
  }
  catch(error){
    res.status(500).json({message: error.message});
  }
});

router.put('/:id/edit', async (req,res)=>{
  try{
    console.log(req.params);
    console.log(req.body);
    const {id}=req.params;
    const {firstname,lastname,age,email,dob}=req.body;
    const updatedData = await user.findByIdAndUpdate(
      id, {firstname,lastname,age,email,dob}, {new:true, runValidators: true}
    );

    if(!updatedData){
      return res.status(404).json({message: "Data not found"});
    }
    res.status(200).json(updatedData);
  }
  catch(error){
    res.status(400).json({message: error.message});
  }
});

router.delete('/:id/delete', async (req,res)=>{
  try{
    const {id}=req.params;
  
    const deletedData = await user.findByIdAndDelete(id);

    if(!deletedData){
      return res.status(404).json({message: "Data not found"});
    }
    res.status(200).json({message: "Data deleted successfully"});
  }
  catch(error){
    res.status(400).json({message: error.message});
  }
})

module.exports = router;
