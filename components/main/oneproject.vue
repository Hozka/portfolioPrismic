<template>
  <div id="main">
    <div class="flex">
      <h4>{{ title }}</h4>

      <p>
        {{ description }}
      </p>
      <a :href="link">Link to project</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "description", "link"],
};
</script>
<style scoped>
#main {
  padding: 0 20% 20% 20%;
  display: flex;
  width: 20%;
}
</style>
