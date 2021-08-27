import { Router } from 'express'
import { signinUser, signupUser } from '../controllers/user';
import { body } from 'express-validator'
import { User } from '../models';
const router = Router();
// signin
router.post('/', [
    body('email').notEmpty().trim().isEmail().normalizeEmail().custom((val: any) => {
        return User.findOne({ email: val }).then((user: any) => {
            if (!user) {
                return Promise.reject(`User email doesn't exist!`)
            }
            else {
                return Promise.resolve()
            }
        })

    }),
    body('password').notEmpty().isStrongPassword()
], signinUser)

// signup
router.post('/', [
    body('email').notEmpty().trim().isEmail().normalizeEmail().custom((val: any) => {
        return User.findOne({ email: val }).then((user: any) => {
            if (user) {
                return Promise.reject(`User email already used!`)
            }
            else {
                return Promise.resolve()
            }
        })

    }),
    body('password').notEmpty().isStrongPassword(),
    body('username').notEmpty().withMessage("Username must not be empty!")
], signupUser)

export default router;

