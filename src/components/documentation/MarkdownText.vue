<template>
  <div class="markdown">
    <div class="markdown__category">
      {{ data.category }}
    </div>
    <div class="markdown__title">
      {{ data.title }}
    </div>
    <div class="markdown__description">
      {{ data.description }}
    </div>
    <hr>
    <div class="markdown__text" v-html="html"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { marked } from 'marked';
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import shell from 'highlight.js/lib/languages/shell';

export default defineComponent({
  name: "MarkdownText",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    html(): string {
      const text: string = this.text.split('------')[1] ?? '';

      return marked.parse(text);
    },
    data(): Record<string, string> {
      const header: string = this.text.split('------')[0];
      const data: Record<string, string> = {};
      const variables: string[] = header.split('\n');

      variables.forEach((variable: string) => {
        if (variable) {
          const key: string = variable.split(': ')[0];
          const value: string = variable.split(': ')[1];

          data[key] = value;
        }
      });

      return data;
    }
  },
  mounted(): void {
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('shell', shell);
    hljs.highlightAll();
    setTimeout(() => hljs.highlightAll(), 3000);
  }
});
</script>

<style lang="scss">
  .markdown {
    display: flex;
    flex-direction: column;

    &__category {
      font-size: 14px;
      font-weight: 600;
      color: #f0004f;
      margin-bottom: 8px;
    }

    &__title {
      font-size: 30px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: -0.6px;
    }

    &__description {
      font-size: 18px;
      color: #a1a1aa;
      margin-top: 4px;
    }
  }

  hr {
    margin-top: 48px;
    margin-bottom: 48px;
    border-color: rgba(223, 239, 254, 0.137);
  }

  p {
    color: #a1a1aa;
    font-size: 16px;
    margin-bottom: 20px;
  }

  a {
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    border-bottom: 1px solid #f0004f;
  }

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 16px;
    letter-spacing: -0.6px;
  }

  h3 {
    margin-top: 48px;
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.5px;
    color: #ffffff;
  }

  h4 {
    margin-top: 36px;
    margin-bottom: 9px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
  }

  code {
    padding: 3px 6px;
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: initial;
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 14px;
    background: linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%);
    border-radius: 8px;
  }

  pre code {
    overflow-x: auto;
    color: #525252;
    white-space: pre;
    padding: 30px;
    font-size: 0.85rem;
    line-height: 1.6rem;
    display: block;
    margin-top: 32px;
    margin-bottom: 32px;
  }

  .hljs {
    border-radius: 8px;
    border: 1px solid rgba(223, 239, 254, 0.137);
    //background: linear-gradient(145.37deg, rgba(255, 255, 255, 0.09) -8.75%, rgba(255, 255, 255, 0.027) 83.95%);
    background: linear-gradient(145.37deg, rgba(0, 0, 0, 0.09) -8.75%, rgba(0, 0, 0, 0.027) 83.95%);
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 0.85em;
    -webkit-font-smoothing: initial;
    -moz-osx-font-smoothing: initial;
    position: relative;
  }

  .hljs * {
    font-family: 'Roboto Mono', Monaco, courier, monospace;
  }

  .hljs-comment,
  .hljs-quote {
    color: #5c6370;
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: #c678dd;
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: #e06c75;
  }

  .hljs-literal {
    color: #56b6c2;
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta .hljs-string {
    color: #98c379;
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: #d19a66;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: #61aeee;
  }

  .hljs-built_in,
  .hljs-title.class_,
  .hljs-class .hljs-title {
    color: #e6c07b;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-strong {
    font-weight: bold;
  }

  .hljs-link {
    text-decoration: underline;
  }

  .language-shell {
    color: #ffffff;
  }

  .hljs:before {
    position: absolute;
    margin: 14px;
    right: 0;
    top: 0;
    //background-color: #FFFFFF;
    background: linear-gradient(#fff, #edb3c2);
    color: #72152e;
    font-size: 12px;
    font-weight: 600;
    border-radius: 4px;
    padding: 1px 8px;
    font-family: Inter, sans-serif;
  }

  .language-ts:before {
    content: 'TypeScript';
  }

  .language-shell:before {
    content: 'Shell';
  }
</style>
