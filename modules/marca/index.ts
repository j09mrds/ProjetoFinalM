import { CreateMarcaController } from "./controller/create.marca.controller";
import { GetMarcaController } from "./controller/get.marca.controller";
import { UpdateMarcaController } from "./controller/update.marca.controller";
import { DeleteMarcaController } from "./controller/delete.marca.controller";
import { GetAllMarcasController } from "./controller/getall.marca.controller";

import { CreateMarca } from "./services/create.marca.service";
import { GetMarca } from "./services/get.marca.service";
import { UpdateMarca } from "./services/update.marca.service";
import { DeleteMarca } from "./services/delete.marca.service";
import { getAllMarcas } from "./services/getall.marca.service";

import { MarcaRepository } from "./repositories/implementations/marca.Implrepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const repository = new MarcaRepository(prisma);

const createService = new CreateMarca(repository);
const createController = new CreateMarcaController(createService);

const getService = new GetMarca(repository);
const getController = new GetMarcaController(getService);

const updateService = new UpdateMarca(repository);
const updateController = new UpdateMarcaController(updateService);

const deleteService = new DeleteMarca(repository);
const deleteController = new DeleteMarcaController(deleteService);

const getAllService = new getAllMarcas(repository);
const getAllController = new GetAllMarcasController(getAllService);

export {
  createController,
  getController,
  updateController,
  deleteController,
  getAllController
};