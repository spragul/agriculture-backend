import FpModel from "../Model/fpSchema.js";
import ShopModel from "../Model/shopSchema.js";

//AddShop
export const addShop = async (req, res) => {
  try {
    const shop = await ShopModel.findOne({ mobile: req.body.mobile });
    if (shop) {
      res.status(208).json({ message: "Shop Allready Created", rd: false });
    } else {
      let newShop = await ShopModel.create(req.body);
      if (newShop) {
        res
          .status(201)
          .json({ message: "Shop created successful", newShop, rd: true });
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
  try {
    let shop = await ShopModel.findOne({ _id: req.body._id });
    if (shop) {
      shop._id = req.body._id;
      shop.shopname = req.body.shopname;
      shop.Address = req.body.Address;
      shop.branch=req.body.branch;
      shop.mobile = req.body.mobile;
      shop.product=shop.product;
      let shops = await shop.save();
      res
        .status(201)
        .json({ message: "Shop Details Edit  Successfull", shops, rd: true });
    } else {
      res
          .status(404)
          .json({ message: "Shop id is worng", rd: false });
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
      let myfp = shop.product;
      for (let i = 0; i < myfp.length; i++) {
        let ids = myfp[i];
        let a = await FpModel.findOne({ _id: ids });
        if (a) {
          await FpModel.deleteOne({ _id: a._id });
        }
      }
      const delshop = await ShopModel.deleteOne({ _id: req.params.id });
      if (deleteShop) {
        res
          .status(200)
          .json({ message: "Shop Delete SucessFull", delshop, rd: true });
      } else {
        res
          .status(201)
          .json({ message: "Shop Delete  something went to worng", rd: false });
      }
    } else {
      res.status(404).json({ message: "Shop id wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//get shop
export const getOneShop = async (req, res) => {
  try {
    const shop = await ShopModel.findOne({ _id: req.params.id });
    if (shop) {
      res.status(200).json({ message: "Get shop Deatils", shop, rd: true });
    } else {
      res.status(404).json({ message: "Shop id wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Get all Shop
export const getAllShop = async (req, res) => {
  try {
    const shop = await ShopModel.find();
    if (shop) {
      res.status(200).json({ message: "Get All Shop Deatils", shop, rd: true });
    } else {
      res.status(404).json({ message: "something went to wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};