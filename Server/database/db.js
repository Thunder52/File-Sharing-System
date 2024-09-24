import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection=async ()=>{
    const MONGODB_URI=process.env.MONGODB_URI;
    await mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
  })

    try{
        await mongoose.connect(MONGODB_URI);
        console.log("DB connection stablished");
    }catch(error){
        console.log("Error connecting to mongo db"+error);
    }
};

export default DBConnection;