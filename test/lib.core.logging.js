/**
 * Mocha test case for core configuration library
 */
var should = require('should'),
    fs = require('fs'),
    rootpath = process.cwd() + '/',
    path = require('path'),
    exec = require('child_process').exec,
    jsc = require('jscoverage'),
    require = jsc.require(module), // rewrite require function
    logging = require('../lib/core/Logging', true);

describe('Logging', function(){

  before(function(){
    // 
  });

  describe('Core', function(){
  

    it('I am a placeholder', function(){    
      true.should.equal(true);
    });

  }); 

  after(function() {
    
  })

});

