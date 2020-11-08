<template lang="pug">
  .apresentar-videos
    v-slide-x-transition
      v-data-iterator(
        :items="videos"
        :items-per-page.sync="videos.length"
        hide-default-footer
        v-if="videos.length"
      )
        template(v-slot:default="props")
          v-container
            v-row
              v-col(
                v-for="(item, index) in props.items"
                :key="index"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                xl="2"
              )
                v-card(
                  color="accent"
                  hover
                  height="420"
                  style="overflow: hidden"
                )
                  v-card-text
                    v-row(justify="center" align="stretch")
                      v-col(cols="12")
                        v-img(
                          :src="item.snippet.thumbnails.high.url"
                          contain
                        )
                      v-col(col="12")
                        h4.py-2.subtitle-2 {{ item.snippet.title | cortarTexto }}
                        p.text-format.body-2 {{ item.snippet.description }}
</template>

<script>
export default {
  name: 'ListagemVideosApresentar',

  props: {
    videos: {
      type: Array,
      required: true,
    },
  },

  filters: {
    cortarTexto(string) {
      if (string.length > 30) {
        return `${string.slice(0, 30)}...`;
      }

      return string;
    },
  },
};
</script>

<style scoped>
  .apresentar-videos {
    margin-top: 100px;
  }

  .text-format {
    text-align: justify;
  }
</style>
