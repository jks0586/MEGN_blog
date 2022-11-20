const getProducts = ((req, res) => {
    console.log('getProducts');
})

const getProduct = ((req, res) => {
    console.log('getProduct');
})

const createProduct = ((req, res) => {
    console.log('createProduct');
})

const updateProduct = ((req, res) => {
    console.log('updateProduct');
})

const deleteProduct = ((req, res) => {
    console.log('deleteProduct');
})

const product= {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

export default product;