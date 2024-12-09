
import express from "express";
import multer from "multer";

import path from "path"
import { nextTick } from "process";
// const app = express();

// // Configure storage engine and filename
// const storage = multer.diskStorage({
//   destination: './public/',
//   filename: function(req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1000000 },
//     fileFilter: function(req, file, cb) {

//         // console.log(file,"from file")
        
//       checkFileType(file, cb);
      
//     }
//   }).single('myFile');


//   function checkFileType(file, cb) {
//     const filetypes = /jpeg|jpg|png|gif/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);
  
//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb('Error: Images only! (jpeg, jpg, png, gif)');
//     }
//   }

//   export default upload






const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/public')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
   const upload = multer({ storage: storage })

   export default upload;