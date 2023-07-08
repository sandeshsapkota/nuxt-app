<template>
  <header>
    <div class="container py-6 flex items-center justify-between">
      <logo/>
      <button @click="logout" class="flex items-center leading-1 font-medium font-mons">
        <svg xmlns="http://www.w3.org/2000/svg"
             width="28px" height="28px"
             viewBox="0 0 100 125" xml:space="preserve"><g><path d="M65,64.7c-1.2,3,3.6,4.3,4.8,1.3c1.8-4.4,5-7.8,7.8-11.6c1.5-2.1,2.2-3.5,0.9-6c-3.2-5.8-10.5-9.9-15.8-13.5   c-2.6-1.8-5.2,2.5-2.5,4.3c2.7,1.9,5.5,3.8,8.1,5.9c0.6,0.5,2.3,1.7,3.6,2.9c-12.6,0-25.2,0-37.8,0c-3.2,0-3.2,5,0,5   c12.9,0,25.8,0,38.7,0c-1.1,1.5-2.8,3.2-3.5,4.2C67.5,59.6,66.1,62,65,64.7z"/><path
            d="M19.4,82.1c0.1,1.4,1.1,2.4,2.5,2.5c13.3,1.3,26.7,0.3,40,0.5c3.2,0.1,3.2-4.9,0-5c-12.5-0.2-25.1,0.6-37.6-0.3   c-0.6-19.8,0-39.6,0.3-59.4c12.6-0.4,25.2-0.5,37.8-0.3c3.2,0.1,3.2-4.9,0-5c-13.4-0.2-26.8-0.1-40.2,0.4c-1.4,0.1-2.5,1.1-2.5,2.5   C19.4,39.3,18.7,60.7,19.4,82.1z"/></g></svg>
        Logout
      </button>
    </div>
  </header>
</template>

<script setup>
import {navigateTo} from "nuxt/app";
import Auth from "../../services/auth";
import {usePush} from "notivue";
import Logo from "../logo"

const push = usePush();

const logout = () => {
  Auth.logout(() => push.success('Logout successfully'));
  navigateTo('/');
}
</script>
