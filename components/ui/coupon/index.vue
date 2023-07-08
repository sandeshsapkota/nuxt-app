<template>
  <div class="grid gap-10">
    <div class="flex justify-between items-center">
      <h2 class="sm:text-2xl font-bold text-[#444]" v-text="'Your Coupons'"/>
      <add-coupon :handleRefresh="refresh"/>
    </div>
    <div v-if="couponData?.statusCode === 200">
      <div v-if="JSON.parse(couponData.body)?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <coupon v-for="item in JSON.parse(couponData.body)" :key="item.id" :item="item" :handleRefresh="refresh"/>
      </div>
      <EmptyStateSvg v-else/>
    </div>
    <error-svg v-else/>
  </div>
</template>

<script setup>
import AddCoupon from "./add-coupon";
import ErrorSvg from "../illustration/error-svg";
import EmptyStateSvg from "../illustration/empy-state-svg";
import Coupon from "./coupon";

let {data: couponData, pending, error, refresh} = await useFetch('/api/coupon', {
  transform: _couponData => _couponData
});

</script>

