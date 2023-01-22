const adminlink = {
    admin:{
        all:'/admin/admin',
        create:'/admin/admin/create',
        edit:'/admin/admin/edit/:id',
    },
    auth:{
        login:'/user/login',
        signup:'/user/signup',
    },
    user:{
        all:'/admin/user',
        create:'/admin/user/create',
        edit:'/admin/user/edit/:id',
    },
    category:{
        all:'/admin/category',
        create:'/admin/category/create',
        edit:'/admin/category/edit/:id',
    },
    product:{
        all:'/admin/product',
        create:'/admin/product/create',
        edit:'/admin/product/edit/:id',
    },
    post:{
        all:'/admin/post',
        create:'/admin/post/create',
        edit:'/admin/post/edit/:id',
    },
}

// export default routeslink;
export {adminlink}