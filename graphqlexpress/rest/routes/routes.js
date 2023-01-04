import express from 'express';
import Postcontroller from '../../controller/post.js';
import product from '../../controller/product.js';
import CategoryController from '../../controller/category.js';
import AdminController from '../../controller/admin.js';
import UserController from '../../controller/user.js';
import Uploadcontroller from '../../controller/upload.js';
const router = express.Router();
import uploadfile from '../../config/uploadfile.js';

const postController = new Postcontroller();
const categoryController = new CategoryController();

const uploadimage=uploadfile.uploadfiles('images');

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
router.post('/category/save',uploadimage.single('image'),categoryController.save);
router.put('/category/edit/:id',uploadimage.single('image'),categoryController.update);
router.delete('/category/delete/:id', categoryController.delete);

// Admin user Admin section
const adminController = new AdminController();
router.get('/admin/all',adminController.getAll);
router.get('/admin/one/:id',adminController.getOne);
router.post('/admin/save',adminController.save);
router.put('/admin/edit/:id',adminController.update);
router.delete('/admin/delete/:id', adminController.delete);


// Use Admin section
const userController = new UserController();
router.get('/user/all',userController.getAll);
router.get('/user/one/:id',userController.getOne);
router.post('/user/save',userController.save);
router.put('/user/edit/:id',userController.update);
router.delete('/user/delete/:id', userController.delete);



// upload files section
const uploadfileController=new Uploadcontroller();
router.post('/upload',uploadfileController.uploadfile);

export default router;
