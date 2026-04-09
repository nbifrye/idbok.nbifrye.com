<script setup>
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-after>
      <div v-if="frontmatter.ai_generated" class="ai-disclaimer">
        <hr />
        <p>
          本記事はAIエージェントにより生成されました。
          正確性を確保するよう努めていますが、重要な判断に際しては記事内の参考文献を直接ご確認ください。
        </p>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>
