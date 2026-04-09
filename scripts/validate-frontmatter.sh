#!/bin/bash
set -euo pipefail

# content/docs/ 以下の全 Markdown ファイルのフロントマターを検証する

ERRORS=0
WARNINGS=0
REQUIRED_FIELDS=("title" "ai_generated")
ARTICLE_FIELDS=("description" "knowledge_area" "review_count")

for file in $(find content/docs -name "*.md" | sort); do
  # --- で囲まれたフロントマターを抽出
  frontmatter=$(sed -n '1{/^---$/!q};1,/^---$/p' "$file" | tail -n +2 | head -n -1)

  if [ -z "$frontmatter" ]; then
    echo "ERROR: $file has no frontmatter"
    ERRORS=$((ERRORS + 1))
    continue
  fi

  for field in "${REQUIRED_FIELDS[@]}"; do
    if ! echo "$frontmatter" | grep -q "^${field}:"; then
      echo "ERROR: $file missing required field: $field"
      ERRORS=$((ERRORS + 1))
    fi
  done

  # _index.md 以外は記事用フィールドも確認
  if [[ "$(basename "$file")" != "_index.md" ]]; then
    for field in "${ARTICLE_FIELDS[@]}"; do
      if ! echo "$frontmatter" | grep -q "^${field}:"; then
        echo "WARNING: $file missing article field: $field"
        WARNINGS=$((WARNINGS + 1))
      fi
    done
  fi
done

if [ $WARNINGS -gt 0 ]; then
  echo "${WARNINGS} warning(s) found"
fi

if [ $ERRORS -gt 0 ]; then
  echo "Validation failed with ${ERRORS} error(s)"
  exit 1
fi

echo "All frontmatter validation passed"
