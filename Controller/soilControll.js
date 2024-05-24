import { sendmailuser } from "../Authentication/nodemailer.js";
import UserModel from "../Model/UserSchema.js";
import SoilModel from "../Model/soilreport.js";

//Addsoil
export const addsoil = async (req, res) => {
  try {
    let user = await UserModel.findOne({ _id: req.params.id });
    if (user) {
      if (req.body.soiltest=="") {
        res
          .status(208)
          .json({ message: "soil test report error", rd: false });
      } else {
        let newsoil = await SoilModel.create(req.body);
        if (newsoil) {
          let add=newsoil._id
            let a=await UserModel.findByIdAndUpdate({_id:req.params.id},{$push:{reportsid:add}});
            let b=await SoilModel.findByIdAndUpdate({_id:newsoil._id},{$set:{userid:req.params.id}});
            let mailid=user.email;
            let link=newsoil;
            let mail=await sendmailuser(mailid,link,"Soil test report")
          res
            .status(201)
            .json({
              message: "soil test report created successful",
              newsoil,
              rd: true,
            });
        }
      }
    } else {
      res.status(404).json({ message: "user id Wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Edit soil
export const editsoil = async (req, res) => {
  try {
    let soil = await SoilModel.findOne({ _id: req.body._id });
    if (soil) {
      soil._id = req.body._id;
      soil.soiltest = req.body.soiltest;
      soil.submittedby = req.body.submittedby;
      soil.testreportdate = req.body.testreportdate;
      soil.reportdetails = req.body.reportdetails;
      let soils = await soil.save();
      res
        .status(201)
        .json({
          message: "soil test report Details Edit  Successfull",
          soils,
          rd: true,
        });
    } else {
      res.status(404).json({ message: "soil report id not valid", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};

//Delete soil
export const deletesoil = async (req, res) => {
  try {
    const soil = await SoilModel.findOne({ _id: req.params.id });
    if (soil) {
      let shopproduct=await UserModel.findByIdAndUpdate({_id:soil.userid},{$pullAll:{reportsid:[soil._id]}});
      const delsoil = await SoilModel.deleteOne({ _id: req.params.id });
      if (deletesoil) {
        res
          .status(200)
          .json({ message: "soil report Delete SucessFull",delsoil,rd: true });
      } else {
        res
          .status(201)
          .json({
            message: "soil report Delete  something went to worng",
            rd: false,
          });
      }
    } else {
      res.status(404).json({ message: "soil report id wrong", rd: false });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
  }
};


//Get all soil
export const getAllsoil = async (req, res) => {
  try {
    const soil = await SoilModel.find({userid:req.params.id});
    if (soil) {
      res
        .status(200)
        .json({ message: "Get All soil report Deatils", soil, rd: true });
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
