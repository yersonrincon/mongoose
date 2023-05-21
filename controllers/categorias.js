const Categoria = require('../models/categoria');
//obtener categorias- total - populate
const obtenerCategorias = async (req, res) => {
  const categoria = await Categoria.find();
  return res.render('index', { categoria: categoria });
}



/*const eliminarCategoria = async (id = req.params ) => {
await Categoria.findByIdAndDelete({ _id: id });
  return res.redirect('/');

}*/
 /*const crearCategoria = async (req, res = response) => {
  const nombre = req.body.nombre;
  const estado = req.body.estado;
  //gerenerar la data a guardar
  const data = {
    nombre,
    estado
  }
  console.log(data)
  const categoria = new Categoria(data);
  // guarda  datos en mongo
  await categoria.save();
  return res.redirect('/');

}*/
 /*const crearCategoria = async (nombre ="")=>{
  console.log('entro2')
  const categoria = new Categoria(nombre);
  await categoria.save();
 }
 const ExisteCategoria = async  (nombre="") => {
  console.log('entro1')
  const existeCategoria = await Categoria.findOneAndUpdate({  });
  //const arreglo = Object.entries(existeCategoria).map(i => i [1]);
   console.log('este es el resultado',existeCategoria);
  //console.log('este es el resultado',existeCategoria);
  //return arreglo.rows;
  if (existeCategoria){
    throw new Error( `el correo${nombre} ya esta resgistrado en la base  de datos`)
 }
}*/

const editar = async (req, res) => {
  const { _id, nombre, estado } = req.body;
  await Categoria.findByIdAndUpdate(_id, { nombre, estado }, { new: true });
  return res.redirect('/')
}


/*const ExisteCategoria = async (nombre = "", res, req, next) => {

  Categoria.findOne({ nombre });
 
  console.log(nombre);
 }*/
module.exports = { obtenerCategorias, editar }