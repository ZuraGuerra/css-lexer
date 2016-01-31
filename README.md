# CSS Lexer
Simple css lexer (duh!). It only works with classes.

## Usage
```
$ npm install -g css-lexer
$ css-lexer styles.css dest.txt
```

## Result

```js
// Input (some-file.txt)
btn-bing:
	- background-color: red;
	- color: red;
	- float: left;

// Output
[
	{
	 	element: 'btn-bing',
		tokens: [ 'background-color:red', 'color:blue' ],
		css: '{ background-color: red; color: blue; }'
	}
]
```
