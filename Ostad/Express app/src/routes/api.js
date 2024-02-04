const express = require ('express')
const StudentController = require("../controllers/StudentController")
const fs=require('fs');
const multer=require('multer');

const router = express.Router();

router.get("/", function(req, res){
res.end("This is Home page ... ");
} );

router.get("/about", function(req, res){
res.end("This is About page ... ");
} );

router.get("/contact", function(req, res){
res.end("This is Contact page ... ");
} );

router.get("/file-write", function(req, res){
    fs.writeFile('demo.txt','Hello world!', function(error){
        if(error){
            res.end("File wite fail .. ");
        }else{
            res.end("File write success ..");
        }
    });
} );



// Multer file upload ...

const storage = multer.diskStorage(
    {
        destination: function (req, file, callback) {
            callback(null, './uploads');
        },
        filename: function (req, file , callback){
            callback(null, file.originalname);
        }
    }
);
const upload = multer({storage : storage}).single("file");

router.get("/file-upload", function(req, res){
    upload(req, res, function(error){
        if(error){
            res.end("File uplading failed ... ");
        }else{
            res.end("File uploading success ... ");
        }
    })
});














router.get("/read", StudentController.ReadStudent );

router.post("/create", StudentController.CreateStudent );

router.put("/update", StudentController.UpdateStudent );

router.delete("/delete", StudentController.DeleteStudent);

module.exports=router;
