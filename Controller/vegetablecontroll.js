import VegetableModel from "../Model/vegetableSchema.js"

//Add vegetable
export const addvegetable=async(req,res)=>{
    try {
        const vegetable=await VegetableModel.findOne({name:req.body.name});
        if(vegetable){
            res.status(208).json({message:"All Ready Vegetable created"})
        }else{
          let newvegetable=  await VegetableModel.create(req.body);
          if(newvegetable._id){
            res.status(201).json({message:"Vegtable Created Sucessfuly"})
          }else{
            res.status(404).json({message:"Vegtable not created"})
          }
        }
    } catch (error) {
        res
      .status(500)
      .json({ message: "Internal server Error", error, rd: false });
    console.log(error);
    }
}

//Edit vegetable

//Update vegetable

//change vegetable price

//delete vegetable