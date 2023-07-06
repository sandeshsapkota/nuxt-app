import {defineEventHandler, readBody} from "h3";
import Coupon from "../utils"

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const data = body.data;

        await Coupon.redeemItem(data);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "success" }),
        };
    } catch (error) {
        console.error(error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred while redeeming the coupon." }),
        };
    }
});
