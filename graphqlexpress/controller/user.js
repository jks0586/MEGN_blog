import Category from "../models/category.js";
import Book from "../models/book.js";

const Usercontroller= class user{
    getAll(req,res){
        res.status(200).json(req.body);
    }
    getOne(req,res){
        res.status(200).json(req.body);
    }
    save(req,res){
        // console.log(req.body);
        const category = Category.create(req.body);
        res.status(200).json({data:category});
        // res.json({'AAA':'HHHH'});
    }
    update(req,res){
        res.status(200).json(req.body);
    }
    delete(req,res){
        res.status(200).json(req.body);
    }
}

export default Usercontroller;