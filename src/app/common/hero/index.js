import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero';

export default angular.module('hero', [
  uiRouter
]).component('hero', heroComponent);
