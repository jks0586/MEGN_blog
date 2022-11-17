import { ApolloServer, gql } from 'apollo-server-express';
export const typeDefs = gql`
type Query {
    totalPosts: Int!
}
`;