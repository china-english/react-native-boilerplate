/**
 * Form Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a form field component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'TestInput',
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
      path: '../src/forms/formFields/{{properCase name}}/index.js',
      templateFile: './formField/formField.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
