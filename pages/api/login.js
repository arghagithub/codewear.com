import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
const CryptoJS = require("crypto-js");
const SECRET_KEY = "~!@#$%^&*()_+";
var jwt = require('jsonwebtoken');
const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            let user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ success: false, error: "Wrong user credentials" });
            }
            var bytes = CryptoJS.AES.decrypt(user.password, SECRET_KEY);
            var originalText = bytes.toString(CryptoJS.enc.Utf8);
            if (user.email !== req.body.email || req.body.password !== originalText) {
                return res.status(400).json({ success: false, error: "Wrong user credentials" });
            }
            var token = jwt.sign({ name: user.name, email: user.email, message: "successfully logged in" }, SECRET_KEY, { expiresIn: '7d' });
            res.status(200).json({ success: true, token });
        } catch (error) {
            res.status(500).json({ success: false, error: error });
        }
    }
    else {
        res.status(400).json({ success: false, error: "Internal server error" });
    }
}


export default connectDb(handler);