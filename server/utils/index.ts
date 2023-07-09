import prisma from "~/server/prisma";

class Coupon {
    async getItems() {
        try {
            return await prisma.coupon.findMany({
                orderBy: {
                    created_at: "desc"
                }
            })
        } catch (e) {
            console.log(e);
            throw new Error("An error occurred while setting the coupon.");
        }
    }

    async setItem(coupon: any) {
        try {
            const createdCoupon = await prisma.coupon.create({
                data: { ...coupon, redeemed: false },
            });
            return createdCoupon;
        } catch (error) {
            console.error(error);
            throw new Error("An error occurred while setting the coupon.");
        }

    }

    async redeemItem(data) {
        const {id} = data
        try {
            return await prisma.coupon.update({
                where: {id: id},
                data: {redeemed: true}
            })
        } catch (e) {
            console.log(e)
        }
    }

    async deleteItem(data) {
        const {id} = data
        return await prisma.coupon.delete({
            where: {id: id},
        })
    }
}


export default new Coupon();
