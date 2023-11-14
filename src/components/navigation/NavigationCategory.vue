<template>
  <div class="navigation-category">
    <div class="navigation-category__title">{{ title }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationCategory',
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
  .navigation-category {
    display: flex;
    flex-direction: column;

    &__title {
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 600;
      padding-bottom: 14px;
    }
  }
</style>
