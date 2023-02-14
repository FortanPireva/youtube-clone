import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import getUserRoutes from "./routes/userRoutes";
import getVideoRoutes from "./routes/videoRoutes";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);
app.use("/user", getUserRoutes());
app.use("/videos", getVideoRoutes());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: {
      hello: () => {
        return "Hello world";
      },
    },
    graphiql: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send("Express + Typescript Server");
});

app.get("/hello", (req: Request, res: Response) => {
  res.status(200).send("Hello " + req.query["name"]);
});

app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
