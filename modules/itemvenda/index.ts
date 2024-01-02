
import { CreateItemVendaController } from "./controller/create.itemvenda.controller";
import { GetItemVendaController } from "./controller/get.itemvenda.controller";
import { UpdateItemVendaController } from "./controller/update.itemvenda.controller";
import { DeleteItemVendaController } from "./controller/delete.itemvenda.controller";

import { CreateItemVendaService } from "./services/create.itemvenda.service";
import { GetItemVendaService } from "./services/get.itemvenda.service";
import { UpdateItemVendaService } from "./services/update.itemvenda.service";
import { DeleteItemVendaService } from "./services/delete.itemvenda.service";

import { ItemVendaRepository } from "./repositories/implementations/itemvenda.Implrepository";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const repository = new ItemVendaRepository(prisma);

const createService = new CreateItemVendaService(repository);
const createController = new CreateItemVendaController(createService);

const getService = new GetItemVendaService(repository);
const getController = new GetItemVendaController(getService);

const updateService = new UpdateItemVendaService(repository);
const updateController = new UpdateItemVendaController(updateService);

const deleteService = new DeleteItemVendaService(repository);
const deleteController = new DeleteItemVendaController(deleteService);


export {
  createController,
  getController,
  updateController,
  deleteController
  
};