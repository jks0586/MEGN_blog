import Category from "../models/category.js";
import Book from "../models/book.js";

const Categorycontroller= class category{
    getAll(req,res){
        // res.json({'ff':'hhhh'});
    //     const datareq={
    //         name: 'jhjkhkhhhhjkkkh',
    //         slug: 'jhjkhkjhk',
    //         image: 'jhkjhkhkjk',
    //         description:'jhkjhkjhkhj',
    //         status: 1,
    //         top:1,
    // }
        // const b = Category.create(req.body);
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

export default Categorycontroller;