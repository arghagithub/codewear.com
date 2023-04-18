// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const connectDb= handler=> async (req,res)=>{
    if(mongoose.connections[0].readyState){ // if there is already a connection
        return handler(req,res);
    }
    await mongoose.connect(process.env.MONGO_URI);
    return handler(req,res); //mongodb connection banie age help korbe
}

export default connectDb;