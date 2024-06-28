import express from "express";
// import {verifyToken} from "../middleware/verifyToken.js";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";

const router = express.Router();

router.get("/should-be-logged-in",  shouldBeLoggedIn);
// verifyToken,
router.get("/should-be-admin", shouldBeAdmin);

export default router;









