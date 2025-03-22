const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
const productRoute = require('./routes/product.route.js')

//this is middleware
app.use(express.json());
//by this we can only use json file in this which is not usefull as id it is added with any other data like form and something it will show error
app.use(express.urlencoded({extended: false}));

//route using
app.use('/api/products', productRoute);

app.get('/',(req,res) => {
    res.send("hello from node API server updated")
});

/*
//GET all products at http://localhost:3000/api/products
//This method is used to READ all 
app.get('/api/products',async(req,res) => {
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}); 

//GET one product at http://localhost:3000/api/product/{id}
//This method is used to READ json from a specific Id
app.get('/api/products/:id', async(req,res) => {
    try{
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }catch(error){ 
        res.status(500).json({message: error.message});
    }
});

//POST all products at http://localhost:3000/api/products
app.post('/api/products',async(req,res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    }catch (error){
        res.status(500).json({message: error.message});
    }
});

//UPDATE products we use PUT in this method 
//In this to UPDATE a product from the DB we use it's ID read it and then PUT the new updated data in place of it
app.put('/api/products/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }

        const updatedproduct = await Product.findById(id);
        res.status(200).json(updatedproduct);
    }catch(error){
        res.status(500).json({message: error.message});

    }
});

//DELETE a product from DB using it's Id
app.delete('/api/products/:id', async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: "Product is not in the DB"})
        }

        res.status(200).json({message: "The data has been deleted"});

    }catch(error){
        res.status(500).json({message: error.message});
    }

}),

*/
//connecting a mongoDB in this server side using connection link provided from mongoDB atlas (which is a online Database tool)
mongoose.connect("mongodb+srv://adminharsh:hiser%40123@firstbackenddb.4tkeg.mongodb.net/NODE-firstAPI?retryWrites=true&w=majority&appName=FirstBackendDB")
.then(() => {
    console.log("connection is established");
    app.listen(3000, () => {
        console.log('server is running on port 3000')
    });
})
.catch(() => {
    console.log("connection failed!!!")
})