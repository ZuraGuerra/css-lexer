'use strict';

const Assert = require('chai').assert;
const Expect = require('chai').expect;
const CSSLexer = require('../lib/css-lexer');

describe('Lexer module test', () => {
  it('should be ok (Lexer module)', () => {
    Expect(CSSLexer).to.be.ok;
    Expect(CSSLexer).to.be.an('object');
    Expect(CSSLexer).to.have.property('analize');
    Expect(CSSLexer.analize).to.be.a('function');
  });

  it('should analize the file and return the tokens.', () => {
    const lexem = CSSLexer.analize('styles.css');

    Expect(lexem).to.be.ok;
    Expect(lexem).to.be.an('array');
    Assert.notEqual(lexem.length, 0);
  });
});
