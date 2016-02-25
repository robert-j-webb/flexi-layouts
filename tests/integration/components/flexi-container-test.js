import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flexi-container', 'Integration | Component | flexi container', {
  integration: true
});

function getElement(context) {
  return context.$().get(0).firstElementChild.firstElementChild;
}

test('it renders in component form', function(assert) {

  this.render(hbs`
  <div style="width: 10000px;">
    {{#flexi-container}}
      template block text
    {{/flexi-container}}
  </div>
  `);

  assert.equal(getElement(this).tagName, 'CONTAINER', 'We rendered a container');
  assert.equal(this.$().text().trim(), 'template block text');
});

test('huge responsive containers are responsive', function(assert) {

  // huge
  this.render(hbs`
  <div style="width: 1300px;">
    {{#flexi-container}}
      template block text
    {{/flexi-container}}
  </div>
  `);

  let classNames = 'ember-view container-xs container-sm container-md container-lg';
  assert.equal(getElement(this).className, classNames, 'We rendered the right classes for huge');

  // desktop
  this.render(hbs`
  <div style="width: 900px;">
    {{#flexi-container}}
      template block text
    {{/flexi-container}}
  </div>
  `);
  classNames = 'ember-view container-xs container-sm container-md';
  assert.equal(getElement(this).className, classNames, 'We rendered the right classes for desktop');

  // tablet
  this.render(hbs`
  <div style="width: 500px;">
    {{#flexi-container}}
      template block text
    {{/flexi-container}}
  </div>
  `);

  classNames = 'ember-view container-xs container-sm';
  assert.equal(getElement(this).className, classNames, 'We rendered the right classes for tablet');

  // mobile
  this.render(hbs`
  <div style="width: 100px;">
    {{#flexi-container}}
      template block text
    {{/flexi-container}}
  </div>
  `);

  classNames = 'ember-view container-xs';
  assert.equal(getElement(this).className, classNames, 'We rendered the right classes for mobile');
});

test('it renders a responsive container in angle bracket form', function(assert) {

  // Template block usage:"
  this.render(hbs`
  <div style="width: 100px;">
    <container>
      template block text
    </container>
  </div>
  `);

  let classNames = 'ember-view container-xs';

  assert.equal(getElement(this).tagName, 'CONTAINER', 'We rendered a container');
  assert.equal(getElement(this).className, classNames, 'The container is responsive');
  assert.equal(this.$().text().trim(), 'template block text');
});