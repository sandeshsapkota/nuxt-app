<template>
  <Header/>
  <AuthHOC/>
  <div class="container py-4">
    <CouponList/>
  </div>
</template>

<script setup>
import CouponList from "../components/ui/coupon";
import AuthHOC from "../components/hoc/AuthHOC";
import Header from "../components/ui/header";
</script>

