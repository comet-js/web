<template>
  <div class="terminal-command">
    <div class="terminal-command__dollar">$</div> npm i scuti-renderer@latest
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'TerminalCommand',
});
</script>

<style scoped lang="scss">
.terminal-command {
  padding: 0px 16px;
  height: 44px;
  display: flex;
  align-items: center;
  background: linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%);
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  border: 1px solid rgba(223, 239, 254, 0.137);
  font-family: Consolas, sans-serif;

  &__dollar {
    color: rgba(223, 239, 254, 0.337);
    font-family: Consolas, sans-serif;
    padding-right: 7px;
  }
}
</style>
