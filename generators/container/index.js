/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the base component type:',
    default: 'React.Component',
    choices: () => ['React.Component', 'Stateless Function', 'React.PureComponent'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'IndexScene',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'wantHeaders',
    default: true,
    message: 'Do you want app headers?',
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/constants/selectors/reducer tuple for this container?',
  }, {
    type: 'confirm',
    name: 'wantSaga',
    default: true,
    message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)[note: if you select Stateless Function, saga will not create]',
  }],
  actions: (data) => {
    // Generate index.js and index.test.js
    var componentTemplate; // eslint-disable-line no-var
    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './container/stateless.js.hbs';
        break;
      }
      default: {
        componentTemplate = './container/class.js.hbs';
      }
    }

    /* Create the file infrastructure
     * 创建文件基本结构
     */
    const actions = [{
      type: 'add',
      path: '../src/containers/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/containers/{{properCase name}}/styles.js',
      templateFile: './container/style.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../src/containers/{{properCase name}}/tests/index.test.js',
      templateFile: './container/test.js.hbs',
      abortOnFail: true,
    }];

    /* If you want actions and a reducer, generate actions.js, constants.js,
     * reducer.js and the corresponding tests for actions and the reducer
     * 如果你需要 actions 和 reducer，那么将会生成以下文件：actions.js, constants.js,
     * reducer.js 以及 actions.test.js 和 reducer.test.js
     */
    if (data.wantActionsAndReducer) {
      // Constants
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });
      if (data.type !== 'Stateless Function') {
        // Selectors
        actions.push({
          type: 'add',
          path: '../src/containers/{{properCase name}}/selectors.js',
          templateFile: './container/selectors.js.hbs',
          abortOnFail: true,
        });
        actions.push({
          type: 'add',
          path: '../src/containers/{{properCase name}}/tests/selectors.test.js',
          templateFile: './container/selectors.test.js.hbs',
          abortOnFail: true,
        });

        // Reducer
        actions.push({
          type: 'add',
          path: '../src/containers/{{properCase name}}/reducer.js',
          templateFile: './container/reducer.js.hbs',
          abortOnFail: true,
        });
        actions.push({
          type: 'add',
          path: '../src/containers/{{properCase name}}/tests/reducer.test.js',
          templateFile: './container/reducer.test.js.hbs',
          abortOnFail: true,
        });

        // Actions
        actions.push({
          type: 'add',
          path: '../src/containers/{{properCase name}}/actions.js',
          templateFile: './container/actions.js.hbs',
          abortOnFail: true,
        });
        actions.push({
          type: 'add',
          path: '../src/containers/{{properCase name}}/tests/actions.test.js',
          templateFile: './container/actions.test.js.hbs',
          abortOnFail: true,
        });
      }
    }

    // Sagas
    if (data.wantSaga && data.type !== 'Stateless Function') {
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/sagas.js',
        templateFile: './container/sagas.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/tests/sagas.test.js',
        templateFile: './container/sagas.test.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
