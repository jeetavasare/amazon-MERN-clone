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
    catch (err) {
      console.log("There was a problem connecting to the DataBase", err)
    }
  }

  async find(tableName, filter = {}) {
    try {
      const table = this.db.collection(tableName)
      const result = await table.find(filter).toArray()
      return result
    }
    catch (err) {
      console.log(err)
    }
  }


  async findOneAsync(tableName, filter = {}) {
    try {
      const table = this.db.collection(tableName)
      const result = await table.findOne(filter)
      return result
    }
    catch (err) {
      console.log(err)
    }
  }


  async insertOneAsync(tableName, item) {
    try {
      const table = this.db.collection(tableName)
      const result = await table.insertOne(item);
      return result.insertedId;
    }
    catch (err) {
      console.log(err)
    }
  }


  async insertManyAsync(tableName, item) {
    try {
      const result = await this.db.collection(tableName).insertMany(item)
      return [result.insertedCount, result.insertedIds]
    }
    catch (err) {
      console.log(err)
    }
  }

  async deleteOneAsync(tableName, filter) {
    try {
      const result = await this.db.collection(tableName).deleteOne(filter)
      return result.deletedCount
    }
    catch (err) {
      console.log(err)
    }
  }
  async deleteManyAsync(tableName, filter) {
    try {
      const result = await this.db.collection(tableName).deleteMany(filter)
      return result.deletedCount
    }
    catch (err) {
      console.log(err)
    }
  }


  async updateOneAsync(tableName, filter, update) {
    try {
      const result = await this.db.collection(tableName).updateOne(filter, update);
      return {
        acknowledged: result.acknowledged,
        matchedCount: result.matchedCount,
        modifiedCount: result.modifiedCount,
        upsertedId: result.upsertedId
      };
    } catch (err) {
      console.error('Error updating document:', err);
      return null;
    }
  }

  
  async updateManyAsync(tableName, filter, update) {
    try {
      const result = await this.db.collection(tableName).updateMany(filter, update);
      return {
        acknowledged: result.acknowledged,
        matchedCount: result.matchedCount,
        modifiedCount: result.modifiedCount,
        upsertedIds: result.upsertedIds
      };
    } catch (err) {
      console.error('Error updating documents:', err);
      return null;
    }
  }


}

export default MongoDB

