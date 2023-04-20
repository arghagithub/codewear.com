import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        console.log(req.body);
        try {
            let user = new User(req.body);
            await user.save();
            res.status(200).json({ success: "Signup successful" });

        } catch (error) {
            res.status(500).json({error:error});
        }
    }
    else {
        res.status(400).json({ error: "Internal server error" });
    }
}


export default connectDb(handler);