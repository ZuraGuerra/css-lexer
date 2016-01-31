'use strict';

const fs = require('fs');

function analize (file) {
  const content = fs.readFileSync(file, { encoding: 'utf8' });

  const lexems = content.
    split('_').
    map((el) => {
      const container = Object.create(null);
      const arr = el.split('\n');
      const first = arr.shift();

      container.element = (first === '' ? arr.shift() : first).replace(':', '');
      container.tokens = arr;

      container.tokens.pop()

      return container;
    });

  return lexems;
}

module.exports = {
  analize
};
