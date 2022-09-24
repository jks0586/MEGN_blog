import { buildSchema } from "graphql";

export default buildSchema(`
    type User{
        _id:ID!
        username:String!
        first_name:String!
        last_name:String!
        email:String!
        password:String!
    }
    input UserInput{
        username:String!
        first_name:String!
        last_name:String!
        email:String!
        password:String!
    }
    type LoginReturnType{
        token:String
        userId:ID
    }
    type RootMutation{
        createUser(userInput:UserInput!):User!
    }
    type RootQuery{
        users:[User!]!
        login(email:String!,password:String!):LoginReturnType!
    }
    schema{
        query:RootQuery
        mutation:RootMutation
    }
`);