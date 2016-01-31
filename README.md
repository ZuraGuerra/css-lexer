# CSS Lexer
Just an experiment

## Usage
```
$ npm install -g css-lexer
$ css-lexer some-file
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

It creates an structure for web-components

```
elements/
	elements.html // containes the imports
	btn-bing/ // directory
		btn-bing.html // automatically linked to elements.html
```
