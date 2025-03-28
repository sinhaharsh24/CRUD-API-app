const Product = require("../models/product.model.js");

const getProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "error found" });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ messgae: "error found" });
  }
};

const postProducts = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: "error found" });
    }
};

const updateProduct = async (req,res) => {
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
};

const deleteProduct = async (req,res) => {
    try{
        const {id} = res.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({message: "Product not found"})
        }

        res.status(200).json({message: "Data has been deleted"});

    }catch(error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {
  getProducts,
  getProduct,
  postProducts,
  updateProduct,
  deleteProduct
};
