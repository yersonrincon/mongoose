const {Schema, model }= require('mongoose');

const UsuarioSchema = Schema({
estado:{
    type:String,
    require:true,
    unique: true
},
google:{
    type:Boolean,
    default:true,
    require:true
},
nombre:{
    type:String,
    require:true,
    unique:true
},
correo:{
    type:String,
    require:true,
    unique:true
},
password:{
    type:String,
    require:true,

},
rol:{
    type:String,
    require:true,
    unique:true
}
})
module.exports = model('Usuario',UsuarioSchema);