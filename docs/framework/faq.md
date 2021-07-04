# F.A.Q.

## Where can I get help?

If you need help with something not properly documented or needs clarification, you can visit the [Issue Tracker](https://github.com/novacbn/kahi-ui/issues). File a new issue and it'll be addressed on a spare time effort.

## How can I contribute?

Contributions are currently not being actively accepted aside from bug reports or other issues with the library.

## What Browsers are supported?

Visit the [Browser Support](../framework/browser-support.md) documentation for more information.

## Can I use the library without Typescript?

Yes! However [`svelte-preprocess`](https://github.com/sveltejs/svelte-preprocess) is required to use this library, as it is built in Typescript with no packaging build step. That will be fixed when [SvelteKit](https://kit.svelte.dev)'s [package command](https://kit.svelte.dev/docs#packaging) supports type generation.

## Can I use the library without Svelte?

Yes, however there is no official support to do so. Visit [Releases](https://github.com/novacbn/kahi-ui/releases) and grab the `.css` distributable files, and read the library source code on how to do markup, progressive enhancements, etc.

## Can I use the library on Browsers that don't support or have Javascript disabled?

Yes! The library is explictly made in mind that Svelte should be used to sprinkle extra functionality ontop of logic baked in HTML / CSS. If you find something not working properly, [file an issue](https://github.com/novacbn/kahi-ui/issues).

## Is Themeing Supported?

Not at the moment, but that'll be tackled via global [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) at a later time.

## Is Accessibility / ARIA Supported?

While I want to implement full proper support, including keyboard navigation. It is currently not being pursued and will be tackled at a later date. However if you encounter something that'll be detrimental [file an issue](https://github.com/novacbn/kahi-ui/issues).
