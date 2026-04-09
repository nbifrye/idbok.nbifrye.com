#!/bin/bash
set -euo pipefail

# Claude Code on Web のリモートセッションでのみ実行
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

# npm 依存のインストール（VitePress, oxfmt）
cd "$CLAUDE_PROJECT_DIR"
npm install --prefer-offline 2>/dev/null || npm install
