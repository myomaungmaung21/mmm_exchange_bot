import { Response, NextFunction, Request } from 'express'
import { fb_verified_token } from '../config';
import { handleMessage, handlePostBack } from '../processes';

export const getWebHook = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.query['hub.verify_token'] === fb_verified_token) {
            console.log('webhook verified');
            res.status(200).send(req.query['hub.challenge']);
        }
        else {
            const error: any = new Error(`Token mismatch!`)
            error.statusCode = 422;
            throw error;
        }
    } catch (error) {
        if (!error.statusCode) {
            next(error)
        }
    }
}

export const postWebHook = (req: Request, res: Response, next: NextFunction) => {
    try {
        if (req.body.object === 'page') {
            req.body.entry.forEach((entry: any) => {
                const web_hook_event: any = entry.messaging[0];
                console.log(web_hook_event);
                const sender_psid = web_hook_event.sender.id;
                console.log(`👦Facebook_User_ID ${sender_psid}`);
                if (web_hook_event.message) {
                    handleMessage(sender_psid, web_hook_event.message)
                }
                else if (web_hook_event.postback) {
                    handlePostBack(sender_psid, web_hook_event.postback)
                }
            })
            res.status(200).send(`👍 Event receieved!`)
        }
    } catch (error) {
        next(error)
    }
}

