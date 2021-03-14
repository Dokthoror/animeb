import { Router } from "express";
import popular from "./popular";
import trending from "./trending";

const router: Router = Router();
router.use("/popular", popular);
router.use("/trending", trending);

export default router;
