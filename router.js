const dbConecction = require('./coneccion/mongose');
const express = require('express');
const {check} = require ('express-validator');
const categorias = require('./controllers/categorias');
const router = express.Router();
const Categoria = require ('./models/categoria');
const { response } = require('express');


//connecion base de datos
dbConecction();
//obtenerCategorias();
router.get('/', categorias.obtenerCategorias, (error, results) => {
  if (error) {
    throw error;
  } else {    
  }
});

router.get('/editarcategorias/:id',  async(req,res)=>{
  const{id}= req.params;
  const{estado,usuario, ...data}=req.body;
  const  categoria = await Categoria.findByIdAndUpdate(id,data,{new:true});
  res.render('editarcategorias', { categoria: categoria });
})


 router.get('/eliminar/:id', async (req,res) => {
  const {id}= req.params;
  await Categoria.findByIdAndDelete({ _id: id });
  res.redirect('/');
  });


router.get('/crearcategorias', (req, res) => {
 res.render('crearcategorias');
//res.render('crearcategorias', { nombre : true } );
});
/*router.post('/crearcategorias' ,categorias.ExisteCategoria,(req,res,nombre='')=>{

});*/

/*router.post('/crearcategorias',

async function(req,res,){
 
  const{ body :datos} =req;
    let datosInsertados = await categorias.ExisteCategoria(datos);
   
    if( datosInsertados.length > 0 ,console.log('entro3')){  
      
    return res.status(200).json({
        ok: false,
        message: ` la marca ya se encuetra registrada`
    }); 
   } else {
    console.log('entro4')
      await categorias.crearCategoria(datos);
     return res.redirect("/crearcategorias?success=true&message=Logged In Successfully")
        }
       
        });*/

        router.post('/crearcategorias', async (req,res = response) => {
          const nombre = req.body.nombre.toUpperCase();
             const categoriaDB = await Categoria.findOne({nombre});
         if(categoriaDB){
             return res.status(400).json({
                 msg: `La  categoria ${ categoriaDB.nombre}, ya existe`
             });
         
         }
        }
    );
    
        

router.post('/editar',categorias.editar, (req,res)=>{
  //res.render('index');
    
 
}) 
module.exports = router




