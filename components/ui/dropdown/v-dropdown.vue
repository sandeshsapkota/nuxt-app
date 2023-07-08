<template>
  <div class="relative">
    <button class="z-10 relative flex gap-1.5 items-end focus:outline-none select-none text-gray-600 hover:text-gray-700 " @click="toggleDropdown">
      <slot name="button"></slot>
    </button>
    <!-- to close when clicked on space around it-->
    <button class="fixed inset-0 h-full w-full cursor-default focus:outline-none" v-if="this.open" @click="toggleDropdown"
            tabindex="-1"></button>
    <!--dropdown menu-->
    <transition-component>
      <div class="dropdown absolute shadow-lg  w-56  text-sm mt-4 bg-white z-[999] overflow-hidden"
           :class="placement === 'right' ? 'right-0' : 'left-0'" v-if="open">
        <slot name="content"></slot>
      </div>
    </transition-component>
  </div>
</template>

<script>
import transitionComponent from "../transition-component"
export default {
  components:{transitionComponent},
  props: {
    placement: {
      type: String,
      default: "right",
    },
  },

  data() {
    return {
      open: false,
    }
  },

  methods:{
    toggleDropdown() {
      this.open = !this.open
    },
    onEscape(e) {
      if (e.key === "Esc" || e.key === "Escape") {
        this.open = false;
      }
    },
  },

  mounted() {
    document.addEventListener("keydown", this.onEscape);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.onEscape);
  }
};
</script>
