<template>
  <button class="large-buttonB">{{title}}</button>
</template>

<script>
export default {
  props: {
    title: { default: " ", type: String }
  }
};
</script>

<style scoped>
</style>