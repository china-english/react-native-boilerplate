/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');
const containerExists = require('../utils/containerExists');

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
    name: 'isContainerComponent',
    default: false,
    message: 'Does this component belong to container ?',
  }, {
    when: (answers) => answers.isContainerComponent,
    type: 'input',
    name: 'containerName',
    message: 'What is the name of the container?',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return !containerExists(value) ? 'A file with this name does not exist' : true;
      }
      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantTransLate',
    default: true,
    message: 'Do you want translate the app component?',
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

    let pathName = '../src/components/{{properCase name}}';
    if (answers.isContainerComponent) {
      pathName = `../src/containers/${answers.containerName}/components/{{properCase name}}`;
    }
    const actions = [{
      type: 'add',
      path: `${pathName}/index.js`,
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${pathName}/styles.js`,
      templateFile: './component/style.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `${pathName}/tests/index.test.js`,
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }];

    if (answers.hasStorybook) {
      actions.push({
        type: 'add',
        path: `${pathName}/stories/index.stories.js`,
        templateFile: './component/story.js.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
