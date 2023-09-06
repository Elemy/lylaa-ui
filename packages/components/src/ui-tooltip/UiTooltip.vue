<script setup lang="ts">
import { Tooltip } from "ant-design-vue";
import { usePrefixCls } from "../composables/useUtils";
</script>

<template>
  <component
    :is="Tooltip"
    v-bind="$attrs"
    :prefix-cls="usePrefixCls('tooltip')"
  >
    <slot></slot>
  </component>
  <!-- <Tooltip :visible="true" :prefix-cls="usePrefixCls('tooltip')"
    ><slot></slot
  ></Tooltip> -->
</template>

<style lang="less"></style>
