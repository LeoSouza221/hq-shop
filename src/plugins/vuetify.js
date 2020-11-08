import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#263238',
        secondary: '#43A047',
        accent: '#455A64',
        error: '#630803',
        info: '#507097',
        success: '#2dad64',
        warning: '#f44185',
      },
    },
  },
});
