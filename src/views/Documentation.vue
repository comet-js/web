<template>
  <div class="documentation">
    <div class="documentation__header">
      <div class="documentation__top-bar">
      </div>
      <div class="documentation__logo" v-if="false">
        <img class="home__logo" src="../assets/images/logo_white.png">
      </div>
      <div class="documentation__menu">
        <div class="documentation__category">
          <div class="documentation__title">Getting Started</div>
          <div class="documentation__link documentation__link--selected">Installation</div>
          <div class="documentation__link">Configuration</div>
          <div class="documentation__link">Directory Structure</div>
          <div class="documentation__link">Frontend</div>
          <div class="documentation__link">Starter Kits</div>
          <div class="documentation__link">Deployment</div>
        </div>
        <div class="documentation__category">
          <div class="documentation__title">The Basics</div>
          <div class="documentation__link">Routing</div>
          <div class="documentation__link">Middleware</div>
          <div class="documentation__link">Controllers</div>
          <div class="documentation__link">Requests</div>
          <div class="documentation__link">Bundles</div>
        </div>
      </div>
    </div>
    <div class="documentation__content">
      <div class="documentation__page">
        cc
      </div>
      a<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      a<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      a<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      a<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      a<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      a<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
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
.documentation {
  position: relative;
  display: flex;
  flex-direction: row;
  width: calc(100% - 320px);
  height: 100%;
  margin-left: 320px;

  &__header {
    position: fixed;
    width: 320px;
    height: 100%;
    left: 0;
    border-right: 1px solid rgba(223, 239, 254, 0.137);
    background: linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%);
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
  }

  &__logo {
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;

    img {
      height: 40px;
    }
  }

  &__top-bar {
    position: fixed;
    height: 56px;
    width: 100%;
    left: 320px;
    top: 0;
    border-bottom: 1px solid rgba(223, 239, 254, 0.137);
    background: linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%);
  }

  &__menu {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__category {
    display: flex;
    flex-direction: column;
  }

  &__title {
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 600;
    padding-bottom: 14px;
  }

  &__link {
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

  &__content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 56px;
  }

  &__page {
    width: 900px;
    padding-top: 64px;
    padding-bottom: 40px;
  }
}
</style>
