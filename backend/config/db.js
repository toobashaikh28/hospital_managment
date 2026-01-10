// import mongoose
import mongoose from "mongoose";

//async function of connectdb
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI); //await because it takes time
        console.log("MongoDB connected");
    } catch (error){
        console.log(error)
    }
}

//export function to use it in other files
export default connectDB