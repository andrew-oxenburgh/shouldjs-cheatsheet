'use strict';

var should = require('should');

function d(succ) {
  if (!succ) {
    throw new TypeError();
  }
  return 'a';
}

describe('test for thrown error', function() {

  it('>> exception is thrown and caught. A function def is passed in.',
    function() {
      should(d.bind(null, false)).throw(Error);
    });

  it('>> exception is thrown and caught. ' +
    'If a function res is passed in, it just fails.',
    function() {
      try {
        should(d(false)).throw(Error);
        should.fail('exception should be thrown');
      } catch (e) {
        e.toString().should.equal('TypeError');
        e.should.be.Error();
      }
    });

  it('>> no exception thrown. A function result is passed in', function() {
    should(d.bind(null, true)()).equal('a');
    should(d(true)).equal('a');
  });

});
