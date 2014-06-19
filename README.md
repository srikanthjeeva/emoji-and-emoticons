##Emoji and Emoticons
=========

This is a node module for [emojify.js](https://github.com/hassankhan/emojify.js)

##Usage

```js

var emojify     = require('emoji-and-emoticons');
var images_path = "/images/emoji"
var text        = 'This is a string with :smile: and :)';
var emojified   = emojify(text, images_path);

```

These [Emoji images](https://github.com/hassankhan/emojify.js/tree/master/images) were big, so I have added this class to my css file.
```css
.emoji{
    width: 5%;
    height: auto;
    vertical-align: bottom;
}
```

##References:
https://github.com/hassankhan/emojify.js
https://www.npmjs.org/package/emoji-images (Emoticons such as ":)", ";)" was not included)
