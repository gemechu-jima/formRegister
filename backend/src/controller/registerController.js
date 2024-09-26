// import { connection } from "../config/mysqlDB.js";
import registerModel  from "../model/registerModel.js"
const registerForm = async(req, res) => {
  const { fname, lname, phone, city, woreda, age, gender, daughter, son } = req.body;
  let totalMember
  let data
  if(son && daughter){
     totalMember=Number(daughter)+ Number(son)
  }else if(son){
    totalMember=son
  }else if(daughter){
    totalMember=daughter
  }else{
    totalMember=0
  }
  console.log(fname, lname, phone, city, woreda, age, gender, totalMember);
  // const values = [fname, lname, phone, city, woreda, age, gender, totalMember];
      try {
        data=await registerModel.create({
          fname, lname, phone, city, woreda, age, gender, totalMember
        })
        if (!data) {
          console.error("Error:");
          return res.status(500).json({
            status: "error",
            msg: "An error occurred while creating the user.",
          });
        }else{
          res.status(201).json({
            status: "success",
            msg: "User created successfully!",
          });
        }
      } catch (error) {
        return res.status(500).json({
          status: "error",
          message: `An error occurred while creating the user. ${error}`,
        });
      }

     
    }
 

const getUsers = async(req, res) => {
 
    let data=await registerModel.find({})
    if (!data) {
      console.error("Error fetching users:");
      return res.status(500).send("Internal Server Error");
    } else {
      res.json({data});
    }

};
const getUserById=async(req, res)=>{
  const {id}=req.params
    let data=await registerModel.findOne({_id:id})
    if(!data) {
      return res.status(404).json({msg:"not found this Id "})
    }
   return res.status(201).json({data})
  
}
const deleteUserById=async(req, res)=>{
  const {id}=req.params
  console.log(" id",id)
  try {
    let data=await registerModel.findByIdAndDelete({_id:id})
 if(data){
  res.status(201).json({
      msg:"data is deleted",
      error:false,
      success:true
  })
  } }catch (error) {
    console.log(error.message)
    res.status(401).json({
        msg:error.message,
        error:true,
        success:false
    })
  }
 
}


 const updateUserById = async (req, res) => {
  const { fname, lname, phone, age, city, woreda, member, gender } = req.body;
  const {id}=req.params
  const updateData = { fname, lname, phone, age, city, woreda, member, gender };
  console.log("user ...", updateData, "id", id);

  try {
    const data = await registerModel.findByIdAndUpdate({ _id: id }, updateData, { new: true });
    if (data) {
      return res.status(200).json({ msg: "User is successfully updated", user: data });
    } else {
      return res.status(403).json({ msg: "Error occurred while updating user" });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    return res.status(500).json({ error: 'Failed to update user' });
  }
};


export { registerForm, getUsers, getUserById, deleteUserById, updateUserById };

