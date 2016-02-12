import template from './home.html';
import './home.styl';

class HomeController {
  constructor() {
    this.name = 'home';
  }
}

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: HomeController,
  controllerAs: 'vm'
};

export default homeComponent;
