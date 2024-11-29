const multer = require('multer')
const path = require('path');
const fs = require('fs')
const responseObj = require('../helpers/json-response')
const User = require('../model/user.model')
const Admin = require('../model/admin.model')
const db_gateway = require('../config/db-config')
const db = new db_gateway()
const UserModel = new User(db);
const AdminModel = new Admin(db);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadDir = path.join(__dirname, '../assets/profile_and_cover');
      // console.log("Field: ",file.fieldname);
      
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
  
const storageGallery = multer.diskStorage({
  destination: function (req, file, cb) {
    const section = req.body.section || 'others'; 
    const year = req.body.year || ''
    const uploadDir = path.join(__dirname, `../assets/gallery/${section}`);

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

const uploadGalleryImages = multer({ storage: storageGallery })

uploadGallery = async (req, res, next) => { 
  let section_name = req.body.section;
  let year = req.body.year;
  console.log("Body<<<: ",req.files);
  
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }
  
  
  try {
    const fileNames = req.files.map(file => file.filename);

    let sectionId;
    const sectionResult = await AdminModel.getSectionDetails(section_name);
    if (sectionResult.length === 0) {
      const createdSection = await AdminModel.createSection(section_name);
      sectionId = createdSection.insertId;
    } else {
      sectionId = sectionResult[0].id;
    }

    let yearId;
    const yearResult = await AdminModel.getYearDetails(year);
    if (yearResult.length === 0) {
      const createdYear = await AdminModel.createYear(sectionId, year);
      yearId = createdYear.insertId;
    } else {
      yearId = yearResult[0].id;
    }

    const imgResult = await AdminModel.addImages(sectionId, yearId, fileNames);
    res.json(responseObj.success("Images Uploaded Successfully", [imgResult]));

  } catch (err) {
    console.error("Error processing the files:", err);
    return res.status(500).json({ message: 'Internal Server Error', error: err });
  }
};


  
  module.exports = {
    uploadFile,
    upload,
    uploadGalleryImages,
    uploadGallery
  };