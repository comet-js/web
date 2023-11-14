<template>
  <div class="terminal-command" @click="copy">
    <div class="terminal-command__dollar">$</div>
    {{ command }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TerminalCommand',
  props: {
    command: {
      required: true,
      type: String
    }
  },
  methods: {
    copy(): void {
      navigator.clipboard.writeText(this.command).then(() => {

      });
    }
  },
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  cursor: pointer;
  transition: 150ms;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
    transform: scale(0.98);
  }

  &__dollar {
    color: rgba(223, 239, 254, 0.337);
    font-family: Consolas, sans-serif;
    padding-right: 7px;
  }

  &__copy-button {
    width: 20px;
    height: 20px;
    margin-right: -5px;
    margin-left: 11px;

    svg {
      opacity: 0.337;
    }

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
      transform: scale(0.98);
    }
  }
}
</style>
