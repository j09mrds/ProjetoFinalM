import jwt from 'jsonwebtoken';
import { FuncionarioRepositoryImplementation } from '../modules/funcionario/repositories/implementations/funcionario.implrepository';
export const validateJWT = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const funcionariorepo = new FuncionarioRepositoryImplementation()

  if (!authHeader) {
    return res.status(401).send({ error: 'No token provided' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).send({ error: 'Token error' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ error: 'Token malformatted' });
  }

  jwt.verify(token, 'pgZkdPLNzm3uSgFmjgfz$x;EuM;uCP', async (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token invalid' });

    const funcionario = await funcionariorepo.getFuncionario(decoded.id);

    if (!funcionario) {
      return res.status(401).send({ error: 'Invalid user' });
    }

    req.userId = decoded.id;

    return next();
  });
};