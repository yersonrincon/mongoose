const Usuario = require('../models/usuario');

const obtenerUsuarios =async (req, res)=>{
   
    const usuario = await Usuario.find();
    console.log(usuario);
    return res.render('usuario',{usuario:usuario})
    

}
module.exports={obtenerUsuarios}