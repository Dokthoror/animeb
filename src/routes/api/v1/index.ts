import { Router } from "express";
import popular from "./popular";

const router: Router = Router();
router.use("/popular", popular);

export default router;
