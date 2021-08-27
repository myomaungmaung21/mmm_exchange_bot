import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'
import { rateProps, responseProps } from '../interfaces';
import { Rate } from '../models';

// rates
export const rates = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error: any = new Error("Get rates");
            error.statusCode = 422;
            error.data = errors.array();
            throw error
        }
        else {
            const rates = await Rate.find().populate('from_currency').populate('to_currency').populate('user');
            if (rates) {
                const responseData: responseProps = {
                    status: 1,
                    message: 'success',
                    data: rates
                }
                res.status(200).json(responseData)
            }
            else {
                const error: any = new Error("No data!");
                error.statusCode = 404;
                throw error
            }
        }
    } catch (error) {
        if (!error.statusCode) {
            error.statusCode = 500;
        }
        next(error)
    }
}

//add rate 

export const addRate = async (req: any, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const error: any = new Error('add_rate_failed');
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        else {
            const rate_data: rateProps = {
                from_currency: req.body.from_currency,
                to_currency: req.body.to_currency,
                sell: req.body.sell,
                buy: req.body.sell,
                user: req.user_id
            }
            const rate = new Rate(rate_data);
            const result = await rate.save();
            if (result) {
                const responseData: responseProps = {
                    status: 1,
                    message: 'Rate added successfully!',
                }
                res.status(201).json(responseData);
            }
            else {
                const error: any = new Error('rate_add_fail');
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

//update rate

export const updateRate = async (req: any, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error: any = new Error('update_rate_failed');
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        else {
            const rate_data: rateProps = {
                from_currency: req.body.from_currency,
                to_currency: req.body.to_currency,
                sell: req.body.sell,
                buy: req.body.buy,
                user: req.user_id
            }
            const result = await Rate.findByIdAndUpdate(req.body.id, rate_data);
            if (result) {
                const responseData: responseProps = {
                    status: 1,
                    message: 'Rate updated successfully!'
                }
                res.status(200).json(responseData)
            }
            else {
                const error: any = new Error('rate_update_fail');
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


//delete rate

export const deleteRate = async (req: any, res: Response, next: NextFunction) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const error: any = new Error('update_rate_failed');
            error.data = errors.array();
            error.statusCode = 422;
            throw error;
        }
        else {
            const result = await Rate.findByIdAndDelete(req.body.id);
            if (result) {
                const responseData: responseProps = {
                    status: 1,
                    message: 'Rate deleted successfully!'
                }
                res.status(200).json(responseData)
            }
            else {
                const error: any = new Error('rate_update_fail');
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