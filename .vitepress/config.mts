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
      { text: "BoK", link: "/docs/bok/" },
      { text: "仕様解説", link: "/docs/spec/" },
      { text: "記事", link: "/docs/article/" },
      { text: "用語集", link: "/glossary/" },
      { text: "本サイトについて", link: "/about/" },
    ],

    sidebar: {
      "/docs/bok/": [
        {
          text: "Body of Knowledge",
          items: [
            { text: "BoK トップ", link: "/docs/bok/" },
            {
              text: "第1章 デジタルアイデンティティ入門",
              link: "/docs/bok/01-introduction/",
            },
            {
              text: "第2章 認証プロトコル",
              link: "/docs/bok/02-authentication/",
            },
            {
              text: "第3章 パスワードレス認証",
              link: "/docs/bok/03-passwordless/",
            },
            {
              text: "第4章 アイデンティティ連携",
              link: "/docs/bok/04-federation/",
            },
            {
              text: "第5章 アイデンティティガバナンス",
              link: "/docs/bok/05-identity-governance/",
            },
            {
              text: "第6章 プライバシーと同意",
              link: "/docs/bok/06-privacy/",
            },
            {
              text: "第7章 暗号基盤",
              link: "/docs/bok/07-cryptographic-foundations/",
            },
            {
              text: "第8章 ゼロトラストアーキテクチャ",
              link: "/docs/bok/08-zero-trust/",
            },
            {
              text: "第9章 分散型アイデンティティ",
              link: "/docs/bok/09-decentralized-identity/",
            },
            {
              text: "第10章 標準化団体と仕様",
              link: "/docs/bok/10-standards-bodies/",
            },
          ],
        },
      ],
      "/docs/spec/": [
        {
          text: "仕様解説",
          items: [{ text: "仕様解説トップ", link: "/docs/spec/" }],
        },
      ],
      "/docs/article/": [
        {
          text: "記事",
          items: [{ text: "記事トップ", link: "/docs/article/" }],
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
