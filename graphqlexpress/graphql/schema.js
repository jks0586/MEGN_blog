import { gql } from "apollo-server-express";
const typeDefs =  gql`
    type Book {
        id: ID!
        title: String!
        author: String!
    }
    type Query {
        hello: String,
        books: [Book!]!,
    }
`;

export default typeDefs;