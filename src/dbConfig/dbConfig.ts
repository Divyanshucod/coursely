import mongoose from "mongoose";


export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_DB_URL!)
        const connection = mongoose.connection

        connection.on('open',()=>{
            console.log('DataBase connected!');
        })

        connection.on('error',(err)=>{
            console.log(`there are some error while connecting to database: ${err}`);
            process.exit()
        })
    } catch (error) {
        console.log('something went wrong!');
        console.log(error);
    }
}