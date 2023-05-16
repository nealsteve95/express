var mongojs = require('mongojs');
var uri = 'mongodb://localhost:27017/JuanPerezLab02';
var db = mongojs(uri,["Areas"]);
var ObjectId = require('mongodb').ObjectId;

function areas_listado(req,res) {
    db.Areas.find().sort({Nombre:1}, function(err,records){
        if (err){
            console.log('Error al acceder a la base de datos.');
            return;
        } 
        res.render('m_areas_listado',{records: records});
    });
}

module.exports = {
    listado: function (req,res) {
        areas_listado(req,res);
    },

    nuevo: function (req,res) {
        res.render('m_areas_nuevo',{});
    },

    grabar_nuevo: function(req,res){
        var xnom = req.body['xnom'];
        var xest = req.body['xest'];
        var xabr = req.body['xabr'];
        db.Areas.find().sort({_id:-1}, function( err, records){
            if (err){
                console.log('Error al acceder a la base de datos.');
                res.end();
                return;
            }
            var xid = records[0]._id +1;
            db.Areas.insert({_id:xid, Nombre:xnom, Estado: xest, Abreviatura: xabr}, function(){
                areas_listado(req,res);    
            });
        });
        },

    editar: function (req,res) {

        var xid=new ObjectId (req.params.xid*1);
        console.log(xid);
        db.Areas.find({_id:xid}, function(err,records) {
            if (err) {
                console.log('Error al acceder a la base de datos.');
                res.end();
                return;
                }
            res.render('m_areas_editar',{area: records[0]});
            });
        },  
        
       



}
