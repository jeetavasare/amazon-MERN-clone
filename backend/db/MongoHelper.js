import mongoose from 'mongoose';

class MongoDB {
  constructor(connstr) {
    this.db = null
    // this.connectDB(connstr)
  }
  async connectDB(connstr) {
    try {
      await mongoose.connect(connstr);
      this.db = mongoose.connection;
      console.log("Connection Successful")
    }
    catch(err){
      console.log("There was a problem connecting to the DataBase",err)
    }
  }

  async find(tableName, filter = {}) {
    if(this.db==null){return "DB not connected"}
    try{
      const table = this.db.collection(tableName)
      const result = table.find(filter).toArray()
      return result
    }
    catch(e){
      console.log(e)
    }
  }
}

export default MongoDB

