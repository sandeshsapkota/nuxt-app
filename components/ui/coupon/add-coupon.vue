<template>
  <div class="relative add-coupon-dropdown-parent"
  >
    <button class="bg-primary text-white py-2 px-5 rounded-full" @click="handleDropdown"> + Add a
      coupon
    </button>

    <FormKit
        type="form"
        :config="{ preserveErrors: true }"
        :actions="false"
        @submit="postCoupon"
        v-if="isDropdownOpen"
    >
      <!--  Title  -->
      <FormKit
          type="text"
          label="Title"
          name="title"
          validation="required|length:4"
          autocomplete="off"
      />
      <!--  Password Name -->

      <FormKit
          type="number"
          name="price"
          label="Price"
          validation="required|numeric"
      />

      <!--  Sign In Btn -->
      <FormKit
          class="add-coupon-submit-button"
          type="submit"
          label="Sign In">
      </FormKit>
  </FormKit>
  </div>
</template>

<script>
import {usePush} from "notivue";

export default {
  props: {
    handleRefresh: {type: Function, required: true}
  },
  setup(props) {
    const isDropdownOpen = ref(false);
    const push = usePush();

    const handleClickOutside = (event) => {
      const modalContainer = document.querySelector('.add-coupon-dropdown-parent');
      if (modalContainer && !modalContainer.contains(event.target.parentNode)) {
        isDropdownOpen.value = false;
      }
    };

    const handleDropdown = () => isDropdownOpen.value = !isDropdownOpen.value;

    const handleClose = () => isDropdownOpen.value = false;

    const postCoupon = async (data) => {
      const {title, price} = data
      const newCoupon = {title: title, cost: Number(price)};
      console.log(newCoupon);

      const {data: response} = await useFetch('/api/coupon', {
        method: 'post',
        body: {
          data: newCoupon,
        },
      });

      if (response._rawValue.statusCode === 500) {
        console.log('Database not connected 😟😟');
        push.error('An error occurred while adding a new coupon.');
      } else {
        props.handleRefresh();
        push.success('A new coupon has been successfully added!');
      }
      handleClose();
    }

    return {
      isDropdownOpen,
      handleDropdown,
      handleClickOutside,
      postCoupon
    }
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
}
</script>
