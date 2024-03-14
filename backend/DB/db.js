const mongoose = require( "mongoose");
  
const connectDB = async (req, res) => {
    const mongoURL = "mongodb+srv://hackoverflow:FutDqnWo1WQFPfVx@cluster0.1qrkdws.mongodb.net/ChatApp";
    
    const { connection } = await mongoose.connect(mongoURL, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);
}

module.exports = connectDB;


