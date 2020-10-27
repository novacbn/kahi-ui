# PostCSS Is Pseudo Class [<img src="https://api.postcss.org/logo.svg" alt="PostCSS" width="90" height="90" align="right">](postcss)

[<img alt="npm version" src="https://img.shields.io/npm/v/postcss-is-pseudo-class.svg" height="20">](https://www.npmjs.com/package/postcss-is-pseudo-class)
[<img alt="build status" src="https://img.shields.io/travis/jsxtools/frontend/master.svg" height="20">](https://img.shields.io/travis/csstools/postcss-is-pseudo-class/master.svg)
[<img alt="support chat" src="https://img.shields.io/badge/support-chat-blue.svg" height="20">](https://gitter.im/postcss/postcss)

This PostCSS plugin lets you match elements by inner selectors in CSS, following the [Selectors Level 4 specification].

```pcss
:is(article, section) > :is(h1, h2, h3, h4, h5, h6):is(:hover, :focus) {
	text-decoration: underline;
}

/* becomes */

article > h1:hover, article > h1:focus,
article > h2:hover, article > h2:focus,
article > h3:hover, article > h3:focus,
article > h4:hover, article > h4:focus,
article > h5:hover, article > h5:focus,
article > h6:hover, article > h6:focus,
section > h1:hover, section > h1:focus,
section > h2:hover, section > h2:focus,
section > h3:hover, section > h3:focus,
section > h4:hover, section > h4:focus,
section > h5:hover, section > h5:focus,
section > h6:hover, section > h6:focus {
	text-decoration: underline;
}
```

## Usage

Add [PostCSS Is Pseudo Class] to your project:

```bash
npm install postcss-is-pseudo-class --save-dev
```

Use **PostCSS Is Pseudo Class** to process your CSS:

```js
const postcssIsPseudoClass = require('postcss-is-pseudo-class');

postcssIsPseudoClass.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssIsPseudoClass = require('postcss-is-pseudo-class');

postcss([
  postcssIsPseudoClass(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

**PostCSS Is Pseudo Class** runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Limitations

- [ ] `:is` selectors with complex inner selectors are ignored.
- [ ] Selector weight is not normalized to the specificity of its most specific argument.

These are welcome PR opportunities.

[PostCSS]: https://github.com/postcss/postcss
[PostCSS Is Pseudo Class]: https://github.com/csstools/postcss-is-pseudo-class
[Selectors Level 4 specification]: https://www.w3.org/TR/selectors-4/#matches
