import config from "../utils/configManager.js";
import User from '../Models/UserModel.js';
import mongoose from 'mongoose';
import AppDB from "../db/AppDB.js";
import { services } from "../server.js";

export const getAllUsers = async (req, res) => {
    let database 
    // await database.connectDB(config.MONGO_DB_CONNECTION_STR)
    let db = services.getService("AppDB")
    db.connect()


    const users = await User.find()
    
    res.send(users)
}