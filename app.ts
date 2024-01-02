import express from 'express';
import cors from 'cors';
import { errorHandler } from './middleware/error.handler';
import "express-async-errors";

const app = express();

import routes from './routes/';
const port = 3000;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});