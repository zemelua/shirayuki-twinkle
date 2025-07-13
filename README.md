# Shirayuki Twinkle

<img src="docs/assets/tip-shirayuki-twinkle.svg" /> は Document Outline Algorithm や、h 要素のような考え方に触発された、構造化されたセクションと見出しを実現するための React ライブラリです。

`<h1>` や `<h3>` のようなレベルつきの見出しを配置するかわりに、セクショニング構造をもとにレベルを自動的に計算する見出し要素を使用することができます。

これにより、見出しレベルを意識せず柔軟で構造化された文書を作ることができます。さまざまな位置に配置される可能性のあるカードコンポーネントや、Markdown からパースされた文書の埋め込みコンポーネントなどを使用する際に特に有用です。

## 使い方

コンポーネント <img src="docs/assets/tip-h-component.svg" /> は見出し、各種 <img src="docs/assets/tip-scontent-component.svg" /> はセクショニング・コンテンツ、各種 <img src="docs/assets/tip-sroot-component.svg" /> はセクショニング・ルートを表します。

<img src="docs/assets/tip-scontent-component.svg" /> セクショニング・コンテンツは、セクショニング・コンテンツに入れ子になるごとに一つ階層レベルを上げます。セクショニング・コンテンツの子孫である <img src="docs/assets/tip-h-component.svg" /> 見出しは、最も近くの親であるセクショニング・コンテンツの階層レベルを反映します。

セクショニング・コンテンツは `<SectionSContent>` 、 `<ArticleSContent>` などの種類があります。異なる種類のセクショニング・コンテンツをネストしても、階層はカウントされます。

```tsx
<ArticleSContent>
  <H> Title of This Article </H>

  <SectionSContent>
    <H> Title of This Sub Section </H>
  </SectionSContent>
</ArticleSContent>
```

これはこのような HTML になります。

```html
<article>
  <h1>Title of This Article</h1>

  <section>
    <h2>Title of This Sub Section</h2>
  </section>
</article>
```

<img src="docs/assets/tip-sroot-component.svg" /> セクショニング・ルートはセクショニング・コンテンツと同様に使用できますが、そこでアウトラインレベルをリセットする効果を持ちます。

```tsx
<ArticleSContent>
  <H> Title of This Article </H>

  <SectionSContent>
    <H> Title of This Sub Section </H>

    <BlockquoteSRoot>
      <H> Title from Quoted Text. </H>
    </BlockquoteSRoot>
  </SectionSContent>
</ArticleSContent>
```

これはこのような HTML になります。

```html
<article>
  <h1>Title of This Article</h1>

  <section>
    <h2>Title of This Sub Section</h2>

    <blockquote>
      <h1>Title from Quoted Text.</h1>
    </blockquote>
  </section>
</article>
```
