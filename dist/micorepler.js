(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.mico = factory());
}(this, (function () { 'use strict';

  const something  = 'something';

  var micorepler = {
    something,
    sayHi: () => 'hi',
    sayBye: 'bye'
  }

  return micorepler;

})));
