const{ Schema,model} = require ('mongoose');

const CategoriaSchema = Schema({


    nombre:{
        type: String,
        required:false,
        unique: false
    },
    estado:{
        type:String,
        require:false,
        unique: false
    }
  
});
CategoriaSchema.methods.toJSON = function(){
    const {__v, estado, ...data} = this.toObject();
  
    return data;
}

module.exports = model('Categoria',CategoriaSchema);