import { Router } from "express";
import { registerForm, getUsers, getUserById, updateUserById, deleteUserById } from "../controller/registerController.js";
import authenticate from "../middleware/authentication.js";
const router=Router()

router.post("/register", registerForm)
router.get("/",authenticate, getUsers)
router.get("/:id", getUserById)
router.put("/update/:id", updateUserById)
router.delete("/:id", deleteUserById)



export default router