import FpModel from "../Model/fpSchema.js";
import ShopModel from "../Model/shopSchema.js";

//Addfertilizer
export const addfertilizer = async (req, res) => {
  try {
    let shop = await ShopModel.findOne({ _id: req.params.id });
    if (shop._id) {
      const fertilizer = await FpModel.findOne({ fpName: req.body.fpName });
      if (fertilizer) {
        res
          .status(208)
          .json({ message: "fertilizer Allready Created", rd: false });
      } else {
        let newfertilizer = await FpModel.create(req.body);
        console.log(newfertilizer)
        if (newfertilizer) {
          let add=newfertilizer._id
            let a=await ShopModel.findByIdAndUpdate({_id:req.params.id},{$push:{product:add}});
            console.log(a);
            let b=await FpModel.findByIdAndUpdate({_id:newfertilizer._id},{$set:{shopid:req.params.id}});
            console.log(b)
          res
            .status(201)
            .json({
              message: "fertilizer created successful",
              newfertilizer,
              rd: true,
            });
        }
      }
    } else {
      res.status(404).json({ message: "Shop id Wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Edit fertilizer
export const editfertilizer = async (req, res) => {
  console.log(req.body);
  try {
    let fertilizer = await FpModel.findOne({ _id: req.body._id });
    if (fertilizer) {
      fertilizer._id = req.body._id;
      fertilizer.fpName = req.body.fpName;
      fertilizer.fpPrice = req.body.fpPrice;
      fertilizer.fpImage = req.body.fpImage;
      fertilizer.fpDiscription = req.body.fpDiscription;
      let fertilizers = await fertilizer.save();
      res
        .status(201)
        .json({
          message: "fertilizer Details Edit  Successfull",
          fertilizers,
          rd: true,
        });
    } else {
      res.status(204).json({ message: "fertilizer id not valid", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Delete fertilizer
export const deletefertilizer = async (req, res) => {
  try {
    const fertilizer = await FpModel.findOne({ _id: req.params.id });
    if (fertilizer) {
      let shopproduct=await ShopModel.findByIdAndUpdate({_id:fertilizer.shopid},{$pullAll:{product:[fertilizer._id]}});
      console.log(shopproduct)
      const delfertilizer = await FpModel.deleteOne({ _id: req.params.id });
      if (deletefertilizer) {
        res
          .status(200)
          .json({ message: "fertilizer Delete SucessFull",delfertilizer,rd: true });
      } else {
        res
          .status(201)
          .json({
            message: "fertilizer Delete  something went to worng",
            rd: false,
          });
      }
    } else {
      res.status(404).json({ message: "fertilizer id wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};


//Get all fertilizer
export const getAllfertilizer = async (req, res) => {
  try {
    const fertilizer = await FpModel.find({shopid:req.params.id});
    if (fertilizer) {
      res
        .status(200)
        .json({ message: "Get All fertilizer Deatils", fertilizer, rd: true });
    } else {
      res.status(204).json({ message: "something went to wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};