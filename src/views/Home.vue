<template>
  <div class="home">
    <div class="home__header">
      <div class="home__left">
        <img class="home__logo" src="../assets/images/logo_white.png">
      </div>
      <div class="home__right">
        <a href="https://github.com/comet-js" target="_blank">
          <secondary-button>Github</secondary-button>
        </a>
        <a href="https://discord.gg/rBp83wXW8n" target="_blank">
          <secondary-button>Discord</secondary-button>
        </a>
        <router-link to="/documentation">
          <primary-button>Documentation</primary-button>
        </router-link>
      </div>
    </div>
    <div class="home__content">
      <div class="home__title">
        An elegant server-side application framework
      </div>
      <div class="home__description">
        Build fast and scalable web applications easily with Comet.
      </div>
      <div class="home__actions">
        <primary-button>Get started</primary-button>
        <terminal-command command="npm i -g @comet-js/cli" />
      </div>
    </div>
    <div class="home__footer">
      Made with love by all Comet contributors.
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

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px 0;
    align-items: center;
  }

  &__right {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  &__logo {
    height: 40px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  &__title {
    font-weight: 700;
    text-align: center;
    line-height: 65px;
    background: -webkit-linear-gradient(#fff, #f17798);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.8px;
    padding-bottom: 10px;

    @media all and (min-width: 596px) {
      font-size: 70px;
      line-height: 65px;
      max-width: 80%;
    }

    @media all and (max-width: 596px) {
      font-size: 40px;
      line-height: 35px;
      max-width: 100%;
    }
  }

  &__description {
    text-align: center;
    font-weight: 400;
    letter-spacing: -0.2px;
    color: #f17798;

    @media all and (min-width: 596px) {
      max-width: 40%;
      font-size: 20px;
    }

    @media all and (max-width: 596px) {
      max-width: 100%;
      font-size: 20px;
    }
  }

  &__actions {
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    gap: 16px;

    @media all and (min-width: 596px) {
      flex-direction: row;
    }

    @media all and (max-width: 596px) {
      flex-direction: column;
    }
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
