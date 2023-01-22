
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const adminAuth= (req, res, next) => {
  const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
const token = authHeader;
  if (token == null || token == undefined | token == ''){
    res.status(401).json({success: false,'error':'Authentication Failed'});
  } 

  jwt.verify(token, process.env.JWT_SECRETE, (err, admin) => {
    
    if (err) {
        res.status(403).json({success: false,'error':'Forbidden'});
    }
    // req.admin = admin
    next()
  })
}

export default adminAuth;

