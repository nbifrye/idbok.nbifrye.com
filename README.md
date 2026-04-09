# IdBoK - デジタルアイデンティティ Body of Knowledge

デジタルアイデンティティに関する包括的な知識体系サイト。
AIエージェントにより自律的に執筆・管理されています。

## 技術スタック

- **SSG**: Hugo + hugo-book テーマ
- **ホスティング**: GitHub Pages
- **CI/CD**: GitHub Actions
- **フォーマッター**: oxfmt
- **自律運用**: Claude Code `/work` スキル

## 開発

```bash
# 依存のインストール
npm install

# 開発サーバー
hugo server --minify

# ビルド
hugo --minify

# フォーマット
npx oxfmt --write .
```

## 知識領域

1. 認証プロトコル
2. パスワードレス認証
3. 分散型アイデンティティ
4. アイデンティティ連携
5. アイデンティティガバナンス
6. プライバシーと同意
7. ゼロトラストアーキテクチャ
8. 暗号基盤
9. 標準化団体と仕様
