import express from 'express';
import ProductManager from './src/productManager.js';

const app = express ();
app.use(express.urlencoded({ extended: true}))

const productos = new ProductManager()
const readProducts = await productos.readProducts()

app.get('/products/:id', async (req, res) =>{
  let id = parseInt(req.params.id)
  //console.log(id);
  let allProducts = await readProducts
  let productById = allProducts.find(product => product.id === id)
  res.send(productById)
})

 app.get('/products', async (req, res) => {
    let limit = parseInt(req.query.limit);
    if (!limit){
        res.send(await readProducts)
    } let allProducts = await readProducts
     let productLimit = allProducts.slice(0, limit)
    res.send(productLimit)
   //const readProducts = await productos.readProducts()
 })


 
 
  
app.listen(8080, () => {
    console.log('escuchando en el puerto 8080');
})













/* const usuarios = [
    {id: '1',name:'Raisa',email:'email1@mail.com'},
    {id: '2',name:'Cristian',email:'emai21@mail.com'},
    {id: '3',name:'Andres',email:'email3@mail.com'},
    {id: '4',name:'Kari',email:'email4@mail.com'}
] */
//