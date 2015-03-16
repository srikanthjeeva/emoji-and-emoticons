##Emoji and Emoticons
=========

This is a node module for [emojify.js](https://github.com/hassankhan/emojify.js)

## install
```
npm install emoji-and-emoticons
```

##Emoji Cheat Sheet
http://www.emoji-cheat-sheet.com

##Usage
Download these (Emoji Images)[https://github.com/hassankhan/emojify.js/tree/master/src/images/emoji] and add it inside your project directory.


You can use it in your code like this,
```js
var emojify     = require('emoji-and-emoticons');
var text        = "This is a string with :smile: and :)"; // string to emojify
var images_path = "/images/emoji" // path of the images folder
var style       = "width: 5%" //style for image
var emojified   = emojify(text, images_path, style);
```

You can also apply CSS for image instead of applying inline style
```css
/*css*/
.emoji{
    width: 5%;
    height: auto;
    vertical-align: bottom;
}
```

##References
https://github.com/hassankhan/emojify.js (Used in Client side)

https://www.npmjs.org/package/emoji-images (Works well with the Emoji cheat sheet, but emoticons such as ":), :D, :-)" were not working)


## License

MIT
