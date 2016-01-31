#!/usr/bin/env/ node

'use strict';

const fs = require('fs');
const Lexer = require('../lib/css-lexer');
const src = process.argv[2];

const lexem = Lexer.analize(src);
const tokens = Lexer.parse(lexem);
Lexer.create(tokens);
