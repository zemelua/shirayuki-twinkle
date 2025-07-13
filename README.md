# Shirayuki Twinkle

<p style="vertical-align:bottom;">
<img src="docs/assets/tip-shirayuki-twinkle.svg" /> は Document Outline Algorithm や、h 要素のような考え方に触発された、構造化されたセクションと見出しを実現するための React ライブラリです。
</p>

`<h1>` や `<h3>` のようなレベルつきの見出しを配置するかわりに、セクショニング構造をもとにレベルを自動的に計算する見出し要素を使用することができます。

これにより、見出しレベルを意識せず柔軟で構造化された文書を作ることができます。さまざまな位置に配置される可能性のあるカードコンポーネントや、Markdownからパースされた文書の埋め込みコンポーネントなどを使用する際に特に有用です。

## 使い方
コンポーネント <img src="docs/assets/tip-h-component.svg" /> は見出し、各種 <img src="docs/assets/tip-scontent-component.svg" /> はセクショニング・コンテンツ、各種 <img src="docs/assets/tip-sroot-component.svg" /> はセクショニング・ルートを表します。
