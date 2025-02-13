const express = require('express')

const Item = require('../model/model')

const router = express.Router()




router.post('/add',async(req,res)=>{
   const{item} = req.body
   
   const items = new Item({
       item:item,
    //    price:price
   })
   
   await items.save()
   return res.status(200).json({msg:'data added sucessfully!!'})
})

router.get('/gett', async(req,res)=>{


     const final = await Item.find({})
     
     
     return res.status(200).json(final)
     
})

router.put('/updt/:item', async(req,res)=>{
   const {newvalue}= req.body
  
   const updateitem = await Item.updateOne({item:req.params.item},{$set:{item : newvalue}})
  console.log(updateitem);
  
  console.log(newvalue);
  
   
   if(updateitem.modifiedCount === 0){
   return res.status(400).json({msg:"item not match",})
   }
   else{
      
   return res.status(200).json({msg:"item update sucessfully!",newvalue})
   }
   
})

router.delete('/dlet/:item',async(req,res)=>{
   const dltitm = await Item.deleteOne({item:req.params.item})

 if(dltitm.deletedCount === 0){
   res.status(400).json({msg:'please check item'})
 }else{
   res.status(200).json({msg:'item deleted sucessfully!!!'})
 }
  
})















module.exports = router