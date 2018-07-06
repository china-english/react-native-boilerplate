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
        type: 'modify',
        path: '../storybook/componentStories/index.js',
        pattern: /(\)\);)/gi,
        template: '))\n'
          + '  .add(\'{{titleCase name}}\', () => (\n'
          + '    <{{properCase name}} />\n'
          + '  $1',
      });
      actions.push({
        type: 'modify',
        path: '../storybook/componentStories/index.js',
        pattern: /(-- IMPORT NEW STORYBOOK FILE --)/gi,
        template: '$1\nimport {{properCase name}} from \'../../src/components/{{properCase name}}\';',

      });
    }
    return actions;
  },
};
