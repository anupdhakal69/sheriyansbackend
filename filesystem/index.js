//?This is file system. There are different methods of file system.Some of them:
//*writeFile("filename","Anything you like to write",callback fn of error)
//*appendFile("filename","Any message",callback)  ---this adds message at the end of previous message
//*rename("firstfilename","updatedfilename",callback)
//*copyFile("sourcefilename","destinationfilename",callback) ---to copy file from one file to another
//*unlink(path,callback err fn)  ---deletes the file


const fs = require('fs')

fs.readFile("second.txt","utf8",(err)=>{
    if(err) throw err
    else console.log("done");
    
})