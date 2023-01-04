import Category from "../models/category.js";

const Categorycontroller= class category{
    async getAll(req,res){
        try{
            const findall =  await Category.find({});
            res.status(200).json(findall);
        } catch (err) {
            res.status(403).json(err);
        };
    }
    async  getOne(req,res){
        if(req.params.id!=undefined){
            const category= await Category.findOne({"_id":req.params.id}).exec();
            res.status(200).json(category);
        } else {
            res.status(404).json(err);
        }
       
       
    }
    save(req,res){
        // console.log(req.body);
       console.log(req.file);

       res.json({'aaa':'yyy'});

        try{
            const category = Category.create(req.body);
            res.status(200).json(category);
        } catch(err){
            res.status(404).json(err);
        }

    }

    update(req,res){
         try{
            Category.findOne({"_id":req.params.id},function(err,category){
            if(err){
                res.status(404).json(err);
            }
                
            if(req.body.name){
                category.name = req.body.name;
            }
            if(req.body.slug){
                category.slug = req.body.slug;
            }
            if(req.body.description){
                category.description = req.body.description;
            }
            if(req.body.top){
                category.top = req.body.top;
            }

            category.save();
            res.status(200).json(category);

            });
            
        } catch(err){
            res.status(404).json(err);
            
        }
    }
    async delete(req,res){

        try{
            const findcatgeory= await Category.findOne({"_id":req.params.id}).exec();
            findcatgeory.remove();
            const resmessage={
                'success':'Successfully Catgeory Removed'
            }
            res.status(200).json(resmessage);
        }
        catch(err){
            res.status(404).json(err);
        }
       
    }
}

export default Categorycontroller;