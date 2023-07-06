<template>
  <Header/>
  <ClientOnly>
    <Notivue v-slot="item">
      <Notifications :item="item" />
    </Notivue>
  </ClientOnly>
  <div class="container py-4">
    <CouponList/>
  </div>
</template>
<script >
import {
  Notivue,
  Notifications
} from 'notivue'
import CouponList from "./components/coupon";
export default {
  components: {CouponList, Notivue, Notifications}
}
</script>
