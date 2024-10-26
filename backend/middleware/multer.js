import multer from "multer";

const storage = multer.diskStorage({
    filename:function(req,file,callback) {
        callback(null, file.originalname)
    }
})

const upload  = multer({storage})

export default upload 



// import multer from 'multer';

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         // Specify the directory where you want to save uploaded files
//         callback(null, 'uploads/'); // Ensure this directory exists or create it
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.originalname); // Keep the original filename
//     }
// });

// const upload = multer({ storage });

// export default upload;

// import multer from 'multer';
// import path from 'path';

// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         // Use path.join to ensure compatibility with the file system
//         callback(null, path.join(__dirname, '../uploads'));
//     },
//     filename: function (req, file, callback) {
//         callback(null, file.originalname); // Keep the original filename
//     }
// });

// const upload = multer({ storage });

// export default upload;

