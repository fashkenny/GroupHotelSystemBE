import express from "express"

const router = express.Router()
router.route("/userSignIn").post(usersignIn);
router.route("/createUser").post(createUser);
router.route("/getUsers").get(getUsers);
router.route("/getOneUser").get(getOneAUser);
router.route("/deleteUser").get(deleteOneUser);
router.route("/updateUser").get(updateUser);