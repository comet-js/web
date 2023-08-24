<template>
  <button>
    <slot />
  </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'PrimaryButton',
});
</script>

<style scoped lang="scss">
button {
  border: none;
  padding: 0px 16px;
  height: 44px;
  background-color: #FFFFFF;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: 150ms;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
    transform: scale(0.98);
  }
}
</style>
