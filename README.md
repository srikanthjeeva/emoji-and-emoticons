# Emoji and Emoticons

A small Node module, based on [emojify.js](https://github.com/hassankhan/emojify.js), that turns
emoji names like `:smile:` and emoticons like `:)`, `:D` or `<3` into `<img>` tags.

## Install

```
npm install emoji-and-emoticons
```

## Emoji cheat sheet

https://www.webfx.com/tools/emoji-cheat-sheet/

## Usage

Download the [emoji images](https://github.com/hassankhan/emojify.js/tree/master/src/images/emoji)
and add them to your project.

```js
var emojify     = require('emoji-and-emoticons');
var text        = "This is a string with :smile: and :)"; // string to emojify
var images_path = "/images/emoji";                         // path of the images folder
var style       = "width: 5%";                             // optional inline style for each image
var emojified   = emojify(text, images_path, style);
```

You can also style the images with CSS instead of an inline style:

```css
.emoji {
    width: 5%;
    height: auto;
    vertical-align: bottom;
}
```

## Security

The output is HTML. `emojify` escapes the `images_path` and `style` values it adds to each
`<img>` tag, but it does **not** escape the rest of your text. If the text comes from users,
HTML-escape it first and then call `emojify`. Emoticons such as `&lt;3` still work on
escaped text.

## Tests

```
npm test
```

## References

- https://github.com/hassankhan/emojify.js (used client side)
- https://www.npmjs.com/package/emoji-images (works with the emoji cheat sheet, but emoticons such as `:)`, `:D`, `:-)` did not work)

## License

MIT
