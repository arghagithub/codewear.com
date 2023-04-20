import User from "@/models/User";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        // console.log(req.body);
        try { 
            let user= await User.findOne({email:req.body.email});
            // console.log(user);
            if(!user){
                return res.status(400).json({success:false,error:"Wrong user credentials"});
            }
            if(user.email!==req.body.email || user.password!==req.body.password){
                return res.status(400).json({success:false,error:"Wrong user credentials"});
            }
            res.status(200).json({success:true,message:"successfully logged in"});
        } catch (error) {
            res.status(500).json({success:false,error:error});
        }
    }
    else {
        res.status(400).json({success:false, error: "Internal server error" });
    }
}


export default connectDb(handler);