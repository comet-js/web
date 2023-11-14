<template>
  <button>
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SecondaryButton',
});
</script>

<style scoped lang="scss">
button {
  border: 1px solid rgba(223, 239, 254, 0.137);
  padding: 0px 16px;
  height: 44px;
  background: linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%);
  color: #FFFFFF;
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
