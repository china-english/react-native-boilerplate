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
        return componentExists(value) ? 'A file with this name already exists' : true;
      }
      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'hasRouter',
    default: true,
    message: 'Do you want to link it with a route?',
  }, {
    type: 'confirm',
    name: 'wantTransLate',
    default: true,
    message: 'Do you want translate the app container?',
  }, {
    type: 'confirm',
    name: 'wantHeader',
    default: true,
    message: 'Do you want app header?',
  }, {
    type: 'confirm',
    name: 'wantFooter',
    default: true,
    message: 'Do you want app footer?',
  }, {
    type: 'confirm',
    name: 'wantActionsAndReducer',
    default: true,
    message: 'Do you want an actions/constants/selectors/reducer tuple for this container?',
  }, {
    type: 'confirm',
    name: 'wantSaga',
    default: true,
    message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
  }],
  actions: (answers) => {
    // Generate index.js and index.test.js
    var componentTemplate; // eslint-disable-line no-var
    switch (answers.type) {
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
      templateFile: './container/styles.js.hbs',
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
    if (answers.wantActionsAndReducer) {
      // Constants
      actions.push({
        type: 'add',
        path: '../src/containers/{{properCase name}}/constants.js',
        templateFile: './container/constants.js.hbs',
        abortOnFail: true,
      });
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

    // Sagas
    if (answers.wantSaga) {
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

    // router
    if (answers.hasRouter) {
      const reg = new RegExp('Scene');
      const routerName = answers.name.replace(reg, '')
        .replace(/( |^)[A-Z]/g, (L) => L.toLowerCase());
      actions.push({
        type: 'modify',
        path: '../src/routes.js',
        pattern: /(<\/Stack>)/gi,
        template: `  <Scene key="${routerName}" component={{{preCurly (properCase name)}}} {...props} />\n      $1`,
      });
      actions.push({
        type: 'modify',
        path: '../src/routes.js',
        pattern: /(-- ADD NEW ROUTE FILE --)/gi,
        template: '$1\nimport {{properCase name}} from \'./containers/{{properCase name}}\';',
      });
    }
    return actions;
  },
};
