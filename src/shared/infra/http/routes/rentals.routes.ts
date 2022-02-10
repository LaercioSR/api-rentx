import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/devolutionRental/DevolutionRentalController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const rentalsRoutes = Router();

const createRentalsController = new CreateRentalController();
const devolutionRentalsController = new DevolutionRentalController();

rentalsRoutes.post("/", ensureAuthenticated, createRentalsController.handle);
rentalsRoutes.post(
  "/devolution/:id",
  ensureAuthenticated,
  devolutionRentalsController.handle
);

export { rentalsRoutes };
