  const routeslink = {
    'imageurl':'http://localhost:4000/public/',
    'baseurl':'http://localhost:4000/rest/',
    upload:{
      file:'upload',
    },
    admin:{
        all:'admin/all',
        save:'admin/save',
        one:'admin/one/:id',
        edit:'admin/edit/:id',
        delete:'admin/delete/:id',
    },
    user:{
      all:'user/all',
      save:'user/save',
      one:'user/one/:id',
      edit:'user/edit/:id',
      delete:'user/delete/:id',
    },
    category:{
      all:'category/all',
      save:'category/save',
      one:'category/one/:id',
      edit:'category/edit/:id',
      delete:'category/delete/:id',
    }
}

// export default routeslink;
export {routeslink}