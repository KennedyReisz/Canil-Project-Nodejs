import { Router } from "express";
import * as pageController from "./Controllers/pageController";
import * as searchController from "./Controllers/searchController";

const router = Router();

router.get("/", pageController.home);
router.get("/dogs", pageController.dogs);
router.get("/cats", pageController.cats);
router.get("/fishes", pageController.fishes);

router.get("/search", searchController.search);

export default router;
