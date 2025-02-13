const express = require('express');

const cors = require ('cors')

const dbconect = require('./model/database');



const app = express()

app.use(express.json())

app.use(cors())

dbconect()

app.use('/',require('./router/router'))
// app.post('/add',async(req,res)=>{
//    const{item} = req.body
   
//    const items = new Item({
//        item:item,
//     //    price:price
//    })
   
//    await items.save()
//    return res.status(200).json({msg:'data added sucessfully!!'})
// })

// app.get('/gett', async(req,res)=>{


//      const final = await Item.find({})
     
     
//      return res.status(200).json(final)
     
// })

// app.put('/updt/:item', async(req,res)=>{
//    const {newvalue}= req.body
  
//    const updateitem = await Item.updateOne({item:req.params.item},{$set:{item : newvalue}})
//   console.log(updateitem);
  
//   console.log(newvalue);
  
   
//    if(updateitem.modifiedCount === 0){
//    return res.status(400).json({msg:"item not match",})
//    }
//    else{
      
//    return res.status(200).json({msg:"item update sucessfully!",newvalue})
//    }
   
// })

// app.delete('/dlet/:item',async(req,res)=>{
//    const dltitm = await Item.deleteOne({item:req.params.item})

//  if(dltitm.deletedCount === 0){
//    res.status(400).json({msg:'please check item'})
//  }else{
//    res.status(200).json({msg:'item deleted sucessfully!!!'})
//  }
  
// })





const PORT=4000;

app.listen(PORT,()=>{
    console.log(`server created sucessfully!!!`);
    
})

