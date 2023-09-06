<script setup lang="ts">
import { Button } from "ant-design-vue";
import { SearchOutlined } from "@ant-design/icons-vue";
import { usePrefixCls } from "../composables/useUtils";
import "ant-design-vue/dist/antd.css";

interface ButtonProps {
  disabled?: boolean;
}
withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
});

const emits = defineEmits(["click"]);
</script>

<template>
  <Button
    danger
    :prefix-cls="usePrefixCls('btn')"
    :disabled="disabled"
    @click="emits('click')"
  >
    <template #icon><SearchOutlined /></template>
    <slot></slot>
  </Button>
</template>

<style lang="less"></style>
