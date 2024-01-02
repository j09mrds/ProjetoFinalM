import { FuncionarioDto } from "../dtos/funcionario.dto";
import { AuthService } from "../services/auth.services"; 
import { Request, Response } from "express";

export class AuthController {
  constructor(private readonly service: AuthService) { }

  async handle(request: Request, response: Response): Promise<Response> {
    const { id, senha } = request.body;
    try {
      const result = await this.service.login(id, senha);
      response.setHeader('Authorization', 'Bearer ' + result.token);
      return response.json({ auth: true, token: result.token });
    } catch (err) {
      return response.status(401).json({ error: err.message });
    }
  }
}