import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import {dbconnect} from './config/db.js';
dbconnect();
import { typeDefs } from './graphql/typedefs.js';
import { resolvers } from './graphql/resolvers.js';
import routes from './rest/routes/routes.js';
import cors from 'cors';
// import resolvers from './graphql/resolvers/index.js';
// import typeDefs from './graphql/schema.js';
// import models from './models/index.js';
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
//   context: () => {
//     return { models };
//  }
});

//express server
const app = express();
app.use(cors({origin: "*"}))
app.use(express.json({limit: '500mb'}));
app.use(express.urlencoded({extended: true,limit: '500mb'}));
await apolloServer.start();
apolloServer.applyMiddleware({ app });
app.use("/public", express.static("./public"));
app.use("/rest", routes);

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
});