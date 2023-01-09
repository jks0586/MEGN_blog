import Post from "../models/post.js";

const Postcontroller= class post{
    async getAll(req,res){
        try{
            const findall =  await Post.find({});
            res.status(200).json(findall);
        } catch (err) {
            res.status(403).json(err);
        };
    }
    async  getOne(req,res){
        if(req.params.id!=undefined){
            const post= await Post.findOne({"_id":req.params.id}).exec();
            res.status(200).json(post);
        } else {
            res.status(404).json(err);
        }
       
       
    }
    save(req,res){
        
        console.log(req.body);
    //    console.log(req.file);

       res.json({'aaa':'yyy'});

        try{
            const post = Post.create(req.body);
            res.status(200).json(post);
        } catch(err){
            res.status(404).json(err);
        }

    }

    update(req,res){
         try{
            Post.findOne({"_id":req.params.id},function(err,post){
            if(err){
                res.status(404).json(err);
            }
                
            if(req.body.name){
                post.name = req.body.name;
            }
            
            if(req.body.description){
                post.description = req.body.description;
            }
           

            post.save();
            res.status(200).json(post);

            });
            
        } catch(err){
            res.status(404).json(err);
            
        }
    }
    async delete(req,res){

        try{
            const findpost= await Post.findOne({"_id":req.params.id}).exec();
            findpost.remove();
            const resmessage={
                'success':'Successfully Post Removed'
            }
            res.status(200).json(resmessage);
        }
        catch(err){
            res.status(404).json(err);
        }
       
    }
}

export default Postcontroller;