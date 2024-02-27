import mongoose, { mongo } from "mongoose";


const connectDB = (url) =>{
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(()=> console.log("MONGO DB CONNECTED"))
    .catch(()=> console.log(err));
}

export default connectDB;