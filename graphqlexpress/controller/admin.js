// import Category from "../models/category.js";
import Admin from "../models/admin.js";
import mongoose from 'mongoose';
import MD5 from 'md5';
import nextConfig from "../../admin/next.config.js";
import { body } from 'express-validator';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

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
            if (findadmin) {
                res.status(200).json(findadmin);
            }  else {
                res.status(404).json(err);
            }
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
            res.status(404).json(err);
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

    async login(req,res){
        let { email, password } = req.body;
        let existingAdmin;
        try{
            existingAdmin = await Admin.findOne({ email: email });
        } catch{
            res.status(401).json({success: false,'error':'Error! Something went wrong.'});
        }

        if (!existingAdmin || existingAdmin.password != MD5(password)) {
            res.status(401).json({success: false,'error':'Password does is not matched, please use correct password.'});
        }
        
        let token;

        try {
            token = jwt.sign(
              { adminId: existingAdmin._id, email: existingAdmin.email },
              process.env.JWT_SECRETE,
              { expiresIn: process.env.JWT_EXIRETIME}
            );
          } catch (err) {
            res.status(401).json({success: false,'error':'Authentication Failed'});
          }
 
          res.status(200).json({
            success: true,
            data: {
                adminId: existingAdmin.id,
                email: existingAdmin.email,
                token: token,
            },
        });

    }

    async signup(req,res){
        req.body.password=MD5(req.body.password);
        const { username, email, password } = req.body;
        // const adminuser = await Admin.create({
        //     username,
        //     email,
        //     password,
        //   });

        //   req.json(adminuser);
        try {
            const adminuser = await Admin.create({
                username,
                email,
                password,
              });
              let token;

              try {
                token = jwt.sign(
                  { adminId: adminuser._id, email: adminuser.email },
                  process.env.JWT_SECRETE,
                  { expiresIn: process.env.JWT_EXIRETIME}
                );
              } catch (err) {
                console.log(err);
                res.status(401).json({success: false,'error':'Authentication Failed'});
              }

              res.status(200).json({
                success: true,
                data: { adminId: adminuser._id,
                    email: adminuser.email, token: token },
                });

          } catch {
            res.status(401).json({success: false,'error':'Error! Something went wrong.'});
          }

    }
}

export default Admincontroller;