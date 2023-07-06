<template>
  <footer>
    <div class="container py-10 flex items-center justify-between">
     <logo/>
     <p>@copyright 2020 coupon wall</p>
    </div>
  </footer>
</template>


<style>

.brand-logo svg {
  width: 280px;
}
</style>
<script>
import Logo from "../logo/logo";
export default {
  components: {Logo}
}
</script>
