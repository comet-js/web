<template>
  <div class="home">
    <div class="home__header">
      <div class="home__left">
        <div class="home__logo">
          scuti.io
        </div>
      </div>
      <div class="home__right">
        <secondary-button>Github</secondary-button>
        <secondary-button>Discord</secondary-button>
        <primary-button>Authentication</primary-button>
      </div>
    </div>
    <div class="home__content">
      <div class="home__title">
        A blazing fast Habbo rendering engine
      </div>
      <div class="home__description">
        Create your own Habbo rooms with furnitures and avatars, like on the real game.
      </div>
      <div class="home__actions">
        <primary-button>Discover the project</primary-button>
        <terminal-command />
      </div>
    </div>
    <div class="home__footer">
      Made with love by all Scuti contributors.
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import TerminalCommand from "../components/TerminalCommand.vue";

export default defineComponent({
  name: 'Home',
  components: {TerminalCommand},
});
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1280px;
  height: 100%;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 0;
    align-items: center;
  }

  &__left {

  }

  &__right {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  &__logo {
    font-size: 21px;
    font-weight: 700;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }

  &__title {
    font-size: 70px;
    font-weight: 700;
    text-align: center;
    max-width: 70%;
    line-height: 65px;
    background: -webkit-linear-gradient(#fff, #f17798);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 140px;
    letter-spacing: -0.8px;
  }

  &__description {
    text-align: center;
    max-width: 40%;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.2px;
    color: #f17798;
  }

  &__actions {
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  &__footer {
    padding: 32px 0;
    text-align: center;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: -0.2px;
    color: rgba(223, 239, 254, 0.137);
  }
}
</style>
