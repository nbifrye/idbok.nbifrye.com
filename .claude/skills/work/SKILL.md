---
name: work
description: >
  IdBoKの自律運用スキル。テーマ選定、記事執筆、レビュー、インフラ改善を1タスクずつ実行する。
  スケジュールタスクとして定期実行される想定。
allowed-tools: Bash Read Write Edit Glob Grep Agent WebSearch WebFetch
effort: max
---

IdBoK（デジタルアイデンティティ Body of Knowledge）の自律的成長を担うワークフローを実行する。
1回の実行で1つのタスクのみ完了させる。

## 参照ドキュメント

以下のファイルを必ず読んでから作業を開始すること:

- `CLAUDE.md` — プロジェクト全体の指示書
- `docs/taxonomy.md` — BoKトピック分類体系（全知識領域とトピック一覧）
- `docs/templates/article.md` — 記事執筆テンプレート
- `docs/templates/section.md` — セクション（\_index.md）テンプレート
- `data/backlog.json` — トピックバックログ
- `data/metrics.json` — コンテンツ指標

## 実行フロー

### Phase 1: 状態評価

1. `data/backlog.json` を読み、未完了タスクを把握する
2. `git log --oneline -20` で最近の活動を確認する（重複作業を避ける）
3. `find content/docs -name "*.md" | wc -l` で現在の記事数を数える
4. `ai_reviewed: false` かつ `review_count: 0` の記事を探す
5. `hugo --minify` でサイトがビルドできるか確認する

### Phase 2: タスク選択（優先度順、1つだけ選ぶ）

タスク選択時は `dependencies` フィールドを確認し、依存先がすべて `status: "done"` であるアイテムのみを候補とする。
依存が満たされていないアイテムはスキップする。

1. **インフラ修正** — `hugo --minify` が失敗する場合、即座に修正
2. **セクション骨格作成** — `docs/taxonomy.md` に記載されているがまだ `_index.md` が存在しない知識領域やトピックのセクションを作成
3. **新規記事執筆** — `data/backlog.json` の最高優先度の未完了アイテムについて記事を執筆
4. **既存記事レビュー** — `review_count: 0` の記事を1つ選び、正確性・完全性・参考文献を改善
5. **バックログ拡張** — 分類体系の中でバックログに未登録のトピックを発見し追加
6. **自己改善** — CLAUDE.md、スキル、CI、レイアウトなどのインフラを改善

### Phase 3: タスク実行

#### 新規記事執筆の場合:

1. `docs/taxonomy.md` でトピックの位置づけを確認
2. WebSearch で対象トピックの最新 RFC 番号、仕様 URL、公式ドキュメントの URL を確認する
3. `docs/templates/article.md`（記事）または `docs/templates/section.md`（\_index.md）のテンプレートに従って執筆
4. 配置先ディレクトリが存在しない場合は先に作成する
5. 正しいディレクトリに配置（`content/docs/<knowledge_area>/<topic>/`）

記事の分量目安:

- トピック概要（\_index.md）: 800〜1500字
- 個別記事: 2000〜4000字
- 深さよりも正確性を優先する。不確実な点は `<!-- TODO: verify -->` でマークし、後のレビューで修正する

参考文献のルール:

- 参考文献には WebSearch/WebFetch で実在を確認した URL のみを記載する
- URL が確認できない場合はタイトルと発行元のみ記載する

#### レビューの場合:

1. 対象記事を読み、以下を検証:
   - フロントマターの必須フィールドがすべて存在する（title, description, weight, ai_generated, knowledge_area）
   - 一次資料の引用が少なくとも2つある
   - 参考文献の URL が実在する（WebFetch で確認）
   - 関連項目セクションで他記事への relref リンクが存在する
   - コード例または Mermaid 図が少なくとも1つある
2. 不足を補い、誤りを修正する
3. `review_count` をインクリメント、`ai_reviewed: true` に設定

### Phase 4: 品質ゲート

1. `hugo --minify` でサイトがビルドできることを確認
2. `npx oxfmt --write .` で全ファイルをフォーマット
3. `npx oxfmt --check .` でフォーマットが通ることを確認
4. `bash scripts/validate-frontmatter.sh` でフロントマターの必須フィールドを検証

### Phase 5: コミット＋プッシュ

1. `data/backlog.json` を更新:
   - 完了したアイテムの `status` を `"done"` に変更し、`completed_date` に今日の日付（YYYY-MM-DD）を追加
   - 新発見のトピックがあれば新アイテムとして追加
2. `data/metrics.json` を更新:
   - カウンターをインクリメント（`total_articles`, `total_sections`, `reviewed_articles` など該当するもの）
   - `work_runs` を +1
   - `last_updated` を今日の日付に更新
   - `last_run` に `{ "date": "YYYY-MM-DD", "task_type": "<type>", "item_id": "<id>", "summary": "<要約>" }` を設定
   - `run_history` の末尾に `last_run` と同じオブジェクトを追加
   - `run_history` が 50 件を超えた場合は古い順に削除して 50 件に収める
3. 変更したファイルを `git add` する
4. コミットメッセージ形式: `<type>: <簡潔な説明>`
   - type = feat（新記事）, review（レビュー改善）, infra（インフラ）, fix（修正）
   - 例: `feat: OAuth 2.0 トピック概要を追加`
5. `git push` する

## エラー回復

- `hugo --minify` が失敗した場合: エラーメッセージを読み、対象ファイルのフロントマターや構文を修正する。修正後に再度ビルドを確認する。
- `git push` が失敗した場合: `git pull --rebase` してからリトライする。
- 記事が途中で中断した場合: 途中のファイルを削除し、backlog を pending のままにしてコミットする。不完全な記事を push しない。
