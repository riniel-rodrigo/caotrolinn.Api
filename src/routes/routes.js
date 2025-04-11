import { Router } from "express";

import { createHostedPet } from "../controllers/hostedPetController.js";

const router = Router();

// router.get("/");
router.post("/hostedPet", createHostedPet);

export default router;