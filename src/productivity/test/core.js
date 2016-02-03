'use strict';

import {MyComponent} from '../lib/MyComponent';
const assert = require('assert');

describe('It pass',  () => {

  it('it should pass',  () => {
    let component = new MyComponent();
    assert.notEqual(component, null);
  });

});
