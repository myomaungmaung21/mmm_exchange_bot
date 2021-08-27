import { Router } from 'express'
import { body } from 'express-validator';
import { addCurrency, currencies, deleteCurrency, updateCurrency } from '../controllers/currency';

import { isAuthenticated } from '../middleware/authenticated';

const router = Router();

// currencies 
router.get('/', currencies);
// add currency
router.post('/', isAuthenticated, [
    body('name').notEmpty().isUppercase(),
    body('keyword').notEmpty().isLowercase()
], addCurrency)
// update currency
router.put('/', isAuthenticated, [
    body('name').notEmpty().isUppercase(),
    body('keyword').notEmpty().isLowercase(),
    body('id').notEmpty().withMessage('Curreny Id must not be empty')
], updateCurrency)

//delete currency
router.delete('/', isAuthenticated, [
    body('id').notEmpty().withMessage('Curreny Id must not be empty')
], deleteCurrency)

export default router;

