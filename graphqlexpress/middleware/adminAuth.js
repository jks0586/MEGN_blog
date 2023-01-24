
import jwt from "jsonwebtoken";
import Admin from "../models/admin.js";
import dotenv from 'dotenv';
dotenv.config();

const adminAuth= (req, res, next) => {
  const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
const token = authHeader;
  if (token == null || token == undefined | token == ''){
    return res.status(401).json({success: false,'error':'Authentication Failed'});
  } 

  jwt.verify(token, process.env.JWT_SECRETE, (err, admin) => {
    
    if (err) {
        return res.status(403).json({success: false,'error':'Forbidden'});
    }
    
    Admin.findOne({ email: admin.email },(err,admin)=>{
        console.log(admin);
        if(admin._id.toString()==undefined){
            return res.status(401).json({success: false,'error':'Authentication Failed'});
        }
    });
    
    //req.admin = admin
    
  });
  next();
}

export default adminAuth;

