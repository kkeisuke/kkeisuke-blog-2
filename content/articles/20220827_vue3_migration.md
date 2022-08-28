---
title: Vue2 の業務システムを Vue3 に移行する
description: Class Component のまま Vue3 に移行した話
date: 2022/08/27
---

私は、[家業の業務システム](https://kkeisuke.com/work.html#%E5%B7%A5%E4%BA%8B%E5%8F%B0%E5%B8%B3%E7%AE%A1%E7%90%86%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0-2018-%E3%80%9C)を、2018年から一人で開発・運用しています。開発を始めて丸4年が経ち、そろそろレガシーな部分も目立ち始めています。

今後も安定的な運用、改善を進めていくために、今年は使用しているライブラリや、フレームワークの更新に力を入れています。3月には、バックエンド[^1]で使用している ORM（gorm）のメジャーバージョンアップを行いました。

一方、フロントエンドに関しては、Vue3 への移行はほぼ無理だろうと諦めていました。それは 2018年当時、TypeScript と相性が良いとされていた Class Component を採用していたからです。[vue-class-component](https://github.com/vuejs/vue-class-component)、[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) 共に、2020年以降、開発が止まっています。更に、UIフレームワークに採用していた [ViewUI](https://github.com/view-design/ViewUI) (旧iView) の移行も懸念していました。

ここから状況が好転したのは、5月に Vue3 版の [View UI Plus](https://github.com/view-design/ViewUIPlus) がリリースされたことでした。相当数のコンポーネントを有するUIフレームワークですが、割り切った対応をされていて、リポジトリを眺めていて勇気をもらいました。

7月になり、Vue3 移行に確信を持てたのは、「[Vue3でもClass Style Componentが使えそう](https://note.com/shunex/n/n50cd8e1ec4fe)」という記事を見つけた時でした。手元で軽く検証すると、確かに動きそうでした。

そこで、8月に3日ほど腰を入れて検証をする時間を取ったのですが、**2日で移行が完了してしまいました**。ついでに**残りの1日で Vite にも移行できました**。（`.vue` と `.ts` 合わせて550ファイル弱）

package.json の diff がこちらです。

```diff
-  "view-design": "~4.6.1",
-  "vue": "^2.7.8",
-  "vue-class-component": "^7.2.6",
-  "vue-property-decorator": "^9.1.2",
-  "vue-router": "^3.5.4",
-  "vuex": "^3.6.2"
+  "view-ui-plus": "~1.3.1",
+  "vue": "^3.2.37",
+  "vue-class-component": "^8.0.0-rc.1",
+  "vue-property-decorator": "^10.0.0-rc.3",
+  "vue-router": "^4.1.3",
+  "vuex": "^4.0.2"
```
<br>

短期間で移行できた要因は以下のようなことが考えられます。

1. 個人開発なので、要件から仕様、コードまで全て把握していること。
2. Vue3 に向けた準備（filter 撤廃 etc）がすでに完了していたこと。
3. `.vue` にロジックがほぼ無いこと。ビジネスロジックは、徹底的にバックエンド（Go）と `.ts` に寄せています。
4. [View UI Plus](https://github.com/view-design/ViewUIPlus) が旧バージョンとほぼ同じだったこと。
5. ViewUI 以外にUIライブラリ（vue-xxx 系）を使用していないこと。
6. vue-router, vuex もほぼ書き換えなくてよかったこと。
7. 他案件（中規模）で、Vue3 の経験が1年以上あること。

これらの要因が重なり、ほぼ機械的な変更だけで済んだので、本当に運が良かったなと感じています。マイグレーション情報が出た頃から、コツコツと準備してきたことが実りました。年内にも新しい機能を追加する予定なので、script setup で書けるのが楽しみです。

しかし、[vue-class-component](https://github.com/vuejs/vue-class-component) と [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) は、遅かれ早かれ剥がさなければなりません。来年以降、少しづつ書き換えていきます。変換ツールもいくつか試してみたいです。

## 参考

- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)
- [Vue3でもClass Style Componentが使えそう](https://note.com/shunex/n/n50cd8e1ec4fe)
- [機能開発を止めずに、500コンポーネント規模の Vue 3 移行を完了させた開発プロセス](https://studist.tech/migration-to-vue-3-4b4c4fad0324)
- [大規模アプリのVue3アップデート対応知見まとめ](https://zenn.dev/yodaka/articles/84dc716de1d349)
- [Vue2のプロジェクトをVue3へマイグレーションする](https://zenn.dev/azukiazusa/articles/c8d76eb56f5fd8)

### 試したい変換ツール

- https://github.com/yoyo930021/vc2c
- https://github.com/vertcitron/vue-class-to-options
- https://github.com/miyaoka/vue-composition-converter
  - [Vueコンポーネントをcomposition APIに書き換えるやつを作っている](https://miyaoka.dev/posts/2021-02-15-vue-composition-converter)
- https://github.com/wattanx/vue-mixins-converter

[^1]: バックエンドの構成に付いては、[こちらの記事](/articles/20210125_web_api_go)にまとめています。
