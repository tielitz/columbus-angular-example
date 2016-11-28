'use strict';

import angular from 'angular';
import HeroDetail from 'hero-detail';

angular.module('helloWorld').component('helloAngular', {
  bindings: {
    name: '@',
    oneWay: '<',
    // < one-way input
    // @ immutable strings
    // & output
  },
  controller: function ($scope) {

    this.sayHello = function (){
      return 'Hello';
    };
    this.$onInit = function () {
      console.log('onInit');
    };
    this.$onInit = function () {
      console.log('onInit');
    };
    this.$onChanges = function (changesObj) {
      console.log('$onChanges', changesObj);
    };
  },
  template: '<div>{{ $ctrl.sayHello() }}, {{ $ctrl.name }}!'
});