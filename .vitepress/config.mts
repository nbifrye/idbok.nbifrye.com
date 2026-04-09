import { defineConfig } from "vitepress";

export default defineConfig({
  title: "デジタルアイデンティティ Body of Knowledge",
  description: "デジタルアイデンティティに関する包括的な知識体系",
  lang: "ja",

  lastUpdated: true,
  cleanUrls: true,
  srcExclude: ["_project/**", "README.md"],

  head: [
    [
      "meta",
      {
        name: "copyright",
        content: "本サイトのコンテンツはAIエージェントにより生成されています",
      },
    ],
  ],

  sitemap: {
    hostname: "https://idbok.nbifrye.com",
  },

  themeConfig: {
    nav: [
      { text: "知識領域", link: "/docs/" },
      { text: "用語集", link: "/glossary/" },
      { text: "本サイトについて", link: "/about/" },
    ],

    sidebar: {
      "/docs/": [
        {
          text: "知識領域",
          items: [
            { text: "認証プロトコル", link: "/docs/authentication/" },
            { text: "パスワードレス認証", link: "/docs/passwordless/" },
            {
              text: "分散型アイデンティティ",
              link: "/docs/decentralized-identity/",
            },
            { text: "アイデンティティ連携", link: "/docs/federation/" },
            {
              text: "アイデンティティガバナンス",
              link: "/docs/identity-governance/",
            },
            { text: "プライバシーと同意", link: "/docs/privacy/" },
            {
              text: "ゼロトラストアーキテクチャ",
              link: "/docs/zero-trust/",
            },
            { text: "暗号基盤", link: "/docs/cryptographic-foundations/" },
            { text: "標準化団体と仕様", link: "/docs/standards-bodies/" },
          ],
        },
      ],
    },

    search: {
      provider: "local",
    },

    editLink: {
      pattern: "https://github.com/nbifrye/idbok.nbifrye.com/edit/main/:path",
      text: "このページを編集",
    },

    outline: {
      level: [2, 4],
      label: "目次",
    },

    lastUpdated: {
      text: "最終更新",
    },

    darkModeSwitchLabel: "テーマ",
    returnToTopLabel: "トップへ戻る",
    sidebarMenuLabel: "メニュー",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/nbifrye/idbok.nbifrye.com",
      },
    ],

    footer: {
      message: "本サイトのコンテンツはAIエージェントにより生成されています",
    },
  },
});
