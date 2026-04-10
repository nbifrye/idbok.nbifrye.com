# IdBoK コンテンツ分類体系

本ドキュメントはデジタルアイデンティティ Body of Knowledge のコンテンツ体系と、各セクションでカバーするトピックの全体像を定義する。
`/work` スキルはこの分類体系を参照してトピック選定を行う。

## コンテンツ体系

IdBoK のコンテンツは以下の3セクションで構成される。

### BoK (`docs/bok/`)

初学者がゼロからデジタルアイデンティティを学ぶための体系的な学習資料。
新卒1年目レベルの読者を想定し、第1章から順に読み進める前提で執筆する。
各章は前の章の内容を前提とし、実践的な認証プロトコルから始めて、技術的な深掘りと先端トピックへと段階的に進む。

### Spec (`docs/spec/`)

RFC、W3C 勧告、FIDO Alliance 仕様、OpenID Foundation 仕様などの具体的な技術仕様を解説するセクション。
一仕様につき1記事を原則とし、仕様そのものの構造・用語・実装上の注意点を一次資料に沿って整理する。

### Article (`docs/article/`)

BoK や Spec に収まらない個別トピックを扱うセクション。
業界の時事的な話題、複数仕様にまたがる横断的なトピック、実装上のベストプラクティス、セキュリティインシデントの解説などを対象とする。

## BoK の章構成

BoK は10章構成とする。章番号はそのまま学習順序を示す。

### 第1章 デジタルアイデンティティ入門 (`docs/bok/01-introduction/`)

- デジタルアイデンティティとは
- 識別・認証・認可の違い
- アイデンティティに関わる登場人物（ユーザー、RP、IdP、認可サーバー）
- なぜデジタルアイデンティティが重要なのか

### 第2章 認証プロトコル (`docs/bok/02-authentication/`)

- OAuth 2.0
- OpenID Connect
- SAML 2.0
- Kerberos
- HTTP 認証（Basic、Digest、Bearer、mTLS）

### 第3章 パスワードレス認証 (`docs/bok/03-passwordless/`)

- FIDO2 / WebAuthn
- パスキー
- FIDO UAF / U2F
- マジックリンクと OTP
- 生体認証

### 第4章 アイデンティティ連携 (`docs/bok/04-federation/`)

- フェデレーションプロトコル（SAML、OIDC、SCIM）
- トラストフレームワーク（eIDAS 2.0、NIST SP 800-63）
- クロスドメインアイデンティティ
- エンタープライズフェデレーション

### 第5章 アイデンティティガバナンス (`docs/bok/05-identity-governance/`)

- アイデンティティライフサイクル
- アクセス管理（RBAC / ABAC / ReBAC）
- 特権アクセス管理（PAM）
- 監査とコンプライアンス
- ディレクトリサービス

### 第6章 プライバシーと同意 (`docs/bok/06-privacy/`)

- プライバシー強化技術（PETs）
- 同意管理
- データ最小化
- プライバシー規制
- プライバシー・バイ・デザイン

### 第7章 暗号基盤 (`docs/bok/07-cryptographic-foundations/`)

- PKI
- JSON Web Token（JWT / JOSE）
- 鍵管理
- 耐量子暗号
- デジタル署名

### 第8章 ゼロトラストアーキテクチャ (`docs/bok/08-zero-trust/`)

- ゼロトラストの原則
- アイデンティティ中心セキュリティ
- ネットワークアイデンティティ
- デバイスアイデンティティ
- API セキュリティ

### 第9章 分散型アイデンティティ (`docs/bok/09-decentralized-identity/`)

- 分散型識別子（DID）
- 検証可能な資格情報（Verifiable Credentials）
- アイデンティティウォレット
- 自己主権型アイデンティティ（SSI）
- ブロックチェーンとアイデンティティ

### 第10章 標準化団体と仕様 (`docs/bok/10-standards-bodies/`)

- IETF
- W3C
- FIDO Alliance
- OpenID Foundation
- ISO/IEC
- NIST

## Spec で扱う主な仕様群

仕様解説で優先的に扱う仕様を列挙する。slug は `docs/spec/<slug>/` とする。

### IETF RFC

- OAuth 2.0 関連（RFC 6749、RFC 6750、RFC 7636 PKCE、RFC 8628 Device Authorization、RFC 9449 DPoP など）
- JOSE 関連（RFC 7515 JWS、RFC 7516 JWE、RFC 7517 JWK、RFC 7518 JWA、RFC 7519 JWT）
- SCIM 関連（RFC 7642、RFC 7643、RFC 7644）

### W3C 勧告

- WebAuthn
- Verifiable Credentials Data Model
- Decentralized Identifiers (DID)

### FIDO Alliance

- CTAP2
- FIDO2

### OpenID Foundation

- OpenID Connect Core 1.0
- OpenID for Verifiable Credential Issuance (OID4VCI)
- OpenID for Verifiable Presentations (OID4VP)

### ISO / NIST

- ISO/IEC 18013-5（mDL）
- NIST SP 800-63（Digital Identity Guidelines）
- NIST SP 800-207（Zero Trust Architecture）

## Article で扱うトピックの例

- 業界の時事的な話題（パスキー採用事例、新規仕様の発表など）
- 複数仕様を比較する横断的な解説
- 実装上のベストプラクティス
- セキュリティインシデントの解説
