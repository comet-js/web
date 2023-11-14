<template>
  <div class="not-found">
    cc...
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound'
});
</script>

<style scoped lang="scss">
  .not-found {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: red;
  }
</style>
