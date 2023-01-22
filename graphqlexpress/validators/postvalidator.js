import { body,validationResult } from "express-validator";

const postValidationRules = () => {
    return [
      body('name').isLength({min:1}),
      body('description').isLength({ min: 1 }),
    ]
  }

  const postValidate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
       next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
     res.status(422).json({
      errors: extractedErrors,
    })
  }

export  { postValidationRules, postValidate };