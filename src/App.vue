<template lang="pug">
  v-app
    AppBar
    v-fade-transition(mode="out-in")
      router-view
</template>

<script>
import AppBar from '@/components/AppBar.vue';

export default {
  name: 'App',

  components: {
    AppBar,
  },
};
</script>
