import multer from 'multer';
const uploadfile={
    uploadfiles(path){
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
              cb(null, 'public/'+path+'/')
            },
            filename: (req, file, cb) => {
              cb(null, file.originalname)
            },
          })
          
          const upload = multer({ 
            storage: storage , 
            fileFilter: (req, file, cb) => {
            if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
                cb(null, true);
            } else {
                cb(null, false);
                return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
            }
        }})
        
        return upload;
    }
}

export default uploadfile;