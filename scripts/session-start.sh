#!/bin/bash
set -euo pipefail

# Claude Code on Web のリモートセッションでのみ実行
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

HUGO_VERSION="0.160.0"
GO_VERSION="1.24.7"

# Hugo のインストール
if ! command -v hugo &>/dev/null; then
  echo "Installing Hugo ${HUGO_VERSION}..."
  curl -sLO "https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  mkdir -p "${HOME}/.local/hugo"
  tar -C "${HOME}/.local/hugo" -xf "hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  rm "hugo_extended_${HUGO_VERSION}_linux-amd64.tar.gz"
  echo "export PATH=\"${HOME}/.local/hugo:\$PATH\"" >> "$CLAUDE_ENV_FILE"
fi

# Go のインストール（Hugo Modules に必要）
if ! command -v go &>/dev/null; then
  echo "Installing Go ${GO_VERSION}..."
  curl -sLO "https://go.dev/dl/go${GO_VERSION}.linux-amd64.tar.gz"
  tar -C "${HOME}/.local" -xf "go${GO_VERSION}.linux-amd64.tar.gz"
  rm "go${GO_VERSION}.linux-amd64.tar.gz"
  echo "export PATH=\"${HOME}/.local/go/bin:\$PATH\"" >> "$CLAUDE_ENV_FILE"
fi

# npm 依存のインストール（oxfmt）
cd "$CLAUDE_PROJECT_DIR"
npm install --prefer-offline 2>/dev/null || npm install

# Hugo Modules の取得
export PATH="${HOME}/.local/hugo:${HOME}/.local/go/bin:$PATH"
hugo mod get
