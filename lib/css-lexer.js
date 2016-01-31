'use strict';

const fs = require('fs');
const colors = require('colors');

function analize (file) {
  const content = fs.readFileSync(file, { encoding: 'utf8' });

  const lexems = content.
    split('_').
    map((el) => {
      const container = Object.create(null);
      const arr = el.split('\n');
      const first = arr.shift();

      const cleanArr = arr.map(a => a.replace(/\s/g, ''));

      container.element = (first === '' ? cleanArr.shift() : first).replace(':', '');
      container.tokens = cleanArr;

      container.tokens.pop()

      return container;
    });

  return lexems;
}

function parse (lexems) {
  const tokens = lexems.map(e => {
    e.css = '{' + e.tokens.join('\n') + '}';
    return e;
  });

  return tokens;
}

function create (tokens) {
  fs.mkdirSync('elements');
  console.log('Creating directory elements/'.green);

  tokens.forEach(token => {
    console.log('Appending ' + token.element.toString().green);
    fs.appendFileSync('elements.html', '<link rel="import" src="' + token.element.toString() + '/' + token.element.toString() +'.html">\n')
    
    console.log('Creating file ' + token.element.toString().green);
    fs.mkdirSync('elements/' + token.element.toString());

    console.log('Creating file ' + token.element.toString().green);
    fs.writeFileSync(
      'elements/' + token.element.toString() + '/' + token.element.toString() + '.html',
      '<link rel="import" href="../polymer/polymer.html">\n' +
      '<dom-module id="' + token.element.toString() + '">\n' +
      '<style>' + token.element.toString() + token.css.toString() + '\n' +
      '</style>\n' +
      '<template><content></content></template>\n' +
      '<script>\n' +
      'Polymer({ is="' + token.element.toString() + '" })\n' +
      '</script>\n' +
      '</dom-module>\n'
    );
  });
}

module.exports = {
  analize,
  parse,
  create
};
