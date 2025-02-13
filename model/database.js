const mongoose = require("mongoose");


async function dbconect() {
    await mongoose.connect('mongodb+srv://siddaakib2005:1111222233@cluster0.b4kk7.mongodb.net/todolist')

    console.log('db coneccted');
    
}

module.exports = dbconect

