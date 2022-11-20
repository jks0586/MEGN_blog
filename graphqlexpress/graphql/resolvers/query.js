import models from "../../models/index.js";
// export default hello = () => 'Hello world!';
const books = async () => {
    return await models.Book.find()
}

export default books;