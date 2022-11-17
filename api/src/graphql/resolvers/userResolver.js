import User from "../../models/user.model.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { private_key } from "../../helper/key.js";

export default {
    createUser: async (args) => {
        const newUser = new User(args.userInput);
        const user = await newUser.save();
        return user
    },

    login: async ({ email, password }) => {
        try {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('Invalid Credentials!user')
            }
            const isCorrectPassword = await bcrypt.compare(password, user.password);
            if (!isCorrectPassword) {
                throw new Error("Invalid Credentials!password")
            }
            const token = jwt.sign({ _id: user._id, email: user.email }, private_key, {
                algorithm: "RS256"
            });
            return {
                token,
                userId: user._id
                
            }
        } catch (error) {
            return error
        }
    }
}