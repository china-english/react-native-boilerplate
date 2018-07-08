/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'React.Component', 'React.PureComponent'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'HeaderCopy',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A file with this name already exists' : true;
      }
      return 'The name is required';
    },
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
    let componentTemplate;

    switch (answers.type) {
      case 'Stateless Function': {
        componentTemplate = './component/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../src/components/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/components/{{properCase name}}/styles.js',
      templateFile: './component/style.js.hbs',
      abortOnFail: true,
    }];

    if (answers.hasStorybook) {
      actions.push({
        type: 'add',
        path: '../src/components/{{properCase name}}/index.stories.js',
        templateFile: './component/story.js.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
