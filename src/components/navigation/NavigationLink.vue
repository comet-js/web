<template>
  <div class="navigation-link" @click="click">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NavigationLink',
  props: {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    click(): void {
      this.$router.push(this.path);
    }
  }
});
</script>

<style scoped lang="scss">
  .navigation-link {
    color: #A1A1AA;
    font-size: 14px;
    font-weight: 500;
    padding-left: 16px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-left: 1px solid rgba(223, 239, 254, 0.137);
    transition: 150ms;
    cursor: pointer;

    &--selected {
      border-left: 1px solid #f0004f;
      color: #ffffff;
    }

    &:hover {
      color: #ffffff;
    }
  }
</style>
