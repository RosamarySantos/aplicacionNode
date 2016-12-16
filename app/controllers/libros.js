 var librosModel = require('../models/libros');
 module.exports.lista=function(req,res){
   librosModel.getLibros(function(data){
   if (data && data.length != 0) 
	res.json(data);
   else
        res.status(404).json({'mesg':'no hay datos'});
   });
 };
 module.exports.nuevo=function(req,res){
   var libro = req.body;
   librosModel.addLibro(libro, function(data){
    if (data && data.length != 0)
	res.status(201).json({'id':data});
    else 		
	res.status(409).json({'mesg':'recurso existente'});
   });
 }
 module.exports.update=function(req,res){
   var title = req.params.title; //título del libro
   var libro = req.body; //autor y precio (incluso título)
   libro.titulo = title;
   console.log(libro);
   librosModel.updateLibro(libro, function(data){
	//console.log(data);
	var code = data[0][0].code;
	console.log(code);
	
	if (code === '200')
	   res.json({'mesg':'recurso actualizado'});
	else
	   res.status(201).json({'mesg':'recurso añadido'}); 
	
   });
 }











