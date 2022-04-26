<template>
  <div class="main-container">
    <the-header
      :name="head.title[0].text"
      :image="head.imageProfil.url"
      :descriptionPerson="head.descriptionPerson[0].text"
      :github="head.linkgithub.url"
      :linkedin="head.linkedin.url"
      :text="head.description[0].text"
    >
    </the-header>
    <project-container> </project-container>
    <div class="trait" id=""></div>
    <project-card
      v-for="(project, index) in payload"
      :key="project.title[0].text + index"
      :title="project.title[0].text"
      :description="project.description[0].text"
      :link="project.link.url"
    >
    </project-card>
    <div class="trait" id=""></div>
    <academics> </academics>
  </div>

  <!-- <h4>This is document</h4>
    <pre>{{ document }}</pre>
    <h4>This is payload</h4>
    <pre>{{ payload }}</pre>
    <h4>This is header elements</h4>
    <pre>{{ head }}</pre> -->
</template>

<script>
import TheHeader from "../components/header/TheHeader.vue";
import ProjectContainer from "../components/main/ProjectContainer.vue";
import ProjectCard from "../components/main/ProjectCard.vue";
import Academics from "../components/main/Academics.vue";

export default {
  name: "IndexPage",
  components: { TheHeader, ProjectContainer, ProjectCard, Academics },
  computed: {
    payload() {
      return this.document.results[0].data.slices[0].items;
    },
    head() {
      return this.document.results[0].data.slices[1].primary;
    },
  },
  async asyncData({ $prismic, params, error }) {
    const document = await $prismic.api.query();
    if (document) {
      return { document };
    } else {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>

<style scoped>
.main-container {
  height: auto;
  margin: 100px 150px;
  /* border: 5px solid black; */
  display: flex;
  flex-flow: row wrap;
}
.trait {
  /* border-top: 2px solid #ccc; */
  /* border-bottom: 2px solid #ccc; */
  width: 100%;
  height: 1px;
  background-color: black;
}
</style>
