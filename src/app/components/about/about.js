import template from './about.html';
import './about.styl';

class AboutController {
  constructor() {
    this.name = 'about';
  }
}

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: AboutController,
  controllerAs: 'vm'
};

export default aboutComponent;
