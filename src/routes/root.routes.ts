import { Router } from "express";
import { rootController } from "@controllers/root.controller";

const router = Router();

router.get("/", rootController);

export default router;
