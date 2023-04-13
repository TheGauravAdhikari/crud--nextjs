import mongoose from "mongoose";

 const MONGO_URL = "mongodb+srv://adhikarigaurav87:" + encodeURIComponent("#@The123#") + "@nextjscrud.ld5ctve.mongodb.net/?retryWrites=true&w=majority";


const connectMongo = async () => {
    try{

        const { connection }  = await mongoose.connect(MONGO_URL);

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        
        console.log("Error In Connection");
    }
}

export default connectMongo;