<template>
  <v-dropdown placement="right">
    <!-- Button  -->
    <template v-slot:button>
      <user-menu-avatar/>
    </template>
    <!--  Dropdown content -->
    <template v-slot:content>
      <div class="p-3 capitalize border border-b border-x-0 border-t-0">
        <span class="mr-2 capitalize text-sm" v-text="Utils.getUser()"/>
      </div>
      <button
          class="flex gap-1 items-center leading-1 font-medium font-mons w-full p-3 hover:bg-gray-200 transition duration-200">
        <setting-svg/>
        Setting
      </button>
      <button @click="logout"
              class="flex items-center leading-1 font-medium font-mons w-full p-3 hover:bg-gray-200 transition duration-200">
        <log-out-svg/>
        Logout
      </button>
    </template>
  </v-dropdown>
</template>


<script setup>
import {navigateTo} from "nuxt/app";
import Auth from "../../services/auth";
import {usePush} from "notivue";
import vDropdown from "../../ui/dropdown/v-dropdown"
import Utils from "../../utils";
import LogOutSvg from "./log-out-svg";
import SettingSvg from "./setting-svg";
import UserMenuAvatar from "./user-menu-avatar";

const push = usePush();

const logout = () => {
  Auth.logout(() => push.success('Logout successfully'));
  navigateTo('/');
}
</script>
