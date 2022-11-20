import express from 'express';
import Postcontroller from '../../controller/post.js';
import product from '../../controller/product.js';
const router = express.Router();

const postController = new Postcontroller();
//Post Method
router.post('/post', (req, res) => {
    res.send('Post API');
})

//Get all Method
router.get('/getAll', postController.getAllPost);

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})


router.get('/product/get',product.getProduct);
export default router;
