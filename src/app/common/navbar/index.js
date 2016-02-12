import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar';

export default angular.module('navbar', [
  uiRouter
]).component('navbar', navbarComponent);
