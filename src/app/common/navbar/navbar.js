import template from './navbar.html';
import './navbar.styl';

class NavbarController {
  constructor() {
    this.name = 'navbar';
  }
}

let navbarComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: NavbarController,
  controllerAs: 'vm'
};

export default navbarComponent;
