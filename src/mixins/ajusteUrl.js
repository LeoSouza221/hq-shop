const ajusteUrl = {
  methods: {
    ajustarUrlImagem({ path, extension }) {
      return `${path}.${extension}`;
    },
  },
};

export default ajusteUrl;
