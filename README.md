# Shirayuki Twinkle

<img src="docs/assets/tip-shirayuki-twinkle.svg" alt="Shirayuki Twinkle" /> is a React library inspired by the Document Outline Algorithm and the concept of heading elements like `<h1>` and `<h3>`. It enables structured sections and headings.

Instead of manually placing heading levels like `<h1>` or `<h3>`, you can use heading components that automatically calculate their levels based on the surrounding sectioning structure.

This allows you to create flexible, structured documents without having to think about heading levels. It's especially useful when working with components like cards that may appear in various positions, or when embedding documents parsed from Markdown.

## Usage

The component <img src="docs/assets/tip-h-component.svg" alt="Heading component icon" /> represents a heading, while <img src="docs/assets/tip-scontent-component.svg" alt="Sectioning content component icon" /> represents sectioning content components, and <img src="docs/assets/tip-sroot-component.svg" alt="Sectioning root component icon" /> represents sectioning root components.

Each time you nest a <img src="docs/assets/tip-scontent-component.svg" alt="Sectioning content component icon" /> sectioning content component inside another, the hierarchy level increases by one. Any descendant <img src="docs/assets/tip-h-component.svg" alt="Heading component icon" /> heading will reflect the hierarchy level of its nearest parent sectioning content.

There are different types of sectioning content components, such as `<SectionSContent>` and `<ArticleSContent>`. Nesting different types of sectioning content still increases the hierarchy level.

```tsx
<ArticleSContent>
  <H> Title of This Article </H>

  <SectionSContent>
    <H> Title of This Sub Section </H>
  </SectionSContent>
</ArticleSContent>
```

This will be rendered into the following HTML:

```html
<article>
  <h1>Title of This Article</h1>

  <section>
    <h2>Title of This Sub Section</h2>
  </section>
</article>
```

<img src="docs/assets/tip-sroot-component.svg" alt="Sectioning root component icon" /> Sectioning root components can be used similarly to sectioning content, but they reset the outline level.

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

This will be rendered into the following HTML:

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
