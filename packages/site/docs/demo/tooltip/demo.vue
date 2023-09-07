<script setup lang="ts">
import { UiTooltip } from "lylaa-ui";
const change = (v) => {
  console.log(4, v);
};
</script>

<template>
  <ui-tooltip title="hello lyla ui" @visible-change="change">
    <div id="hello" class="hello-class">hello Lylaa ui</div>
  </ui-tooltip>
</template>

<style lang="less" scoped></style>
