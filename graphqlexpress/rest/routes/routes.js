import express from 'express';
import Postcontroller from '../../controller/post.js';
import product from '../../controller/product.js';
import CategoryController from '../../controller/category.js';
import AdminController from '../../controller/admin.js';
const router = express.Router();

const postController = new Postcontroller();
const categoryController = new CategoryController();


//main route
router.get('/', (req, res) => {
    res.send('Get API');
});
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

// Category Admin section
router.get('/category/all',categoryController.getAll);
router.get('/category/one/:id',categoryController.getOne);
router.post('/category/save',categoryController.save);
router.post('/category/update/:id',categoryController.update);
router.delete('/category/update/:id', categoryController.delete)

// Admin user Admin section
const adminController = new AdminController();
router.get('/admin/all',adminController.getAll);
router.get('/admin/one/:id',adminController.getOne);
router.post('/admin/save',adminController.save);
router.put('/admin/edit/:id',adminController.update);
router.delete('/admin/update/:id', adminController.delete)

export default router;
