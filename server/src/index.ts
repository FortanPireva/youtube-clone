import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});

app.get("/hello", (req: Request, res: Response) => {
  res.status(200).send("Hello " + req.query["name"]);
});

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
