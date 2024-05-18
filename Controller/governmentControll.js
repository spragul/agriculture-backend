import GovernmentModel from "../Model/government.js";

//Add government
export const addgovernment = async (req, res) => {
  console.log(req.body);
  try {
    const government = await GovernmentModel.findOne({
      schemename: req.body.schemename,
    });
    if (government) {
      res
        .status(208)
        .json({ message: "All Ready government scheme created", rd: false });
    } else {
      let newgovernment = await GovernmentModel.create(req.body);
      if (newgovernment) {
        res.status(201).json({
          message: "government scheme Created Sucessfuly",
          newgovernment,
          rd: true,
        });
      } else {
        res
          .status(404)
          .json({ message: "government scheme not created", rd: false });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Get All government
export const allgovernment = async (req, res) => {
  try {
    let government = await GovernmentModel.find({});
    if (government.length > 0) {
      res
        .status(200)
        .json({ message: "government scheme list", government, rd: true });
    } else {
      res
        .status(200)
        .json({ message: "government scheme list is empty", rd: true });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Get one government
export const onegovernment = async (req, res) => {
  try {
    let government = await GovernmentModel.findOne({ _id: req.params.id });
    if (government) {
      res.status(200).json({ message: "get one government scheme ", rd: true });
    } else {
      res
        .status(204)
        .json({ message: "government scheme id not valid", rd: true });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//edit government
export const changegovernment = async (req, res) => {
  console.log(req.body);
  try {
    let government = await GovernmentModel.findOne({ _id: req.body._id });
    if (government) {
      government._id = req.body._id;
      government.schemename = req.body.schemename;
      government.details = req.body.details;
      government.startingdate = req.body.startingdate;
      government.price = government.userintraction;
      let governmens = await government.save();
      res.status(201).json({
        message: "Edit government scheme Successfull",
        governmens,
        rd: true,
      });
    } else {
      res
        .status(204)
        .json({ message: "government scheme id not valid", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//delete government
export const deletegovernment = async (req, res) => {
  console.log(req.params.id);
  try {
    const government = await GovernmentModel.findOne({ _id: req.params.id });
    if (government) {
      let governments = await GovernmentModel.deleteOne({ _id: req.params.id });
      console.log(governments);
      res.status(201).json({
        message: "Delete government scheme is successful",
        governments,
        rd: true,
      });
    } else {
      res
        .status(204)
        .json({ message: "government scheme id is wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//add user Review
export const userreview = async (req, res) => {
  try {
    console.log(req.body);
    let government = await GovernmentModel.findOne({ _id: req.body._id });
    if (government) {
      let reviews = await GovernmentModel.findByIdAndUpdate(
        { _id: req.body._id },
        {
          $push: {
            userreview: {
              userid: req.body.userid,
              username: req.body.username,
              details: req.body.details,
            },
          },
        }
      );
      res.status(200).json({
        message: "user review add successfully",
        reviews,
        rd: true,
      });
    } else {
      res.status(404).json({ message: "scheme id is Wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//delete user review

export const deleteReview = async (req, res) => {
  try {
    let count = 0;
    let scheme = await GovernmentModel.findOne({ _id: req.params.id });
    if (scheme) {
      let reviewlist = scheme.userreview;
      for (let i = 0; i < reviewlist.length; i++) {
        if (reviewlist[i].userid == req.body.userid) {
          if (reviewlist[i]._id == req.body._id) {
            let deletedata = await GovernmentModel.deleteOne({
              _id: req.body._id,
            });
            count = count + 1;
            res.status(200).json({
              message: "Scheme Review Delete successful",
              deletedata,
              rd: true,
            });
          }
        }
      }
      if (count == 0) {
        res.status(400).json({ message: "Scheme review ids wrong", rd: false });
      }
    }
    count = 0;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};
