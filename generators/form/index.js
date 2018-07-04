/**
 * Form Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a form component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'TestForm',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A file with this name already exists' : true;
      }
      return 'The name is required';
    },
  }],
  actions: () => {
    const actions = [{
      type: 'add',
      path: '../src/forms/{{properCase name}}/index.js',
      templateFile: './form/form.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/forms/{{properCase name}}/styles.js',
      templateFile: './form/style.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
