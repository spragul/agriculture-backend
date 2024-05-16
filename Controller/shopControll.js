import ShopModel from "../Model/shopSchema.js";

//AddShop
export const addShop = async (req, res) => {
  try {
    const shop = await ShopModel.findOne({ mobile: req.body.mobile });
    if (shop) {
      res.status(208).json({ message: "Shop Allready Created", rd: false });
    } else {
      let newShop = await ShopModel.create(req.body);
      if (newShop._id) {
        res.status(201).json({ message: "Shop created successful" ,newShop,rd:true});
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Edit Shop
export const editshop = async (req, res) => {
  console.log(req.body);
  try {
    let shop = await ShopModel.findOne({ _id: req.body._id });
    if (shop._id) {
      shop._id = req.body._id;
      shop.shopname = req.body.shopname;
      shop.Address = req.body.Address;
      shop.mobile = req.body.mobile;
      let shop = await shop.save();
      res.status(201).json({ message: "Shop Details Edit  Successfull",veg,rd:true });
    } else {
      res.status(204).json({ message: "shop id not valid", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Delete Shop
export const deleteShop = async (req, res) => {
    try {
      const shop = await ShopModel.findOne({ _id: req.params.id });
      if (shop) {
        const delshop=await ShopModel.deleteOne({_id:req.params.id});
        if(deleteShop){
            res.status(200).json({ message: "Shop Delete SucessFull", rd: true });
        }else{
            res.status(201).json({ message: "Shop Delete  something went to worng", rd: false });
        }
      } else {
        res.status(204).json({ message: "Shop id wrong", rd: false });
       
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Internal server Error", error, rd: false });
      console.log(error);
    }
  };

//get shop
export const getOneShop=async(req,res)=>{
  try {
    const shop = await ShopModel.findOne({ _id: req.params.id });
    if (shop) {
      res.status(200).json({message:"Get shop Deatils",shop,rd:true})
    } else {
      res.status(204).json({ message: "Shop id wrong", rd: false });
     
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
}

//Get all Shop
export const getAllShop=async(req,res)=>{
  try {
    const shop = await ShopModel.find();
    if (shop) {
      res.status(200).json({message:"Get All Shop Deatils",shop,rd:true})
    } else {
      res.status(204).json({ message: "something went to wrong", rd: false });
     
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
}

//add product list
export const addproductlist=async(req,res)=>{
  try {
    console.log(req.body)
    let product=await ShopModel.findOne({_id:req.body._id});
    if(product._id){
      let shopproduct= await ShopModel.findByIdAndUpdate({_id:req.body._id},{$push:{product:{fpName:req.body.fpName,fpPrice:req.body.fpPrice,fpImage:req.body.fpImage,fpDiscription:req.body.fpDiscription}}});
      res.status(200).json({message:"fertilizer pesticide create successfully",shopproduct,rd:true})
    }else{
      res.status(404).json({message:"Shop id is Wrong",rd:false});
    }
  } catch (error) {
    
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
}
//delete
export const deleteproductlist=async(req,res)=>{
  try {
    console.log(req.body)
    let product=await ShopModel.findOne({_id:req.body._id});
    if(product._id){
      let shopproduct= await ShopModel.findByIdAndDelete({_id:req.body._id},{product:{_id:req.params.id}});
      res.status(200).json({message:"fertilizer pesticide create successfully",shopproduct,rd:true})
    }else{
      res.status(404).json({message:"Shop id is Wrong",rd:false});
    }
  } catch (error) {
    
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
}