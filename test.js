// Run with: npm test   (or: node test.js)
var assert = require('assert');
var emojify = require('./emojify.js');

// named emoji and emoticons are replaced
var out = emojify('hi :smile: and :) <3', '/img', 'width: 5%');
assert.ok(out.indexOf("src='/img/smile.png'") !== -1, 'named emoji');
assert.ok(out.indexOf("src='/img/smiley.png'") !== -1, 'emoticon :)');
assert.ok(out.indexOf("src='/img/heart.png'") !== -1, 'emoticon <3');
assert.ok(out.indexOf("style='width: 5%'") !== -1, 'style applied');

// unknown named emoji are left alone
assert.strictEqual(emojify(':notanemoji:', '/img'), ':notanemoji:');

// empty input is returned as-is
assert.strictEqual(emojify('', '/img'), '');

// no style attribute when style is not given
assert.strictEqual(emojify(':smile:', '/img').indexOf('style='), -1, 'no style attr');

// style and url cannot break out of the attribute (XSS)
var evil = emojify(':smile:', "/img' onerror='alert(1)", "x' onerror='alert(1)");
assert.strictEqual(evil.indexOf("' onerror="), -1, 'attribute injection blocked');
assert.ok(evil.indexOf('&#39; onerror=') !== -1, 'quotes escaped');

console.log('All tests passed');
