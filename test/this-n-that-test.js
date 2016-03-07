var should = require('should');

function fnNotStrict() {
    return this.b;
}

function fnStrict() {
    'use strict';
    return this.b;
}

function d(succ){
    if(!succ){
        throw new TypeError();
    }
    return 'a';
}

describe('various this scenarios', function () {
    it('>> strict - throws exception', function () {
        should(fnStrict).throw(TypeError);
    });

    it('>> not strict', function () {
        should(fnNotStrict()).be.undefined();
    });
    it('simple thingy', function () {
        should(d(true)).equal('a');
    });

    it('simple thingy throws exception', function () {
        should(d.bind(null, false)).throw(Error);
    });

});
