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
    }, {
      type: 'modify',
      path: '../src/forms/formFields/constants.js',
      pattern: /(\/\/ IMPORT FORM_FIELDS)/gi,
      template: '$1\nimport {{properCase name}} from \'./{{properCase name}}\';',
    }, {
      type: 'modify',
      path: '../src/forms/formFields/constants.js',
      pattern: /(};)/gi,
      template: '  {{camelCase name}}: {{properCase name}},\n$1',
    }];

    return actions;
  },
};
