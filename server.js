import express from 'express';
////// MULTER  //////////
//import multer from 'multer';

import routerProducts from './router/products.js';
// import ProductModelMongoDB from './model/products-mongodb.js';
import config from './config.js';

// ProductModelMongoDB.connectDB();
// await ProductModelMongoDB.connectDB();
// ProductModelMongoDB.connectDB();

const app = express();

app.use(express.static('public', { extensions: ['html', 'htm'] }));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Caso de uso Products
app.use('/api/products', routerProducts);




 //////////    MULTER    ///////////



//const storage = multer.diskStorage({
//    destination: function (req, file, cb) {
//        // console.log(file);
//        const error = null;
//        cb(error, './tmp/uploads');
//    },
//    filename: function (req, file, cb) {
//        // console.log(file);
//        const error = null;
//        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//        cb(error, `${uniqueSuffix}-${file.originalname.toLowerCase().replaceAll(' ', '-')}`);
//    }
//});
//
//const fileFilter = (req, file, cb) => {
//    const validaMimeTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];
//    const mimeTypeIsOk = validaMimeTypes.includes(file.mimetype);
//    cb(null, mimeTypeIsOk);
//};
//
//const upload = multer({ storage, fileFilter});
//
//
//// app.use(express.static('public', { extensions: ['html', 'htm'] }));
//
//
//app.post('/upload', upload.single('img'), function (req, res, next) {
//    if (req.file) {
//        console.log(req.file);
//        //res.redirect('/#/alta');
//        res.send('<h1>¡Gracias!</h1><p>Archivo subido con éxito.</p>');
//        // res.send({status: 'ok'});
//    } else {
//        res.status(415).send('<h1>Se produjo un error.</h1>');
//        // res.status(415).send({ error: 'Se produjo un error.' });
//    }
//});







const PORT = config.PORT;
const server = app.listen(PORT, () => console.log(`Servidor Express escuchando en el puerto ${PORT}.`));
server.on('error', error => console.log('Error al iniciar el servidor Express: ' + error.message));
