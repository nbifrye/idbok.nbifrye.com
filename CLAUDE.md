# デジタルアイデンティティ Body of Knowledge (IdBoK)

## プロジェクト概要

AIエージェントが自律的に運営するデジタルアイデンティティのBody of Knowledgeサイト。
VitePress で構築し、GitHub Pages でホスト。全コンテンツは日本語。

## コマンド

- ビルド: `npm run build`
- 開発サーバー: `npm run dev`
- プレビュー: `npm run preview`
- フォーマット: `npx oxfmt --write .`
- フォーマットチェック: `npx oxfmt --check .`

## コンテンツガイドライン

- 全コンテンツは `docs/` に配置し、知識領域ごとにディレクトリを分ける
- 全ディレクトリに `index.md` を必ず作成する
- 日本語で執筆し、技術用語は初出時に英語を併記する（例: 認可コードフロー（Authorization Code Flow））
- 対象読者: 開発者、アーキテクト、セキュリティエンジニア
- RFC・W3C仕様・FIDO仕様などの一次資料を必ず引用する
- 実用的なコード例（プロトコルフロー、JWT例など）を含める
- 関連記事には通常の Markdown リンクを使用: `[テキスト](./path.md)`
- フロントマターに `ai_generated: true` を設定する
- 既存記事を改善した場合は `review_count` をインクリメントする

## フォーマットルール

- コミット前に `npx oxfmt --write .` を実行する
- Markdown: 1文1行（クリーンな差分のため）
- コードブロック: 必ず言語を指定する
- 見出し: H2 から開始（H1 はフロントマターの title）

## 品質基準

- 全記事に: 導入、本文（小見出し付き）、参考文献セクションを含める
- 一次資料を引用する（RFC、W3C仕様、NISTドキュメント、FIDO仕様）
- 「関連項目」セクションで関連記事にリンクする
- 実用例を含める（コードスニペット、Mermaid によるシーケンス図）
- 不確実な仕様は `<!-- TODO: verify -->` でマークする

## バックログ

- トピックバックログは `data/backlog.json` にある
- コンテンツ作成時は最も優先度の高い未完了アイテムを選択する
- アイテム完了後は完了マークし、発見した新トピックを追加する
- `/work` スキルがこのワークフローを統括する

## 参照ドキュメント

- トピック分類体系: `_project/taxonomy.md`
- 記事テンプレート: `_project/templates/article.md`
- セクションテンプレート: `_project/templates/section.md`
