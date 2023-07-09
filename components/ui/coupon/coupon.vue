<template>
  <div class="shadow bg-gray-200 p-8 rounded md grid gap-4 items-start">
    <div class="flex items-center gap-3 justify-between flex-wrap">
      <div>
        <h4 class="capitalize text-lg">{{item.title}}<span class="text-xs opacity-60 self-center pl-1 mt-1" v-text="'Nrs. ' + item.cost"/></h4>
      </div>
      <DeleteButton v-if="isAdmin" :id="item.id" :handleRefresh="handleRefresh"/>
      <button class="w-8 h-8 flex items-center justify-center duration-200 rounded hover:bg-gray-300" v-if="isUser && item.redeemed" title="Copy discount code" @click="copyCode">
        <copy-code-svg/>
      </button>
    </div>
    <div v-if="item.redeemed"
            class="bg-gray-300 cursor-default w-full p-3 transition duration-300 text-center"
            v-text="'Already Redeemed'"/>
    <p class="opacity-60 text-black font-mons text-xs" v-if="!item.redeemed"
       v-text="'You can redeem this coupon to get discount on new year purchase.'"/>
    <button v-if="!item.redeemed"
            @click="redeemCoupon"
            class="bg-[#555] hover:bg-[#333] w-full p-3 transition duration-300 text-white"
            v-text="'Redeem'"/>
    <div class="font-mons text-sm" v-if="item.redeemed">
      <p>Coupon code: <b class="text-xs opacity-80" v-text="code"/></p>
      <small class="opacity-50 text-black" v-text="'This code offers a discount of 10% off on your purchase.'"/>
    </div>
  </div>
</template>

<script>
import DeleteButton from "./delete-coupon";
import {usePush} from "notivue";
import transitionComponent from "../transition-component"
import CopyCodeSvg from "./copy-code-svg";
import Utils from "../../utils";

export default {
  name: 'coupon',
  components: {CopyCodeSvg, DeleteButton, transitionComponent},
  props: {
    item: {type: Object, required: true},
    handleRefresh: {type: Function, required: true}
  },
  setup(props) {
    const push = usePush();
    const code = 'SUMMER' + props.item.id + 'OFF';
    const isUser = Utils.isUser()
    const isAdmin = Utils.isAdmin();

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

    function copyCode() {
      navigator.clipboard.writeText(code);
      push.info('Copied to clipboard !')
    }

    return {
      redeemCoupon,
      code,
      copyCode,
      isUser,
      isAdmin
    }
  }
}
</script>

<style scoped>

</style>
