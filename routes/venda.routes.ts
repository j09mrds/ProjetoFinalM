
import { Router } from "express";
import {
  createController,
  findController,
  updateController,
  deleteController
} from "../modules/venda";

const router = Router();

router.post("/vendas", (req, res) => createController.handle(req, res));
router.get("/vendas/:id", (req, res) => findController.handle(req, res));
router.put("/vendas/:id", (req, res) => updateController.handle(req, res));
router.delete("/vendas/:id", (req, res) => deleteController.handle(req, res));

export default router;