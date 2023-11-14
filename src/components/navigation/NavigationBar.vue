<template>
  <div class="navigation-bar">
    <navigation-category v-for="category in categories" :key="category.title" :title="category.title">
      <navigation-link v-for="link in category.childrens" :key="link.title" :title="link.title" :path="link.path" />
    </navigation-category>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationLink from "./NavigationLink.vue";
import NavigationCategory from './NavigationCategory.vue';

export default defineComponent({
  name: 'NavigationBar',
  components: {
    NavigationCategory,
    NavigationLink
  },
  data: () => ({
    categories: [
      {
        title: 'Getting Started',
        childrens: [
          {
            title: 'Installation',
            path: '/docs/1.x/installation'
          },
          {
            title: 'Configuration',
            path: '/docs/1.x/configuration'
          }
        ]
      }
    ]
  })
});
</script>

<style scoped lang="scss">
  .navigation-bar {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
</style>
