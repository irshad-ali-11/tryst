const moongose = require("mongoose");
const connectDb = async () => {
   try {
      const connectionInstance = await moongose.connect(
         process.env.Mongo_DB_URI + process.env.DB_Name
      );
      console.log(
         `MONGODB connection successfully Host : ${connectionInstance.connection.host}`,
      );
   } catch (error) {
      console.log(`MongoDB Database not connect... ${error?.message}`);
      process.exit(1);
   }
};

module.exports = { connectDb };
