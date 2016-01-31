'use strict';

const Assert = require('chai').assert;
const Expect = require('chai').expect;
const Lexer = require('../lib/lexer');

describe('Lexer module test', () => {
  it('should be ok (Lexer module)', () => {
    Expect(Lexer).to.be.ok;
    Expect(Lexer).to.be.an('object');
    Expect(Lexer).to.have.property('analize');
    Expect(Lexer.analize).to.be.a('function');
  });

  it('should analize the file and return the tokens.', () => {
    const lexem = Lexer.analize('styles.css');

    Expect(lexem).to.be.ok;
    Expect(lexem).to.be.an('array');
    Assert.notEqual(lexem.length, 0);
  });
});
