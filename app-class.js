'use strict';

import angular from 'angular';
import HelloWorld from 'hello-word';

angular.module('plunker').component('appClass', {
  bindings: {
    name: '@'
  },
  require: {
    helloWorldCtrl: '^helloWorld'
  },
  controller: function() {
    this.$onInit = function () {
      this.name = 'Hello World';
    };
    this.myAction = function (param1, param2) {
      this.name = 'Dummy';
      this.oneWay = 'b';
    };
  },
  template: '<hello-world ng-if="toggle" name="{{$ctrl.name}}"></hello-world><button ng-click=$ctrl.myAction()>a</button></div><br><button ng-click="toggle = !toggle">Toggle</button>'
});