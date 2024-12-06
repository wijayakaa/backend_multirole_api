import express from "express";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";
import {getUser,getUserById,createUser,updateUser,deleteUser} from "../controllers/User.js";    

const router = express.Router();

router.get("/users", verifyUser, adminOnly, getUser);
router.get("/users/:id", verifyUser, adminOnly, getUserById);
router.post("/users", verifyUser, adminOnly, createUser);
router.patch("/users/:id", verifyUser, adminOnly, updateUser);
router.delete("/users/:id", verifyUser, adminOnly, deleteUser);

export default router;