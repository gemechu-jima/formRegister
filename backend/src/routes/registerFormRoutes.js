import { Router } from "express";
import { registerForm, getUsers, getUserById, updateUserById, deleteUserById } from "../controller/registerController.js";
const router=Router()

router.post("/register", registerForm)
router.get("/", getUsers)
router.get("/:id", getUserById)
router.put("/update", updateUserById)
router.delete("/:id", deleteUserById)



export default router