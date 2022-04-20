<template>
  <div>
    <the-header></the-header>
    <projects></projects>
    <!-- <oneproject v-for="objs in props" :key="objs.message"></oneproject> -->
    <pre>{{ document }}</pre>
  </div>
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import projects from "../components/main/projects.vue";

import oneproject from "../components/main/oneproject.vue";

export default {
  name: "IndexPage",
  components: { TheHeader, projects, oneproject },
  computed: {
    payload() {
      // return this.document.results[0].data.slices[0].items;
    },
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query(
      this.$prismic.predicates.at("HOME", "project")
    );
    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style scoped></style>
