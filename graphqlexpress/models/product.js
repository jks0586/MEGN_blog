import mongoose from 'mongoose';

// Define the book schema
const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        quantity: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        status: {
            type: Boolean,
        },
    
    },
    {
        timestamps: true
    }
    );
    const Product = mongoose.model('Product', productSchema);
    export default Product;