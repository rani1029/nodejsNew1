const mongoose = require("mongoose");
const connectDB = async (type = 0) => {
   try {
      //process.env.MONGO_URI is .env var which contains the DB URL
      const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });
      console.log(`MongoDb Connected: ${conn.connection.host}`);
   } catch (err) {
      console.log(err);
      console.log("database connection error");
   }
};

module.exports = connectDB;
