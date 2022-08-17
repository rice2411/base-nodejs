import * as express from "express";
import authRoutes from "./auth";
import userRoutes from "./user";

const router = express.Router();

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
// router.use("/manager", managerRoutes);
// router.use("/permission", permissionRoutes);
// router.use("/group-role", gRoleRoutes);
// router.use("/system-setting", systemSettingRoutes);
// router.use("/request", requestRoutes);
// router.use("/hierarchy", hierarchyRoutes);
// router.use("/team", teamRoutes);

export default router;
