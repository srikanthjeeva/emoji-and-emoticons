##Emoji and Emoticons
=========

This is a node module for [emojify.js](https://github.com/hassankhan/emojify.js)

## install

```
npm install emoji-and-emoticons
```

##Usage

Download these (Emoji Images)[https://github.com/hassankhan/emojify.js/tree/master/images] and add it inside your project directory.


You can use it in your code like this,
```js
var emojify     = require('emoji-and-emoticons');
var images_path = "/images/emoji"
var text        = 'This is a string with :smile: and :)';
var emojified   = emojify(text, images_path);
```

The [Emoji images](https://github.com/hassankhan/emojify.js/tree/master/images) were big, so I have added this class to my css file. You can edit it for the size needed for your project.
```css
/*css*/
.emoji{
    width: 5%;
    height: auto;
    vertical-align: bottom;
}
```

##References
https://github.com/hassankhan/emojify.js

https://www.npmjs.org/package/emoji-images


## License

MIT