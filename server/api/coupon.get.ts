import {defineEventHandler, readBody} from "h3";
import Coupon from "../utils"

export default defineEventHandler(async (event) => {
    try {
        const items = await Coupon.getItems();
        return {
            statusCode: 200,
            body: JSON.stringify(items),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "An error occurred while fetching items." }),
        };
    }
})

