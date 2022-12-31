// import Category from "../models/category.js";
import Admin from "../models/admin.js";
import mongoose from 'mongoose';
import MD5 from 'md5';
import nextConfig from "../../admin/next.config.js";
import { body } from 'express-validator';
const Admincontroller= class admin{
    async getAll(req,res){
        try{
            const findall =  await Admin.find({});
            res.status(200).json(findall);
        } catch (err) {
            res.status(403).json(err);
        };

        
        // res.status(200).json({
        //     "draw": (req.body.draw)?req.body.draw:1,
        //     "recordsTotal": findall.length,
        //     "recordsFiltered": findall.length,
        //     "data": findall
        // });
    }
    async getOne(req,res){
        const findadmin= await Admin.findOne({"_id":req.params.id}).exec();
        console.log(findadmin);
        // await Admin.findById(
            if (findadmin) {
                        res.status(200).json(findadmin);
                    }  else {
                        res.status(404).json(err);
                    }
        // req.params.id,function (err, findadmin) {
        //     if (err){
        //         res.status(404).json(err);
        //         // return handleError(err);
        //     }
    
        //     if (findone) {
        //         res.status(200).json(findone);
        //     }
        // });
       
        
    }
    save(req,res){
        // console.log(req.body);
        // res.json(req.body);
        
        // delete req.body._id;
        // res.json(req.body);
        try{
            req.body.password=MD5(req.body.password);
            const adminuser = Admin.create(req.body);
            res.status(200).json(adminuser);
        } catch(err){
            res.status(404).json(adminuser);
        }
        // res.json({'AAA':'HHHH'});
    }
    update(req,res){
       
        // const findadmin=  Admin.findOne({"_id":req.params.id}).exec();
        // console.log(findadmin);
        // res.json(findadmin);

        try{
            Admin.findOne({"_id":req.params.id},function(err,admin){
                admin.username = req.body.username;
                if(req.body.password){
                    admin.password = MD5(req.body.password);
                }
                admin.status = req.body.status;
                admin.email = req.body.email;
                admin.save();
                res.status(200).json(admin);
            });
            // req.body.password=MD5(req.body.password);
            // const adminuser = Admin.create(req.body);
            // res.status(200).json(adminuser);
        } catch(err){
            res.status(404).json(adminuser);
            
        }
        
    }
    delete(req,res){
        res.status(200).json(req.body);
    }
}

export default Admincontroller;