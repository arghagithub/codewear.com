const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true })
// createdAt: a date representing when this document was created
// updatedAt: a date representing when this document was last updated
mongoose.models={};
module.exports=mongoose.model('user', UserSchema);