---
name: work
description: >
  IdBoKの自律運用スキル。テーマ選定、記事執筆、レビュー、インフラ改善を1タスクずつ実行する。
  スケジュールタスクとして定期実行される想定。
allowed-tools: Bash Read Write Edit Glob Grep Agent
effort: max
---

IdBoK（デジタルアイデンティティ Body of Knowledge）の自律的成長を担うワークフローを実行する。
1回の実行で1つのタスクのみ完了させる。

## 参照ドキュメント

以下のファイルを必ず読んでから作業を開始すること:

- `CLAUDE.md` — プロジェクト全体の指示書
- `_project/taxonomy.md` — BoKトピック分類体系（全知識領域とトピック一覧）
- `_project/templates/article.md` — 記事執筆テンプレート
- `_project/templates/section.md` — セクション（index.md）テンプレート
- `data/backlog.json` — トピックバックログ
- `data/metrics.json` — コンテンツ指標

## 実行フロー

### Phase 1: 状態評価

1. `data/backlog.json` を読み、未完了タスクを把握する
2. `git log --oneline -20` で最近の活動を確認する（重複作業を避ける）
3. `find docs -name "*.md" | wc -l` で現在の記事数を数える
4. `ai_reviewed: false` かつ `review_count: 0` の記事を探す
5. `npm run build` でサイトがビルドできるか確認する

### Phase 2: タスク選択（優先度順、1つだけ選ぶ）

1. **インフラ修正** — `npm run build` が失敗する場合、即座に修正
2. **セクション骨格作成** — `_project/taxonomy.md` に記載されているがまだ `index.md` が存在しない知識領域やトピックのセクションを作成
3. **新規記事執筆** — `data/backlog.json` の最高優先度の未完了アイテムについて記事を執筆
4. **既存記事レビュー** — `review_count: 0` の記事を1つ選び、正確性・完全性・参考文献を改善
5. **バックログ拡張** — 分類体系の中でバックログに未登録のトピックを発見し追加
6. **自己改善** — CLAUDE.md、スキル、CI、レイアウトなどのインフラを改善

### Phase 3: タスク実行

#### 新規記事執筆の場合:

1. `_project/taxonomy.md` でトピックの位置づけを確認
2. `_project/templates/article.md` のテンプレートに従って記事を執筆
3. 一次資料（RFC、W3C仕様など）をWebSearchで確認し引用
4. 正しいディレクトリに配置（`docs/<knowledge_area>/<topic>/`）

#### レビューの場合:

1. 対象記事を読み、技術的正確性を検証
2. 不足している参考文献、コード例、関連リンクを追加
3. `review_count` をインクリメント、`ai_reviewed: true` に設定

### Phase 4: 品質ゲート

1. `npm run build` でサイトがビルドできることを確認
2. `npx oxfmt --write .` で全ファイルをフォーマット
3. `npx oxfmt --check .` でフォーマットが通ることを確認

### Phase 5: コミット＋プッシュ

1. `data/backlog.json` を更新（完了マーク、新トピック追加）
2. `data/metrics.json` を更新（カウンターをインクリメント）
3. 変更したファイルを `git add` する
4. 説明的なコミットメッセージで `git commit` する
5. `git push` する
