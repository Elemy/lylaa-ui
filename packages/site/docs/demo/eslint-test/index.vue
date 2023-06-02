<script setup lang="ts">
import { ref } from "vue";
const count = ref({ a: 1 });
</script>

<template>
  <a-button @click="count.a++">
    {{ count }}
  </a-button>
</template>

<style lang="less" scoped></style>
