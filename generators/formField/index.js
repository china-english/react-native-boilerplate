/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an form field',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'SampleInput',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container or formField with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'component',
    default: false,
    message: 'Do you want use React.Component in this field?',
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    let componentTemplate;
    if (data.component) {
      componentTemplate = './formField/fieldClass.js.hbs';
    } else {
      componentTemplate = './formField/formField.js.hbs';
    }
    const actions = [{
      type: 'add',
      path: '../src/forms/formFields/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/forms/formFields/{{properCase name}}/tests/index.test.js',
      templateFile: './formField/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/forms/formFields/{{properCase name}}/style.scss',
      templateFile: './formField/style.scss.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/forms/formFields/{{properCase name}}/stories/index.story.js',
      templateFile: './formField/story.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
