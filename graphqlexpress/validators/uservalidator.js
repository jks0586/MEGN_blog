import { body, validationResult } from "express-validator";
import User from "../models/user.js";
const userValidationRules = () => {
	return [
		body('username').not().notEmpty().withMessage('User Name is required'),
		body('email').not().isEmpty().withMessage('Email is required')
			.trim()
			.normalizeEmail()
			.isEmail()
			.withMessage("Invalid Email, Please fill Valid Email")
			.custom((value, {req}) => {
			return new Promise((resolve, reject) => {
				User.findOne({email:req.body.email}, function(err, user){
				if(err) {
					reject(new Error('Server Error'))
				}
				if(Boolean(user)) {
					reject(new Error('E-mail already in use'))
				}
				resolve(true)
				});
			});
			}),
		body('password').not().notEmpty().withMessage('Password Is Required'),
			
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
