import mongoose from 'mongoose';

// Define the book schema
const adminSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: { unique: true }
        },
        password: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
           
        }
    },
    {
        timestamps: true
    }
    );
    const Admin = mongoose.model('Admin', adminSchema);
    export default Admin;