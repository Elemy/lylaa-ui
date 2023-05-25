<script setup lang="ts">
import { Button } from "ant-design-vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import { usePrefixCls } from "../composables/useUtils";
import "ant-design-vue/dist/antd.css";
</script>

<template>
  <Button danger :prefix-cls="usePrefixCls('btn')">
    <template #icon><SearchOutlined /></template>
    <slot></slot>
  </Button>
</template>

<style lang="less"></style>
