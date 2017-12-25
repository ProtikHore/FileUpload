var express = require('express');
var upload = require('express-fileupload');
var router = express.Router();
router.use(upload());

router.get('/', function(request, response){

  response.render('home/index');

});

router.post('/',function(req,res){
  console.log(req.files);
  if(req.files.upfile){
    var file = req.files.upfile,
      name = file.name,
      type = file.mimetype;
    var uploadpath = name;
    file.mv('E:/nodeJS/file/uploads/'+uploadpath,function(err){
      if(err){
        console.log("File Upload Failed",name,err);
        res.send("Error Occured!")
      }
      else {
        console.log("File Uploaded",name);
        res.send('Done! Uploading files')
      }
    });
  }
  else {
    res.send("No File selected !");
    res.end();
  };
})


module.exports = router;
