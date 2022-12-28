// import Category from "../models/category.js";
import Admin from "../models/admin.js";
import MD5 from 'md5';
const Admincontroller= class admin{
    getAll(req,res){
        res.status(200).json(req.body);
    }
    getOne(req,res){
        res.status(200).json(req.body);
    }
    save(req,res){
        // console.log(req.body);
        req.body.password=MD5(req.body.password);
        const adminuser = Admin.create(req.body);
        res.status(200).json({data:adminuser});
        // res.json({'AAA':'HHHH'});
    }
    update(req,res){
        res.status(200).json(req.body);
    }
    delete(req,res){
        res.status(200).json(req.body);
    }
}

export default Admincontroller;