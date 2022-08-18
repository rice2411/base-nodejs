import * as express from "express";
import authRoutes from "./auth";
import userRoutes from "./user";
import fileRouter from "./file";

const router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/file", fileRouter);

export default router;
