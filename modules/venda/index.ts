
import { CreateVendaController } from "./controller/create.venda.controller";
import { FindVendaController } from "./controller/get.venda.controller";
import { UpdateVendaController } from "./controller/update.venda.controller";
import { DeleteVendaController } from "./controller/delete.venda.controller";

import { CreateVendaService } from "./services/create.venda.service";
import { FindVendaService } from "./services/get.venda.service";
import { UpdateVendaService } from "./services/update.venda.service";
import { DeleteVendaService } from "./services/delete.venda.service";
import { VendaRepository } from "./repositories/implementions/venda.Implrepository";


const repository = new VendaRepository();

const createService = new CreateVendaService(repository);
const createController = new CreateVendaController(createService);

const findService = new FindVendaService(repository);
const findController = new FindVendaController(findService);

const updateService = new UpdateVendaService(repository);
const updateController = new UpdateVendaController(updateService);

const deleteService = new DeleteVendaService(repository);
const deleteController = new DeleteVendaController(deleteService);

export {
  createController,
  findController,
  updateController,
  deleteController
};