const multer = require('multer')
const path = require('path');
const fs = require('fs')
const responseObj = require('../helpers/json-response')
const User = require('../model/user.model')
const db_gateway = require('../config/db-config')
const db = new db_gateway()
const UserModel = new User(db);


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDir = path.join(__dirname, '../assets/uploads');
  
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
  
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage })

  uploadFile = (req, res,next) => {
    let user_id = req.body.alumniId;
    let type = req.body.type;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }else{
      if(type == 'profile'){
        UserModel.addProfilePicture(user_id,req.file,(err,result)=>{
          if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
          }else{

            res.json(responseObj.success("Image updated successfully",[req.file.filename]))
          }
        })
      }else if(type == 'cover'){
        UserModel.addCoverPicture(user_id,req.file,(err,result)=>{
          if(err){
            res.json(responseObj.error("Internal Server Error",[err]))
          }else{
            res.json(responseObj.success("Image updated successfully",[req.file.filename]))
          }
        })
      }
    }
  };
  
  module.exports = {
    uploadFile,
    upload,
  };