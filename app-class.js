'use strict';

import angular from 'angular';
import HelloWorld from 'hello-word';

angular.module('plunker').component('appClass', {
  bindings: {},
  require: {
    tabsCtrl: '^myTabs'
  },
  controller: function() {
    this.$onInit = function () {
      this.name = 'Andreas';
    };
    this.foo = function (param1, param2) {
      console.log('foo');
      this.name = 'foo';
      this.oneWay = 'b';
    };
  },
  template: '<hello-world ng-if="toggle" name="{{$ctrl.name}}"></hello-world><button ng-click=$ctrl.foo()>a</button></div><br><button ng-click="toggle = !toggle">Toggle</button>'
});