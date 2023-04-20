import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
const CryptoJS = require("crypto-js");
const SECRET_KEY="~!@#$%^&*()_+";
const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        try {

            let {name,email}=req.body;
            var ciphertext = CryptoJS.AES.encrypt(req.body.password, SECRET_KEY).toString();
            let user = new User({name,email,password:ciphertext});
            await user.save();
            res.status(200).json({success:true, message: "Signup successful",user });

        } catch (error) {
            res.status(500).json({success:false,error:error});
        }
    }
    else {
        res.status(400).json({success:false, error: "Internal server error" });
    }
}


export default connectDb(handler);