# IdBoK トピック分類体系

本ドキュメントはデジタルアイデンティティ Body of Knowledge が網羅すべき知識領域とトピックの全体像を定義する。
`/work` スキルはこの分類体系を参照してトピック選定を行う。

## 知識領域 1: 認証プロトコル

ディレクトリ: `content/docs/authentication/`

### OAuth 2.0 (`oauth2/`)

- 概要と設計思想
- 認可コードフロー（Authorization Code Flow）
- PKCE（Proof Key for Code Exchange）
- クライアントクレデンシャルフロー
- デバイス認可フロー
- トークンイントロスペクション
- トークン失効（Token Revocation）
- DPoP（Demonstration of Proof-of-Possession）
- リソースインジケーター

### OpenID Connect (`oidc/`)

- 概要と OAuth 2.0 との関係
- ID トークン
- ディスカバリー（Discovery）
- 動的クライアント登録
- クレームとスコープ
- UserInfo エンドポイント
- ログアウト（RP-Initiated, Back-Channel, Front-Channel）
- CIBA（Client-Initiated Backchannel Authentication）

### SAML 2.0 (`saml/`)

- 概要とアサーション
- バインディングとプロファイル
- メタデータ
- シングルサインオン
- シングルログアウト
- SAML と OIDC の比較

### Kerberos (`kerberos/`)

- チケットと KDC
- TGT とサービスチケット
- 委任（Delegation）

### HTTP 認証 (`http-auth/`)

- Basic 認証と Digest 認証
- Bearer トークン
- 相互 TLS（mTLS）

## 知識領域 2: パスワードレス認証

ディレクトリ: `content/docs/passwordless/`

### FIDO2 / WebAuthn (`fido2-webauthn/`)

- 概要とアーキテクチャ
- 登録セレモニー
- 認証セレモニー
- アテステーション
- レジデントキー（Discoverable Credentials）

### パスキー (`passkeys/`)

- プラットフォーム認証器
- クロスデバイス認証
- 同期パスキー
- ハイブリッドトランスポート

### FIDO UAF / U2F (`fido-legacy/`)

- レガシープロトコルの概要
- FIDO2 への移行

### マジックリンクと OTP (`magic-link-otp/`)

- メールベース認証
- SMS ベース認証
- TOTP と HOTP

### 生体認証 (`biometrics/`)

- 指紋・顔・虹彩認証
- 行動バイオメトリクス
- ライブネス検出

## 知識領域 3: 分散型アイデンティティ

ディレクトリ: `content/docs/decentralized-identity/`

### 分散型識別子 DID (`did/`)

- DID メソッドと DID ドキュメント
- DID Resolution
- did:web, did:key, did:ion

### 検証可能な資格情報 (`verifiable-credentials/`)

- W3C データモデル
- 発行と提示
- 選択的開示
- JSON-LD, JWT-VC, SD-JWT-VC

### アイデンティティウォレット (`identity-wallets/`)

- ホルダーアーキテクチャ
- 資格情報の保管
- OID4VCI, OID4VP

### 自己主権型アイデンティティ (`ssi/`)

- 原則とコンセプト
- トラストフレームワーク
- ガバナンス

### ブロックチェーンとアイデンティティ (`blockchain-identity/`)

- Ethereum ベースのアプローチ
- Hyperledger Indy / Aries
- ION

## 知識領域 4: アイデンティティ連携

ディレクトリ: `content/docs/federation/`

### フェデレーションプロトコル (`protocols/`)

- SAML フェデレーション
- OIDC フェデレーション
- SCIM（System for Cross-domain Identity Management）

### トラストフレームワーク (`trust-frameworks/`)

- eIDAS 2.0
- NIST SP 800-63
- Pan-Canadian Trust Framework

### クロスドメインアイデンティティ (`cross-domain/`)

- アイデンティティリンキング
- アカウントフェデレーション
- ジャストインタイムプロビジョニング

### エンタープライズフェデレーション (`enterprise/`)

- IdP プロキシ
- マルチテナント
- B2B アイデンティティ

## 知識領域 5: アイデンティティガバナンス

ディレクトリ: `content/docs/identity-governance/`

### アイデンティティライフサイクル (`lifecycle/`)

- プロビジョニングとデプロビジョニング
- Joiner-Mover-Leaver プロセス

### アクセス管理 (`access-management/`)

- RBAC（ロールベースアクセス制御）
- ABAC（属性ベースアクセス制御）
- ReBAC（関係ベースアクセス制御）
- ポリシーエンジン（OPA）

### 特権アクセス管理 (`pam/`)

- PAM の概要
- ジャストインタイムアクセス
- シークレット管理（Vaulting）

### 監査とコンプライアンス (`audit-compliance/`)

- SOX, GDPR 対応
- アクセスレビュー
- 職務分離（SoD）

### ディレクトリサービス (`directory-services/`)

- LDAP
- Active Directory
- SCIM
- クラウドディレクトリ

## 知識領域 6: プライバシーと同意

ディレクトリ: `content/docs/privacy/`

### プライバシー強化技術 (`pets/`)

- ゼロ知識証明
- 準同型暗号
- 差分プライバシー

### 同意管理 (`consent-management/`)

- 同意レシート
- Kantara Initiative
- UMA 2.0

### データ最小化 (`data-minimization/`)

- 選択的開示
- 最小限開示トークン

### プライバシー規制 (`regulations/`)

- GDPR
- CCPA
- ePrivacy
- 日本の個人情報保護法

### プライバシー・バイ・デザイン (`privacy-by-design/`)

- アイデンティティアーキテクチャにおけるプライバシー
- 仮名化と匿名化

## 知識領域 7: ゼロトラストアーキテクチャ

ディレクトリ: `content/docs/zero-trust/`

### ゼロトラストの原則 (`principles/`)

- Never Trust, Always Verify
- 最小権限の原則

### アイデンティティ中心セキュリティ (`identity-centric/`)

- 継続的認証
- リスクベースアクセス

### ネットワークアイデンティティ (`network-identity/`)

- マイクロセグメンテーション
- ZTNA（Zero Trust Network Access）
- SDP（Software-Defined Perimeter）

### デバイスアイデンティティ (`device-identity/`)

- デバイスアテステーション
- 証明書ベースの認証
- TPM（Trusted Platform Module）

### API セキュリティ (`api-security/`)

- API ゲートウェイ
- API 向け OAuth
- トークンバインディング

## 知識領域 8: 暗号基盤

ディレクトリ: `content/docs/cryptographic-foundations/`

### PKI (`pki/`)

- 証明書と認証局
- 証明書チェーン
- 失効（OCSP, CRL）

### JSON Web Token (`jwt/`)

- JWT, JWS, JWE
- JWK, JWA

### 鍵管理 (`key-management/`)

- 鍵のライフサイクル
- HSM（Hardware Security Module）
- KMS（Key Management Service）
- 鍵ラッピング

### 耐量子暗号 (`post-quantum/`)

- NIST PQC 標準
- 移行計画

### デジタル署名 (`digital-signatures/`)

- RSA, ECDSA, EdDSA
- 閾値署名

## 知識領域 9: 標準化団体と仕様

ディレクトリ: `content/docs/standards-bodies/`

### IETF (`ietf/`)

- OAuth 関連 RFC
- JOSE 関連 RFC
- SCIM 関連 RFC
- HTTP 認証関連 RFC

### W3C (`w3c/`)

- WebAuthn
- Verifiable Credentials
- DID
- Web Payments

### FIDO Alliance (`fido-alliance/`)

- FIDO2
- CTAP
- パスキー仕様
- デジタルクレデンシャル

### OpenID Foundation (`openid-foundation/`)

- OpenID Connect
- OIDF（OpenID Federation）
- OID4VC
- SIDI（Shared Identity for Decentralized Identity）

### ISO/IEC 標準 (`iso/`)

- ISO 18013-5 mDL
- ISO 27001
- ISO 29100

### NIST (`nist/`)

- SP 800-63（Digital Identity Guidelines）
- SP 800-207（Zero Trust Architecture）
- Cybersecurity Framework
