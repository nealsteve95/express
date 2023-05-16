var express = require('express');
var router = express.Router();
var fcargos = require('./rutas_cargos.js');
var fareas = require('./rutas_areas.js');

// Pagina Principal
router.get('/',c_inicio);

// Operaciones Principales
// Hasta aqui solo daba el texto porque no existia un link
router.get('/mantenimientos',c_mantenimientos);
router.get('/procesos',c_procesos);
router.get('/reportes',c_reportes);

// Opciones de mantenimiento de cargos
router.get('/m_cargos_listado',fcargos.listado);
router.get('/m_cargos_nuevo',fcargos.nuevo);
router.post('/m_cargos_grabar_nuevo',fcargos.grabar_nuevo);

router.get('/m_cargos_editar/:xid', fcargos.editar);
router.post('/m_cargos_grabar_editar',fcargos.grabar_editar );
router.get('/m_cargos_eliminar/:xid', fcargos.eliminar);

// Opciones de areas

router.get('/m_areas_listado',fareas.listado);
router.get('/m_areas_nuevo',fareas.nuevo);
router.post('/m_areas_grabar_nuevo',fareas.grabar_nuevo);
router.get('/m_areas_editar/:xid',fareas.editar);




// Esta es la primera funcion para crear los links
function c_inicio(req,res){
    res.render('index',{});
}
// Tambien permite crear los link dentro de mantenimientos 
function c_mantenimientos(req,res){
    res.render('mantenimientos',{});
}

function c_procesos(req,res){
    res.send('Procesos');
}

function c_reportes(req,res){
    res.send('Reportes');
}

module.exports = router;

