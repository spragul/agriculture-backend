import ShopModel from "../Model/shopSchema";

//AddShop
export const addShop = async (req, res) => {
  try {
    const shop = await ShopModel.findOne({ shopname: req.body.shopname });
    if (shop) {
      res.status(208).json({ message: "Shop Allready Created", rd: false });
    } else {
      let newShop = await ShopModel.create(req.body);
      if (newShop._id) {
        res.status(201).json({ message: "Shop created successful" });
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

//Delete Shop
export const deleteShop = async (req, res) => {
    try {
      const shop = await ShopModel.findOne({ _id: req.parames.id });
      if (shop) {
        const delshop=await ShopModel.deleteOne({_id:req.parames.id});
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
    const shop = await ShopModel.findOne({ _id: req.parames.id });
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
