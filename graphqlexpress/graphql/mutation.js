import models from "./../models/index.js";
const mutation = {
    addBook: async (parent, args, { models }) => {
    return await models.Book.create({
        title: args.title,
        author: args.author
    });
}
}

export default mutation;