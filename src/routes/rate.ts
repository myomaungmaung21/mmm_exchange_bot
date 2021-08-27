import { Router } from 'express'
import { body } from 'express-validator';
import { addRate, deleteRate, rates, updateRate } from '../controllers/rate';
import { isAuthenticated } from '../middleware/authenticated';

const router = Router();
//rates
router.get('/', rates)
// add rate
router.post('/', isAuthenticated, [
    body('from_currency').notEmpty().withMessage('From currency must not be empty'),
    body('to_currency').notEmpty().withMessage('To currency must not be empty'),
    body('sell').notEmpty().isNumeric(),
    body('buy').notEmpty().isNumeric()
], addRate)
// update rate
router.put('/', isAuthenticated, [
    body('from_currency').notEmpty().withMessage('From currency must not be empty'),
    body('to_currency').notEmpty().withMessage('To currency must not be empty'),
    body('sell').notEmpty().isNumeric(),
    body('buy').notEmpty().isNumeric(),
    body('id').notEmpty().withMessage('Rate Id must not be empty')
], updateRate)
//delete rate
router.delete('/', isAuthenticated, [
    body('id').notEmpty().withMessage('Rate Id must not be empty')
], deleteRate)

export default router;

