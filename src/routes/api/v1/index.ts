import { Router } from "express";
import popular from "./popular";
import trending from "./trending";
import anime from "./anime";

const router: Router = Router();
router.use("/popular", popular);
router.use("/trending", trending);
router.use("/anime", anime);

export default router;
