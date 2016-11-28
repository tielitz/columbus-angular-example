'use strict';

import angular from 'angular';
import HelloAngular from 'hello-angular';

angular.module('helloWorld').component('appClass', {
  bindings: {
    name: '@'
  },
  require: {
    helloAngularCtrl: '^helloAngular'
  },
  controller: function() {
    this.$onInit = function () {
      this.name = 'Hello Angular';
    };
    this.myAction = function (param1, param2) {
      this.name = 'Dummy';
      this.oneWay = 'b';
    };
  },
  template: '<hello-angular ng-if="toggle" name="{{$ctrl.name}}"></hello-angular><button ng-click=$ctrl.myAction()>a</button></div><br><button ng-click="toggle = !toggle">Toggle</button>'
});