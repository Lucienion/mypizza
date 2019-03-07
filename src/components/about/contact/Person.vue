<template>
  <div class="mt-3">{{person}}</div>
</template>

<script>
export default {
  name: "Person",
  data() {
    return {
      person: "法人代表：你爸爸"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
