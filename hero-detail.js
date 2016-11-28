'use strict';

import angular from 'angular';

angular.module('helloWorld').component('heroDetail', {
  templateUrl: 'heroDetail.html',
  controller: function () {
  var ctrl = this;

  ctrl.list = [
    {
      name: 'Superman',
      location: ''
    },
    {
      name: 'Batman',
      location: 'Wayne Manor'
    }
  ];

  parent.parentProperty = 'Test';

  ctrl.delete = function() {
    ctrl.onDelete({hero: ctrl.hero});
  };

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
  };
},
  bindings: {
    hero: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});