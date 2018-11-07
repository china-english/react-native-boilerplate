/**
 * Form Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a form field component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of form',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'React.Component', 'React.PureComponent'],
  }, {
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
    message: 'Do you want translate the app formField?',
  }, {
    type: 'confirm',
    name: 'hasStorybook',
    message: 'Do you want to link it with storybook?',
    default: true,
  }, {
    when: (answers) => answers.hasStorybook,
    type: 'list',
    name: 'position',
    message: 'What will it be shown as',
    default: 'Content',
    choices: () => ['Header', 'Content', 'Footer'],
  }],
  actions: (answers) => {
    let formFieldsTemplate;

    switch (answers.type) {
      case 'Stateless Function': {
        formFieldsTemplate = './formField/stateless.js.hbs';
        break;
      }
      default: {
        formFieldsTemplate = './formField/class.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../src/forms/formFields/{{properCase name}}/index.js',
      templateFile: formFieldsTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/forms/formFields/{{properCase name}}/tests/index.test.js',
      templateFile: './formField/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'modify',
      path: '../src/forms/formFields/constants.js',
      pattern: /(\n)(export const)/gi,
      template: 'import {{properCase name}} from \'./{{properCase name}}\';\n$1$2',
    }, {
      type: 'modify',
      path: '../src/forms/formFields/constants.js',
      pattern: /(};)/gi,
      template: '  {{camelCase name}}: {{properCase name}},\n$1',
    }];

    if (answers.hasStorybook) {
      actions.push({
        type: 'add',
        path: '../src/forms/formFields/{{properCase name}}/stories/index.stories.js',
        templateFile: './formField/story.js.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
