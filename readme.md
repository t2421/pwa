# PWAメモ

## 参考
+ @see https://developers.google.com/web/fundamentals/codelabs/your-first-pwapp/?hl=ja
+ @see https://developer.mozilla.org/ja/docs/Web/Apps/Progressive/Add_to_home_screen
+ @see https://googlechrome.github.io/samples/app-install-banner/basic-banner/index.html

## 特徴
+ キャッシュする
+ プッシュ通知できる
+ ホーム画面にアプリとして追加できる
+ https必須
+ キャッシュするリソースが404だとserviceworkerのエラーが発生
+ LighthouseでPWAとして正しく機能が実装されているかのvalidationが可能
​
## 制限
+ iOSとAndroidでできることに差がある。
+ ブラウザからできることが全て
+ manimestを再ロードする機構がない

## 困った
+ アプリインストールバナーが表示される条件がよくわからない
+ Add to homescreenを押してもどこに保存されたかよくわからないという状況があった(desktop pwaにおいて)

## インストール
1. developer toolの add to homescreen をクリック
2. jsを書く。（https://developer.mozilla.org/ja/docs/Web/Apps/Progressive/Add_to_home_screen）
​
## アンインストール
1. アプリを起動して、メニューからアンインストールする
2. ブラウザのメニューからアンインストールする
3. chrome://apps/からアンインストールする
​