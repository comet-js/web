<template>
  <div class="documentation">
    <div class="documentation__header">
      <div class="documentation__top-bar">
      </div>
      <div class="documentation__logo" v-if="false">
        <img class="home__logo" src="../assets/images/logo_white.png">
      </div>
      <navigation-bar />
    </div>
    <div class="documentation__content">
      <div class="documentation__page">
        <markdown-text :text="markdown" />
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
import NavigationBar from "../components/navigation/NavigationBar.vue";

export default defineComponent({
  name: 'Login',
  components: {NavigationBar, TerminalCommand},
  data() {
    return {
      markdown: `

`
    }
  },
  computed: {
    links(): { title: string, childrens: [] }[] {
      const links: { title: string, childrens: [] }[] = [];
      const lines: string[] = this.markdown.split('\n');

      lines.forEach((line: string) => {
        if (line[0] && line[1] && line[2] && line[0] === '#' && line[1] === '#' && line[2] === '#') {
          links[links.length - 1].childrens.push({
            title: line.replace('### ', ''),
          });
        } else if (line[0] && line[1] && line[0] === '#' && line[1] === '#') {
          links.push({
            title: line.replace('## ', ''),
            childrens: []
          });
        }
      });

      return links;
    }
  },
  mounted(): void {
    console.log(this.$route.params);
    if (!this.$route.params.version) {

    }
  }
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
