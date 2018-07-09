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
  }, {
    type: 'confirm',
    name: 'wantTransLate',
    default: true,
    message: 'Do you want transLate the app formField?',
  }, {
    type: 'confirm',
    name: 'hasStorybook',
    message: 'Do you want to link it with storybook?',
    default: true,
  }, {
    type: 'list',
    name: 'position',
    message: 'What will it be shown as',
    default: 'Content',
    choices: () => ['Header', 'Content', 'Footer'],
  }],
  actions: (answers) => {
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

    if (answers.hasStorybook) {
      actions.push({
        type: 'add',
        path: '../src/forms/formFields/{{properCase name}}/index.stories.js',
        templateFile: './component/story.js.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
