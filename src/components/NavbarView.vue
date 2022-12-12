<template>
  <nav class="navbar d-flex fixed-top border-bottom bg-white p-0">
    <div class="container">
      <div>
        <img class="p-2" src="../assets/Logo.svg" alt="" />
        <img class="p-2" src="../assets/Love in Planning.svg" alt="" />
      </div>

      <p  class="">
        Return to
        <a v-for="(obj, key) in links" :key="key" class="text-decoration-none  m-2" :href="obj.url">{{ obj.name }}</a>
      </p>
      <!--  -->
    </div>
  </nav>
</template>

<script>
export default {
  props: ["links"],
 
};
</script>

<style lang="scss" scoped></style>
