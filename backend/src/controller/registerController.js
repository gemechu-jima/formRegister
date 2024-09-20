import { connection } from "../config/mysqlDB.js";

const registerForm = (req, res) => {
  const { fname, lname, phone, city, woreda, age, gender, daughter, son } = req.body;
  let totalMember
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
  const values = [fname, lname, phone, city, woreda, age, gender, totalMember];
  connection.query(
    "INSERT INTO users (fname, lname, phone, city, woreda, age, gender, member) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    values,
    function (err, data, fields) {
      if (err) {
        console.error("Error:", err);
        return res.status(500).json({
          status: "error",
          message: "An error occurred while creating the user.",
        });
      }
      res.status(201).json({
        status: "success",
        message: "User created successfully!",
      });
    }
  );
};
const getUsers = (req, res) => {
 
  connection.query("SELECT * FROM users", (error, data, fields) => {
    if (error) {
      console.error("Error fetching users:", error);
      return res.status(500).send("Internal Server Error");
    } else {
      res.json({data});
    }
  });
};
const getUserById=(req, res)=>{
  const {id}=req.params
  connection.query("SELECT * FROM USERS WHERE id=?", [id], (err, results)=>{
    if(err) throw Error(err)
    console.log(results)
  return res.status(201).json({results})
  })
}
const deleteUserById=(req, res)=>{
  const {id}=req.params
  connection.query("DELETE FROM users WHERE id=?", [id], (err, result)=>{
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  })
  return res.status(201).json({msg:" Deleted user data"})
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

