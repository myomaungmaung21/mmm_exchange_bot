import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { currencyProps, responseProps } from '../interfaces';
import { Currency } from '../models';

// get all currency
export const currencies = async (_req: Request, res: Response, next: NextFunction) => {
    try {
        const currencies = await Currency.find();
        if (currencies) {
            const responseData: responseProps = {
                status: 1,
                message: 'success',
                data: currencies
            }
            res.status(200).json(responseData)
        }
        else {
            const error: any = new Error(`Data doesn't found!`)
            error.statusCode = 404;
            throw error;
        }

    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    }
}

// add_currency 

export const addCurrency = async (req: any, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error: any = new Error("Add currency failed");
            error.statusCode = 422;
            error.data = errors.array()
            throw error;
        }
        else {
            const currency_data: currencyProps = {
                name: req.body.name,
                keyword: req.body.keyword,
                user: req.user_id
            }
            const currency = new Currency(currency_data);
            const result = await currency.save();
            if (result) {
                const responseData: responseProps = {
                    status: 1,
                    message: 'Currency added successful!',
                }
                res.status(201).json(responseData)

            }
            else {
                const error: any = new Error("Curreny added failed!");
                error.statusCode = 422;
                throw error;
            }
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    }
}

// update currency 

export const updateCurrency = async (req: any, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const error: any = new Error("update currency failed");
            error.statusCode = 422;
            error.data = errors.array()
            throw error;
        }
        else {
            const currency_update_data: currencyProps = {
                name: req.body.name,
                keyword: req.body.name,
                user: req.user_id,
            }
            const result = await Currency.findByIdAndUpdate(req.body.id, currency_update_data)
            if (result) {
                const responseData: responseProps = {
                    status: 1,
                    message: 'updated successful!',
                }
                res.status(200).json(responseData)
            }
            else {
                const error: any = new Error("Curreny updated failed!");
                error.statusCode = 422;
                throw error;
            }

        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    }
}

//delete currency 

export const deleteCurrency = async (req: any, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const error: any = new Error("update currency failed");
            error.statusCode = 422;
            error.data = errors.array()
            throw error;
        }
        else {

            const result = await Currency.findByIdAndDelete(req.body.id)
            if (result) {
                const responseData: responseProps = {
                    status: 1,
                    message: 'deleted successful!',
                }
                res.status(200).json(responseData)
            }
            else {
                const error: any = new Error("Curreny deleted failed!");
                error.statusCode = 422;
                throw error;
            }

        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    }
}

