<template>
  <div class="shadow bg-gray-200 p-8 rounded md grid gap-4">
    <div class="flex items-center gap-3 justify-between flex-wrap">
      <div class="flex gap-1">
        <h4 class="capitalize text-lg" v-text="item.title"/>
        <span class="text-xs opacity-60 self-center mt-1" v-text="'Nrs. ' + item.cost"/>
      </div>
      <DeleteButton :id="item.id" :handleRefresh="handleRefresh"/>
    </div>
    <button @click="redeemCoupon" :class="item.redeemed ? 'bg-[var(--primary-color)]': 'bg-[#555] hover:bg-[#333]'"
            class="w-full p-3 transition duration-300  text-white  cursor-pointer">
      {{ item.redeemed ? 'Already Redeemed ' : 'Redeem' }}
    </button>
  </div>
</template>

<script>
import DeleteButton from "./delete-coupon";

export default {
  name: 'coupon',
  components: {DeleteButton},
  props: {
    item: {type: Object, required: true},
    handleRefresh: {type: Function, required: true}
  },
  methods: {
    async redeemCoupon() {
      const {data: response} = await useFetch('/api/redeem', {
        method: 'post',
        body: {
          data: {
            id: this.item.id,
          },
        }
      })
      this.handleRefresh();
    }
  }
}
</script>

<style scoped>

</style>
