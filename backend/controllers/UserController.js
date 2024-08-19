import MongoDB from '../db/mongoHelper.js';
import config from "../utils/configManager.js";

export const getAllUsers = async (req,res)=>{
    let database = new MongoDB('')
    await database.connectDB(config.MONGO_DB_CONNECTION_STR)
    let a = await database.find("Users")
    res.send(a)
}