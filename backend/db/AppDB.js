import mongoose from "mongoose";


class AppDB{
    constructor(connstr) {
        this.connstr = connstr
        this.connection = null
    }
    async connect() {
      if(this.connection){return this.connection}
        try {
          await mongoose.connect(this.connstr);
          this.connection = mongoose.connection;
          console.log("Connection Successful")
        }
        catch (err) {
          console.log("There was a problem connecting to the DataBase", err)
        }
    }
    
    
}

export default AppDB