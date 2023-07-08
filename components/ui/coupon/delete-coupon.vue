<template>
  <button class="text-red-800 -mr-1"
          @click="deleteCoupon()">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="28px" height="28px" viewBox="0 0 100 125">
      <polygon
          points="66.36 80.06 33.64 80.06 31.74 27.62 25.91 27.83 28.01 85.9 71.99 85.9 74.09 27.83 68.26 27.62 66.36 80.06"/>
      <path d="M42.71,71.6V36.21a2.92,2.92,0,0,0-5.84,0V71.6a2.92,2.92,0,0,0,5.84,0Z"/>
      <path d="M52.92,71.6V36.21a2.92,2.92,0,0,0-5.84,0V71.6a2.92,2.92,0,0,0,5.84,0Z"/>
      <path d="M63.13,71.6V36.21a2.92,2.92,0,0,0-5.84,0V71.6a2.92,2.92,0,0,0,5.84,0Z"/>
      <path
          d="M62.93,20V18.14a6.75,6.75,0,0,0-6.75-6.74H43.82a6.75,6.75,0,0,0-6.75,6.74V20H19.21v5.84H80.79V20Zm-20-1.87a.9.9,0,0,1,.91-.9H56.18a.9.9,0,0,1,.91.9V20H42.91Z"/>
    </svg>
  </button>
</template>
<script>
import {usePush} from 'notivue'

export default {
  props: {
    id: {type: Number, required: true},
    handleRefresh: {type: Function, required: true}
  },
  setup(props) {
    const push = usePush();

    async function deleteCoupon(data) {
      const {data: response} = await useFetch('/api/coupon', {
        method: 'delete',
        body: {
          data: {id: props.id},
        }
      })
      push.success('A coupon has been successfully deleted !')
      props.handleRefresh();
    }

    return {
      deleteCoupon: deleteCoupon
    }
  },
}
</script>
