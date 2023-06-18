import mongoose from "mongoose";

export const connectDB = async (user,pass) => {

    const URL = `mongodb+srv://patil:patil123@cluster0.cmiu8ms.mongodb.net/?retryWrites=true&w=majority`

    try {
        const connection = await mongoose.connect(URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("Error while connecting to Database :- "+err);
    }
}

export default connectDB;