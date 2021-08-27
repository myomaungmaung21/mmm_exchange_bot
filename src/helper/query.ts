import { Currency, Rate } from "../models"

export const getHookRates = async (search_text: string) => {
    const currency: any = await Currency.findOne({ name: { $regex: '.*' + search_text + '.*' } });
    if (currency) {
        const rates = await Rate.find({ from_currency: currency._id }).populate('currency').populate('user')
        if (rates) {
            return rates;
        }
    }
    else {
        return;
    }
}