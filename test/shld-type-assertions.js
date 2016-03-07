'use strict';

var should = require('should');

describe('Array', function() {

  it('is array, using fluent style',
    function() {
      ['1'].should.be.Array();
      [].should.be.Array();
      [undefined].should.be.Array();
    });

  it('is array, using function stype',
    function() {
      should(['1']).be.Array();
      should([]).be.Array();
      should([undefined]).be.Array();
    });

});
