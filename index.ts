import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./src/model/index.model";
import router from "./src/routes/index.routes";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.post("/", (req: Request, res: Response) => {
  res.send({ msg: "Express + TypeScript Server", hello: "Hello!", req });
});
db.sequelize.sync();

app.use("/api", router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
