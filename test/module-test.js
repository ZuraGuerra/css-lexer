'use strict';

const Assert = require('chai').assert;
const Expect = require('chai').expect;
const CSSLexer = require('../lib/css-lexer');

describe('Lexer module test', () => {
  const lexem = CSSLexer.analize('elements.yaml');
  const tokens = CSSLexer.parse(lexem);

  it('should be ok (Lexer module)', () => {
    Expect(CSSLexer).to.be.ok;
    Expect(CSSLexer).to.be.an('object');
    Expect(CSSLexer).to.have.property('analize');
    Expect(CSSLexer.analize).to.be.a('function');
    Expect(CSSLexer).to.have.property('parse');
    Expect(CSSLexer.parse).to.be.a('function');
    Expect(CSSLexer).to.have.property('create');
    Expect(CSSLexer.create).to.be.a('function');
  });

  it('should analize the file and return the tokens.', () => {
    Expect(lexem).to.be.ok;
    Expect(lexem).to.be.an('array');
    Assert.notEqual(lexem.length, 0);
  });

  it('should parse the analized input.', () => {
    Expect(tokens).to.be.ok;
    Expect(tokens).to.be.an('array');
    Assert.notEqual(tokens.length, 0);
  });

  it('should create the files and directories.', () => {
    CSSLexer.create(tokens);
  });
});
