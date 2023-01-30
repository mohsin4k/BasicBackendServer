const mongoose = require("mongoose");
const User = require("./models/User");

const mongoURI = "mongodb+srv://mohsin_k:qO9VBQHOlQOwaV7e@cluster0.bdsz15t.mongodb.net/?retryWrites=true&w=majority"

try{
    mongoose.connect(
        mongoURI,
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        }, 
        ()=>{
            console.log("mongodb connected");
        }
        );;
}catch(e){
    console.log(e); 
}

async function createUser(newUser){
    const user = new User(newUser); 

    const data = await user.save(); 
    console.log('data',data);
}

// createUser({
//     email: "ff@gmail.com", 
//     password: "2213"
// }); 

async function findUsers(){
    const data = await User.find(); 

    console.log(data);
}

findUsers();