import mongoose from 'mongoose';

// Define the book schema
const categorySchema = new mongoose.Schema(
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
        description: {
            type: String,
            required: false
        },
        status: {
            type: Boolean,
           
        },
        top: {
            type: Boolean,
            
        },
    },
    {
        timestamps: true
    }
    );
    const Category = mongoose.model('Category', categorySchema);
    export default Category;