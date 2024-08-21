import mongoose from "mongoose";


class AppDB{
    constructor(connstr) {
        this.connstr = connstr
    }
    async connect() {
        try {
          await mongoose.connect(this.connstr);
          this.db = mongoose.connection;
          console.log("Connection Successful")
        }
        catch (err) {
          console.log("There was a problem connecting to the DataBase", err)
        }
    }
    connection(){
        return this.db
    }
    
}

export default AppDB