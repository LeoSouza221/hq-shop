<template lang="pug">
  v-snackbar(
    v-model="abrirAlerta"
    color="success"
    timeout="4000"
  ) {{ textoMensagem }}
</template>

<script>
export default {
  name: 'Alerta',

  props: {
    abrirAlerta: {
      type: Boolean,
    },
    textoMensagem: {
      type: String,
    },
  },
};
</script>
