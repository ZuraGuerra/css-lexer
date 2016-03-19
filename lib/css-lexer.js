/*!
 * Copyright(c) 2015 Michell Ayala
 * ISC Licensed
 */

'use strict';

/*!
 * Modules and dependencies
 * @private
 */

const fs = require('fs');
const colors = require('colors');

/*!
 * Analize a file and reads the content.
 * @param {string} file - The file to process
 * @return {object} lexems - The content of the file processed
 */

const analize = file => {
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

/*!
 * Parses the object returned by analize
 * @param {object} lexems - The content to parse
 * @return {object} tokens
 */

const parse = lexems => {
  const tokens = lexems.map(e => {
    e.css = ':host {' + e.tokens.join('\n') + '}';
    return e;
  });

  return tokens;
}

/*!
 * Creates a new directory to allocate
 * all the files generated
 * @param {object} tokens - The tokens needed
 * to generate the config files
 * @return {undefined}
 */

const create = tokens => {
  fs.mkdirSync('elements');
  console.log('Creating directory elements/'.green);

  tokens.forEach(token => {
    console.log('Appending ' + token.element.green);
    fs.appendFileSync('elements/elements.html', '<link rel="import" src="' + token.element + '/' + token.element +'.html">\n')
    
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

/*!
 * Exports
 * @public
 */

module.exports = {
  analize,
  parse,
  create
};
