import { getHookRates } from "../helper/query"
import { callSendAPI } from "../services"

export const handleMessage = (sender_psid: any, message: any) => {
    if (message && message.text) {
        const result: any = getHookRates(message.text)
        if (result && result.length > 0) {
            result.forEach((r: any) => {
                callSendAPI(sender_psid, `1${r.from_currency}🔄${r.to_currency}🔴${r.sell}🔵${r.buy}`)
            })
        }
        else {
            callSendAPI(sender_psid, `👋Hi there,type here "USD" or "SGD" or "EUR" etc...`)
        }
    }
    else {
        callSendAPI(sender_psid, `👋Hi there,type here "USD" or "SGD" or "EUR" etc...`)
    }
}


export const handlePostBack = (sender_psid: any, rec_postback: any) => {
    const data: any = getHookRates(rec_postback.payload)
    if (data) {
        if (data && data.length > 0) {
            data.forEach((r: any) => {
                callSendAPI(sender_psid, `1${r.from_currency}🔄${r.to_currency}🔴${r.sell}🔵${r.buy}`)
            })
        }
        else {
            callSendAPI(sender_psid, `👋Hi there,type here "USD" or "SGD" or "EUR" etc...`)
        }
    }
    else {
        callSendAPI(sender_psid, `👋Hi there,type here "USD" or "SGD" or "EUR" etc...`)
    }
}