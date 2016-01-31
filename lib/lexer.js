'use strict';

const fs = require('fs');

function analize (file) {
  const content = fs.readFileSync(file, { encoding: 'utf8' });

  const rules = content.
    split('.').
    slice(1).
    map(el => el.replace(/\n/g, '').replace(/\t/g, ''));

  const tokens = rules.
    map(el => {
      const proto = Object.create(null);
      const noSpaces = el.replace(/\s/g, '');

      proto.element = noSpaces.split('{')[0];
      proto.tokens = noSpaces.split('{')[1].replace('}', '').split(';');
      proto.tokens.pop();

      return proto;
    });

  return tokens;
}

module.exports = {
  analize
};
