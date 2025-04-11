import { Router } from "express";

import * as PetController from "../controllers/hostedPetController.js";

const router = Router();

router.get("/hostedPets", PetController.getHostedPets);
router.post("/hostedPet", PetController.createHostedPet);
router.put("/hostedPet/:id", PetController.updateHostedPet);
router.delete("/hostedPet/:id", PetController.deleteHostedPet);

export default router;