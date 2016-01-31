# CSS Lexer
Simple css lexer (duh!). It only works with classes.

## Usage
```
$ npm install -g css-lexer
$ css-lexer styles.css dest.txt
```

## Result

```css
// Input
.btn {
	background-color: red;
	color: blue;
}

// Output
[
	{ element: 'btn', tokens: [ 'background-color:red', 'color:blue' ] }
]
```
