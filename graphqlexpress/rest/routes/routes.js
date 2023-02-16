import express from 'express';
import Postcontroller from '../../controller/post.js';
import product from '../../controller/product.js';
import CategoryController from '../../controller/category.js';
import AdminController from '../../controller/admin.js';
import UserController from '../../controller/user.js';
import Uploadcontroller from '../../controller/upload.js';
const router = express.Router();
import uploadfile from '../../config/uploadfile.js';
import adminAuth from '../../middleware/adminAuth.js';

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

// router.get('/product/get',product.getProduct);

// Category Admin section
router.get('/category/all',adminAuth,categoryController.getAll);
router.get('/category/one/:id',categoryController.getOne);
router.post('/category/save',uploadimage.single('image'),categoryController.save);
router.put('/category/edit/:id',uploadimage.single('image'),categoryController.update);
router.delete('/category/delete/:id', categoryController.delete);

// Admin user Admin section
const adminController = new AdminController();
router.post('/admin/login',adminController.login);
router.post('/admin/signup',adminController.signup);
router.get('/admin/all',adminAuth,adminController.getAll);
router.get('/admin/one/:id',adminAuth,adminController.getOne);
router.post('/admin/save',adminAuth,adminController.save);
router.put('/admin/edit/:id',adminAuth,adminController.update);
router.delete('/admin/delete/:id',adminAuth,adminController.delete);


// Use user section
import { userValidationRules,userValidate } from '../../validators/uservalidator.js';
const userController = new UserController();
router.get('/user/all',adminAuth,userController.getAll);
router.get('/user/one/:id',adminAuth,userController.getOne);
router.post('/user/save',userValidationRules(),userValidate,adminAuth,userController.save);
router.put('/user/edit/:id',adminAuth,userController.update);
router.delete('/user/delete/:id', adminAuth,userController.delete);



// upload files section
const uploadfileController=new Uploadcontroller();
router.post('/upload',adminAuth,uploadfileController.uploadfile);




//Get all Method
import { postValidationRules,postValidate } from '../../validators/postvalidator.js';
const postController = new Postcontroller();
router.get('/post/all',adminAuth,postController.getAll);
router.get('/post/one/:id',adminAuth,postController.getOne);
router.post('/post/save',postValidationRules(), postValidate,postController.save);
router.put('/post/edit/:id',adminAuth,postController.update);
router.delete('/post/delete/:id', adminAuth,postController.delete);


export default router;
