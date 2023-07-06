<template>
  <div class="relative add-coupon-dropdown-parent"
  >
    <button class="bg-[var(--primary-color)] text-white py-2 px-5 rounded-full" @click="handleDropdown"> + Add a
      coupon
    </button>
    <form @submit.prevent="postCoupon"
          class="add-coupon-dropdown absolute z-90 rounded-xl right-0 top-16 p-6 sm:p-10 bg-white grid md:grid-cols-2 gap-7 card"
          v-if="isDropdownOpen">
      <div>
        <label>Title</label>
        <input v-model="title" class="form-control" type="text">
        <p v-if="titleError" class="text-red-600 text-sm mt-1">Title is required.</p>
      </div>
      <div>
        <label>Price</label>
        <input v-model="cost" type="number" class="form-control">
        <p v-if="costError" class="text-red-600 text-sm mt-1">Cost is required.</p>
      </div>
      <button
          class="md:col-span-2 bg-[#555] hover:bg-[#333] w-full p-3 transition duration-300 text-white uppercase cursor-pointer tracking-widest">
        Submit
      </button>
    </form>
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
    const title = ref('');
    const cost = ref('');
    const titleError = ref(false);
    const costError = ref(false);
    const push = usePush();

    const handleClickOutside = (event) => {
      const modalContainer = document.querySelector('.add-coupon-dropdown-parent');

      if (modalContainer && !modalContainer.contains(event.target.parentNode)) {
        isDropdownOpen.value = false;
      }
    };

    const handleDropdown = () => isDropdownOpen.value = !isDropdownOpen.value;

    const handleClose = () => isDropdownOpen.value = false;

    const reset = () => {
      title.value = '';
      cost.value = '';
      titleError.value = false;
      costError.value = false;
    }

    const postCoupon = async () => {
      if (!title.value) {
        titleError.value = true;
      } else {
        titleError.value = false;
      }

      if (!cost.value) {
        costError.value = true;
      } else {
        costError.value = false;
      }

      if (!title.value || !cost.value) return;

      const newCoupon = {title: title.value, cost: Number(cost.value)};

      const {data: response} = await useFetch('/api/coupon', {
        method: 'post',
        body: {
          data: newCoupon,
        },
      });

      if (response._rawValue.statusCode === 500) {
        console.log('Database not connected 😟😟');
        props.handleRefresh();
        push.error('An error occurred while adding a new coupon.');
      } else {
        props.handleRefresh();
        push.success('A new coupon has been successfully added!');
      }
      reset();
      handleClose();
    }

    return {
      isDropdownOpen,
      title,
      cost,
      titleError,
      costError,
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
