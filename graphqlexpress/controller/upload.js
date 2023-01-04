import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' +file.originalname)
    }
  })
  
const uploader = multer({ storage: storage }).single('file')

const Uploadcontroller= class upload{
    async uploadfile(req,res){

        uploader(req, res, (err) => {
            if (err) {
              res.sendStatus(500);
            }
            res.send(req.file);
          });
    }
}


export default Uploadcontroller;