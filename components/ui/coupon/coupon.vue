<template>
  <div class="shadow bg-gray-200 p-8 rounded md grid gap-4 items-start">
    <div class="flex items-center gap-3 justify-between flex-wrap">
      <div class="flex gap-1">
        <h4 class="capitalize text-lg" v-text="item.title"/>
        <span class="text-xs opacity-60 self-center mt-1" v-text="'Nrs. ' + item.cost"/>
      </div>
      <DeleteButton :id="item.id" :handleRefresh="handleRefresh"/>
    </div>
    <button v-if="item.redeemed"
            class="bg-gray-300 text-gray-500 cursor-default w-full p-3 transition duration-300"
            v-text="'Already Redeemed'"/>
    <button v-else
            @click="redeemCoupon"
            class="bg-[#555] hover:bg-[#333] w-full p-3 transition duration-300 text-white"
            v-text="'Redeem'"/>
    <div class="font-mons text-sm" v-if="item.redeemed">
      <p>Coupon code: <b class="text-xs opacity-80" v-text="'SUMMER' + item.id + 'OFF'"/></p>
      <small class="opacity-50 text-black" v-text="'This  code offers a discount of 10% off on your purchase'"/>
    </div>
  </div>
</template>

<script>
import DeleteButton from "./delete-coupon";
import {usePush} from "notivue";

export default {
  name: 'coupon',
  components: {DeleteButton},
  props: {
    item: {type: Object, required: true},
    handleRefresh: {type: Function, required: true}
  },
  setup(props) {
    const push = usePush();

    async function redeemCoupon() {
      console.log('hi')
      const {data: response} = await useFetch('/api/redeem', {
        method: 'post',
        body: {
          data: {
            id: props.item.id,
          },
        }
      })

      if (response) {
        push.success('Coupon redeemed successfully.')
        props.handleRefresh();
      } else {
        console.log(e)
        push.error('An error occurred while redeeming the coupon.')
      }
    }

    return {
      redeemCoupon
    }
  }
}
</script>

<style scoped>

</style>
