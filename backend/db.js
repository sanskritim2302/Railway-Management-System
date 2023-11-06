//const mongoURI = "mongodb://localhost:27017/railway"; 
const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/railways")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut1")
    //const mongoURI = "mongodb://localhost:27017/railway"; 

    .then(() => {
        console.log("mongodb connected");
    })
    .catch(() => {
        console.log('failed');
    })


const newSchema = new mongoose.Schema({
    username:
    {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection