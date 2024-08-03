import express from 'express';
import { login, logout, register, updatePorfile } from '../controllers/user.controller.js';
import isAuthenticate from '../middlewares/isAuthenticate.js';

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile/update").post(isAuthenticate,updatePorfile);

export default router;