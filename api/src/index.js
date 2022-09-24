import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import './db/index.js';
import { verifyToken } from './helper/jwt.js';
import Schema from './graphql/schema/index.js';
// import Resolver from './graphql/resolvers/index.js';
import Resolver from './graphql/resolvers/index.js';

dotenv.config();

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors());

app.use(verifyToken);

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  rootValue: Resolver,
  graphiql: true
}))

app.listen(process.env.PORT, () => {
  console.log('server is running on ' + process.env.PORT);
})