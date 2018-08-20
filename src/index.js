import 'normalize.css';

import angular from 'angular';
import appComponent from './app.component';
import CommonModule from './common/common';
import PagesModule from './app/pages';

angular
  .module('app', [CommonModule.name, PagesModule.name])
  .component('app', appComponent);
