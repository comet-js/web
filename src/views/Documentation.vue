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
        <markdown-text :text="markdown" v-if="!error" />
        <not-found v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TerminalCommand from '../components/TerminalCommand.vue';
import NavigationBar from '../components/navigation/NavigationBar.vue';
import NotFound from '../components/documentation/NotFound.vue';

export default defineComponent({
  name: 'Login',
  components: {
    NotFound,
    NavigationBar,
    TerminalCommand
  },
  data() {
    return {
      markdown: '',
      error: false
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
    if (!this.$route.params.branch && !this.$route.params.page) {
      this.$router.push(`/docs/${import.meta.env.COMET_DEFAULT_BRANCH}/${import.meta.env.COMET_DEFAULT_PAGE}`);
      return;
    } else if (!this.$route.params.page) {
      this.$router.push(`/docs/${this.$route.params.branch}/${import.meta.env.COMET_DEFAULT_PAGE}`);
      return;
    }

    fetch(`https://raw.githubusercontent.com/comet-js/docs/${this.$route.params.branch}/${this.$route.params.page}.md`)
        .then((response: Response) => {
          if (response.status !== 200) this.error = true;
          return response.text();
        })
        .then((text: string) => this.markdown = text)
        .catch(() => this.error = true);
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
