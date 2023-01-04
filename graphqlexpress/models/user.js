import mongoose from 'mongoose';

// Define the book schema
const userSchema = new mongoose.Schema(
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
    const User = mongoose.model('User', userSchema);
    export default User;