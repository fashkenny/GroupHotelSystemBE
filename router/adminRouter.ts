import express from "express";




const router = express.Router()
router.route("/adminSignIn").post(adminsignIn);
router.route("/createAdminUser").post(createAdminUser);
router.route("/getAdminUsers").get(getAdminUsers);
router.route("/getOneAdminUser").get(getOneAdminUser);
router.route("/deleteAdminUser").get(deleteOneAdminUser);
router.route("/updateAdminUser").get(updateAdminUser);

export default router