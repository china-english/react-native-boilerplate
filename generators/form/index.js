/**
 * Form Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a form component',
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
    default: 'TestForm',
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
    message: 'Do you want translate the app form?',
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
    let formTemplate;

    switch (answers.type) {
      case 'Stateless Function': {
        formTemplate = './form/stateless.js.hbs';
        break;
      }
      default: {
        formTemplate = './form/class.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../src/forms/{{properCase name}}/index.js',
      templateFile: formTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/forms/{{properCase name}}/styles.js',
      templateFile: './form/style.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/forms/{{properCase name}}/tests/index.test.js',
      templateFile: './form/test.js.hbs',
      abortOnFail: true,
    }];

    if (answers.hasStorybook) {
      actions.push({
        type: 'add',
        path: '../src/forms/{{properCase name}}/stories/index.stories.js',
        templateFile: './form/story.js.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
