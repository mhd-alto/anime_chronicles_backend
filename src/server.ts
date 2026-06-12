import mongoose from 'mongoose';



export const connectDB = async () => {
    try{
        const conn  = await mongoose.connect(process.env.MONGODB_URI||'');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log(`DB name: ${conn.connection.name}`);
        return conn;
    }catch(error){
        console.error(`Error: ${error}`);
        process.exit(1);
    }
}


