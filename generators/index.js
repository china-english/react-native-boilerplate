/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const fs = require('fs');
const path = require('path');
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');
const formGenerator = require('./form/index.js');
const formFieldGenerator = require('./formField/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('form', formGenerator);
  plop.setGenerator('formField', formFieldGenerator);

  plop.setHelper('preCurly', (t) => `{${t}}`);

  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../src/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      try {
        return `forms/${comp}`;
      } catch (e1) {
        try {
          return `forms/formFields/${comp}`;
        } catch (e2) {
          return `components/${comp}`;
        }
      }
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
