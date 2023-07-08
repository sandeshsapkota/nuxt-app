<template>
  <transition enter-active-class="transition-all duration-200 ease-out"
              leave-active-class="transition-all duration-750 ease-in" enter-class="opacity-0"
              enter-to-class="opacity-100" leave-class="opacity-100"
              leave-to-class="opacity-0">
    <slot/>
  </transition>
</template>
