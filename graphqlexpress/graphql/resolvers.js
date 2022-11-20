import models from './../models/index.js';
// import mutation  from './mutation.js';
export const resolvers = {
    Query: {
      totalPosts: () => 4278,
      books: async () => {
        return await models.Book.find()
    },
    },
    // Mutation:{
    //     mutation
    // }
    
  };
