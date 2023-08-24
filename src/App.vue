<template>
  <router-view />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import './styles/style.scss'

export default defineComponent({
  name: 'App',
});
</script>

<style lang="scss">
@use "styles/style";

.app {
  //width: 100%;
  //height: 100%;
  //background-color: red;
  //position: fixed;
  //background-image: url(./assets/images/colors.png);
}
</style>
