const mongoose = require("mongoose");

const mongoURI = "mongodb+srv://mohsin_k:<qO9VBQHOlQOwaV7e>@cluster0.migeo4q.mongodb.net/?retryWrites=true&w=majority"

try{
    mongoose.connect(
        mongoURI, 
        ()=>{
            console.log("mongodb connected");
        }
        ).catch(e=>console.log(e));;
}catch(e){
    console.log(e); 
}
const User = require("./models/User");
const user = new User({
    Email: "mk@gmail.com", 
    Password:"12345"
});

user.save().then(()=>{
    console.log("Success");
});