var express = require('express');
var router = express.Router();
var ctrlLibros = require('../controllers/libros');
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a book');
});*/
 router.get('/',ctrlLibros.lista);
 router.post('/',ctrlLibros.nuevo);
 router.put('/:title', ctrlLibros.update);

module.exports = router;
