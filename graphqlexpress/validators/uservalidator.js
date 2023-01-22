import { body, validationResult } from "express-validator";
import User from "../models/user";
const userValidationRules = () => {
	return [
		body('username').notEmpty(),
		// body('email')
		// 	.trim()
		// 	.normalizeEmail()
		// 	.isEmail()
		// 	.withMessage("Invalid Email, Please fill Valid Email")
		// 	.custom(async (email)=>{
        //         const existingUser =
        //         await User.findOne({'email':email},(errors,user)=>{
        //             return user;
        //         })
        //     }),
	];
};

const userValidate = (req, res, next) => {
	const errors = validationResult(req);
	if (errors.isEmpty()) {
		next();
	}
	const extractedErrors = [];
	errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

	res.status(422).json({
		errors: extractedErrors,
	});
};

export { userValidationRules, userValidate };
