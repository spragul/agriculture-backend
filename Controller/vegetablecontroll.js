import VegetableModel from "../Model/vegetableSchema.js";

//Add vegetable
export const addvegetable = async (req, res) => {
  try {
    const vegetable = await VegetableModel.findOne({ name: req.body.name });
    if (vegetable) {
      res
        .status(208)
        .json({ message: "All Ready Vegetable created", rd: false });
    } else {
      let newvegetable = await VegetableModel.create(req.body);
      if (newvegetable._id) {
        res
          .status(201)
          .json({ message: "Vegtable Created Sucessfuly", rd: true });
      } else {
        res.status(404).json({ message: "Vegtable not created", rd: false });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Get All vegetable
export const allVegetable = async (req, res) => {
  try {
    let vegetable = await VegetableModel.find({});
    if (vegetable.length > 0) {
      res.status(200).json({ message: "Vegetable list", rd: true });
    } else {
      res.status(200).json({ message: "Vegetable list is empty", rd: true });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Get one vegetable
export const oneVegetable = async (req, res) => {
  try {
    let vegetable = await VegetableModel.findOne({ _id: req.paramas.id });
    if (vegetable._id) {
      res.status(200).json({ message: "get one vegetable ", rd: true });
    } else {
      res.status(204).json({ message: "vegetable id not valid", rd: true });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//edit vegetable
export const changeVegetable = async (req, res) => {
  try {
    let vegetable = await VegetableModel.findOne({ _id: req.body._id });
    if (vegetable._id) {
      vegetable._id = req.body._id;
      vegetable.name = req.body.name;
      vegetable.categories = req.body.categories;
      vegetable.image = req.body.image;
      vegetable.price = req.body.price;
      let veg = await vegetable.save();
      res.status(201).json({ message: "Edit Vegetable Successfull" });
    } else {
      res.status(204).json({ message: "vegetable id not valid", rd: true });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//delete vegetable
export const deleteVegetable = async (req, res) => {
  try {
    const vegetable = await VegetableModel.findOne({ _id: req.paramas.id });
    if (vegetable._id) {
      let veg = await VegetableModel.deleteOne({ _id: req.paramas });
      console.log(veg);
      res
        .status(201)
        .json({ message: "Delete Vegetable is successful", rd: true });
    } else {
      res.status(204).json({ message: "Vegetable id is wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//change vegetable price
export const changeprice = async (req, res) => {
  try {
    const veg = await VegetableModel.findOne({ _id: req.paramas.id });
    if (veg._id) {
      if (req.body.price > 0) {
        let vegprice = await VegetableModel.findByIdAndUpdate(req.params.id, {
          price: req.body.price,
        });
        res
          .status(200)
          .send({ message: "Price Update Successfully", vegprice, rd: true });
      } else {
        res.status(204).send({ message: "Price in above 0", rd: false });
      }
    } else {
      res.status(204).send({ message: "vegetable id wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};
