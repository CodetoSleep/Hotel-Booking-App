import express from "express";
import { updateUser, deleteUser, getUser, getAllUsers } from "../controllers/userControllers.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("You are authenticated")
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("Hello User, you are logged in and you can manage your account")
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin, you are logged in and you can manage all account")
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

 //GET ALL
router.get("/", verifyAdmin, getAllUsers);

export default router;