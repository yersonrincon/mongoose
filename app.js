const express =  require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "node_modules/bootstrap/dist/")) );
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',  require ('./router'));

app.listen(5000,()=>{
    console.log('SERVE corriendo en http://localhost:5000');
});