const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://mohsin_k:<2v7LqQP7gvWn4i2i >@cluster0.migeo4q.mongodb.net/?retryWrites=true&w=majority"

try{
    mongoose.connect(
        mongoURI, 
        ()=>{
            console.log("mongodb connected");
        }
        );
}catch(e){
    console.log(e); 
}