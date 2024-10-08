import express from "express";
import isAuthenticate from "../middlewares/isAuthenticate.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";

const router = express.Router();

router.route("/apply/:id").get(isAuthenticate, applyJob);
router.route("/get").get(isAuthenticate, getAppliedJobs);
router.route("/:id/applicants").get(isAuthenticate, getApplicants);
router.route("/status/:id/update").post(isAuthenticate, updateStatus);

export default router;
