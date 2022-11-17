import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { typeDefs } from './graphql/typedefs.js';
import { resolvers } from './graphql/resolvers.js';


//graphql server

//types query/mutation/subscription
// const typeDefs = `
//     type Query {
//         totalPosts: Int!
//     }
// `;

// //resolvers
// const resolvers = {
//   Query: {
//     totalPosts: () => 42,
//   },
// };
// console.log(typedefs);
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});


//express server
const app = express();
await apolloServer.start();
apolloServer.applyMiddleware({ app });

app.get("/rest", (req, res) => {
    res.json({
      data: "API is working...",
    });
  });

  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${process.env.PORT}`);
  });