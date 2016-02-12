import template from './hero.html';
import './hero.styl';

class HeroController {
  constructor() {
    this.name = 'hero';
  }
}

let heroComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller: HeroController,
  controllerAs: 'vm'
};

export default heroComponent;
