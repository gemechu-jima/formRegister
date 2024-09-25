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
            message: "An error occurred while creating the user.",
          });
        }else{
          res.status(201).json({
            status: "success",
            message: "User created successfully!",
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
    let data=await registerModel.findOne({id})
    if(!data) throw Error(err)
    console.log(data)
   return res.status(201).json({data})
  
}
const deleteUserById=async(req, res)=>{
  const {id}=req.params
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




const updateUserById=(req, res)=>{
 const {id, fname, lname,  phone, age, city, woreda, member, gender}=req.body
const updateData={fname, lname,  phone, age, city, woreda, member, gender}
console.log("user ...",updateData)
 try {
  connection.query("UPDATE users SET ? WHERE id=?", [updateData, id], 
    (error, results)=>{
     if(error){
      console.log("Error during update data ", error)
      return res.status(500).json({msg :error, success:false, error:true})
     }
     if (results.affectedRows === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
     return res.status(200).json({ message: 'User updated successfully' })
  })
 } catch (error) {
  console.error('Error updating user:', error);
  return res.status(500).json({   
  error: 'Failed to update user' });
}
 }

export { registerForm, getUsers, getUserById, deleteUserById, updateUserById };

