import Product from "../models/product.js";

const Productcontroller= class product{
    async getAll(req,res){
        try{
            const findall =  await Product.find({});
            res.status(200).json(findall);
        } catch (err) {
            res.status(403).json(err);
        };
    }
    async  getOne(req,res){
        if(req.params.id!=undefined){
            const product= await Product.findOne({"_id":req.params.id}).exec();
            res.status(200).json(product);
        } else {
            res.status(404).json(err);
        }
       
       
    }
    save(req,res){
        // console.log(req.body);
       console.log(req.file);

       res.json({'aaa':'yyy'});

        try{
            const product = Product.create(req.body);
            res.status(200).json(product);
        } catch(err){
            res.status(404).json(err);
        }

    }

    update(req,res){
         try{
            Product.findOne({"_id":req.params.id},function(err,category){
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
            const findproduct= await Product.findOne({"_id":req.params.id}).exec();
            findproduct.remove();
            const resmessage={
                'success':'Successfully Product Removed'
            }
            res.status(200).json(resmessage);
        }
        catch(err){
            res.status(404).json(err);
        }
       
    }
}

export default Productcontroller;