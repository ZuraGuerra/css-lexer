'use strict';

const fs = require('fs');
const colors = require('colors');

function analize (file) {
  const content = fs.readFileSync(file, { encoding: 'utf8' });

  const lexems = content.
    split('_').
    map(el => {
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
    e.css = ':host {' + e.tokens.join('\n') + '}';
    return e;
  });

  return tokens;
}

function create (tokens) {
  fs.mkdirSync('elements');
  console.log('Creating directory elements/'.green);

  tokens.forEach(token => {
    console.log('Appending ' + token.element.toString().green);
    fs.appendFileSync('elements.html', '<link rel="import" src="' + token.element + '/' + token.element +'.html">\n')
    
    console.log('Creating file ' + token.element.green);
    fs.mkdirSync('elements/' + token.element);

    console.log('Creating file ' + token.element.green);
    fs.writeFileSync(
      'elements/' + token.element + '/' + token.element + '.html',
      '<link rel="import" href="../polymer/polymer.html">\n' +
      '<dom-module id="' + token.element + '">\n' +
      '<style>' + token.css + '\n' +
      '</style>\n' +
      '<template><content></content></template>\n' +
      '<script>\n' +
      'Polymer({ is="' + token.element + '" })\n' +
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
