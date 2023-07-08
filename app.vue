<template>
  <ClientOnly>
    <Notivue v-slot="item">
      <Notifications :item="item" />
    </Notivue>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </ClientOnly>
</template>
<script >
import {
  Notivue,
  Notifications
} from 'notivue'
export default {
  components: { Notivue, Notifications}
}
</script>
