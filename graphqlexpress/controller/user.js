import Category from "../models/category.js";
// import Book from "../models/book.js";
import User from "../models/user.js";
import MD5 from 'md5';
const Usercontroller= class user{
    async getAll(req,res){
        try{
            const findall =  await User.find({});
            res.status(200).json(findall);
        } catch (err) {
            res.status(403).json(err);
        };

        // res.status(200).json(req.body);
    }
    
    async  getOne(req,res){
        if(req.params.id!=undefined){
            const finduser= await User.findOne({"_id":req.params.id}).exec();
            res.status(200).json(finduser);
        } else {
            res.status(404).json(err);
        }
       
       
    }
    save(req,res){
        // res.json(req.body);

        try{
            req.body.password=MD5(req.body.password);
            const user = User.create(req.body);
            res.status(200).json(user);
        } catch(err){
            console.log(err);
            res.status(404).json(err);
        }

    }
    update(req,res){
        try{
            User.findOne({"_id":req.params.id},function(err,user){
            if(err){
                res.status(404).json(err);
            }
                
            if(req.body.username){
                user.username = req.body.username;
            }
            if(req.body.password){
                user.password = MD5(req.body.password);
            }
            if(req.body.status){
                user.status = req.body.status;
            }
            if(req.body.email){
                user.email = req.body.email;
            }

            user.save();
            res.status(200).json(user);

            });
            
        } catch(err){
            res.status(404).json(err);
            
        }
    }
    async delete(req,res){

        try{
            const finduser= await User.findOne({"_id":req.params.id}).exec();
            finduser.remove();
            const resmessage={
                'success':'Successfully User Removed'
            }
            res.status(200).json(resmessage);
        }
        catch(err){
            res.status(404).json(err);
        }
        // res.json(req.body);

        // res.status(200).json(req.body);
    }
}

export default Usercontroller;