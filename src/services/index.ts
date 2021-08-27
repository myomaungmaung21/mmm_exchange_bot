import request from "request"
import { fb_verified_token } from "../config"
export const callSendAPI = (sender_psid: any, response: any) => {
    let request_body: any = {
        recipient: {
            id: sender_psid
        },
        message: { text: response }
    }
    request({
        uri: 'https://graph.facebook.com/v7.0/me/messages',
        qs: { access_token: fb_verified_token },
        method: 'POST',
        json: request_body
    }, (err: any, _res: any, _body: any) => {
        if (!err) {
            console.log(`Message sent!`);
        }
        else {
            console.log(`Unable to send message ${err}`);

        }

    })
}



