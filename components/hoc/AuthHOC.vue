<template></template>
<script setup>
import {navigateTo} from "nuxt/app";
function  mounted() {
  const isLoggedIn = localStorage.getItem("login") === 'true';
  if (Boolean(isLoggedIn)) {
    navigateTo('/dashboard')
  }
  else{
    navigateTo('/')
  }
}
mounted();
</script>
