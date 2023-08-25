<template>
  <div class="login">
    cc
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TerminalCommand from "../components/TerminalCommand.vue";

export default defineComponent({
  name: 'Login',
  components: {TerminalCommand},
});
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  @media all and (min-width: 1312px) {
    width: 1280px;
  }

  @media all and (max-width: 1312px) {
    width: 100%;
    padding: 0 32px;
  }
}
</style>
