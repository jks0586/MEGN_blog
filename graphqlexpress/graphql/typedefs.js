import { ApolloServer, gql } from 'apollo-server-express';
// import mutation from './mutation.js';
export const typeDefs = gql`
    type Book {
        id: ID!
        title: String!
        author: String!
    }

    # type Author {
    #     name: String
    #     books: [Book]
    # }
    type Query {
        totalPosts: Int!,
        books: [Book!]!,
    }
    # type Mutation {
    #     mutation.addBook(title: String!, author: String!): Book!
    # }
`;


