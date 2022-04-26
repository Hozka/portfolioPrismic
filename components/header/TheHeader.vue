<template>
  <div id="">
    <img :src="image" alt="" />

    <div id="desc">
      <h2 style="padding-top: 10px; margin-bottom: 0px">{{ name }}</h2>
      <h4 style="margin-top: 0">
        {{ descriptionPerson }}
      </h4>
      <div style="text-align: justify">
        <a :href="linkedin">Linkedin</a> &nbsp &nbsp &nbsp
        <a :href="github">Github</a>
      </div>
      <br />
    </div>

    <p style="width: auto; heigth: auto">
      Texte:
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["image", "name", "descriptionPerson", "linkedin", "github", "text"],
};
</script>

<style scoped>
/* #main {
  padding: 5% 20% 2% 20%; 
} */
img {
  border-radius: 70%;
  width: 70px;
  height: 70px;
  float: left;
  margin-bottom: 30px;
  margin-right: 10px;
}
.desc {
  float: right;
}
</style>
