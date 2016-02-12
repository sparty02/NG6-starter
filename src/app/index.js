import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common';
import Components from './components';
import AppComponent from './app';
import 'normalize.css';

export default angular.module('app', [
  uiRouter,
  Common.name,
  Components.name
]).component('app', AppComponent);
