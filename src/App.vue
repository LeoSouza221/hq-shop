<template lang="pug">
  v-app(
    :style=`{
      backgroundColor: $vuetify.theme.themes.dark.primary
    }`
    class="background-app"
  )
    svg(
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      class="svg-posicao"
    )
      path(
        :fill="$vuetify.theme.themes.dark.secondary"
        fill-opacity="1"
        d=`M0,256L48,229.3C96,203,192,149,288,154.7C384,
        160,480,224,576,218.7C672,213,768,139,864,128C960,
        117,1056,171,1152,197.3C1248,224,1344,224,1392,
        224L1440,224L1440,320L1392,320C1344,320,1248,320,
        1152,320C1056,320,960,320,864,320C768,320,672,320,
        576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`
      )
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

<style scoped>
  .svg-posicao {
    position: fixed;
    bottom: 0;
  }

  .background-app {
    background-image: url(https://images.unsplash.com/photo-1588497859490-85d1c17db96d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80) !important;
    background-blend-mode: multiply;
  }
</style>
