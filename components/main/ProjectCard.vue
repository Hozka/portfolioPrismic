<template>
  <div class="box">
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
    <a :href="link">Link to project</a>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api";

export default {
  props: ["title", "description", "link"],
};
</script>

<style scoped>
.box {
  /* margin: 0 20% 10% 0; */
  height: auto;
  width: 30%;
  padding: 0 0 20px 0;
  margin: 0 10px;

  float: left;
}
</style>
