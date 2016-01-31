module.exports = {
    "rules": {
        "quotes": [
            2,
            "single"
        ],
        "linebreak-style": [
            2,
            "unix"
        ],
        "semi": [
            2,
            "always"
        ]
    },
    "env": {
        "es6": true,
        "node": true
    },
    "globals"   : {
      // MOCHA
      "describe"   : false,
      "it"         : false,
      "before"     : false,
      "beforeEach" : false,
      "after"      : false,
      "afterEach"  : false
    },
    "extends": "eslint:recommended"
};
