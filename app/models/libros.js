//llamamos al paquete mysql que hemos instalado
var mysql = require('mysql'),
//creamos la conexion a nuestra base de datos con los datos de acceso de cada uno
connection = mysql.createConnection(
	{ 
		host: 'localhost', 
		user: 'prueba',  
		password: 'prueba', 
		database: 'prueba'
	}
 );
 
//creamos un objeto para ir almacenando todo lo que necesitemos
var librosModel = {};

//obtenemos todos los libros de la BD
librosModel.getLibros=function(callback){
  if (connection) {
	connection.query('SELECT * FROM libros', function(err,rows){
		if(err) throw err;
		callback(rows);		
	});
  }
};

//insertamos un libro determinado
librosModel.addLibro=function(libro, callback){
  connection.query('INSERT INTO libros SET ?', libro, function(err, result){
     if (err) throw err;
     callback(result.insertId);
  });
};
//insert o update de un libro
librosModel.updateLibro = function(libro, callback){
   connection.query('CALL insert_update(?,?,?)',[libro.titulo,libro.autor,libro.precio], function(err, result){
	if (err) throw err;
	callback(result);
  });
};






//exportamos el objeto para tenerlo disponible en la zona de rutas
module.exports = librosModel;
