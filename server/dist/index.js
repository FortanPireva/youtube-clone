"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const videoRoutes_1 = __importDefault(require("./routes/videoRoutes"));
const graphql_1 = require("graphql");
const express_graphql_1 = require("express-graphql");
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
const schema = (0, graphql_1.buildSchema)(`
  type Query {
    hello: String
  }
`);
app.use("/user", (0, userRoutes_1.default)());
app.use("/videos", (0, videoRoutes_1.default)());
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: schema,
    rootValue: {
        hello: () => {
            return "Hello world";
        },
    },
    graphiql: true,
}));
app.get("/", (req, res) => {
    return res.status(200).send("Express + Typescript Server");
});
app.get("/hello", (req, res) => {
    res.status(200).send("Hello " + req.query["name"]);
});
app.listen(PORT, () => {
    console.log(`Server started listening on port ${PORT}`);
});
