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
// const formFieldGenerator = require('./formField/index.js');
const languageGenerator = require('./language/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('form', formGenerator);
  // plop.setGenerator('formField', formFieldGenerator);
  plop.setGenerator('language', languageGenerator);
  plop.addHelper('directory', (comp) => {
    try {
      fs.accessSync(path.join(__dirname, `../src/containers/${comp}`), fs.F_OK);
      return `containers/${comp}`;
    } catch (e) {
      try {
        fs.accessSync(path.join(__dirname, `../src/forms/${comp}`), fs.F_OK);
        return `forms/${comp}`;
      } catch (e2) {
        // try {
        //   fs.accessSync(path.join(__dirname, `../src/forms/formFields/${comp}`), fs.F_OK);
        //   return `forms/formFields/${comp}`;
        // } catch (e3) {
        return `components/${comp}`;
        // }
      }
    }
  });
  plop.addHelper('curly', (object, open) => (open ? '{' : '}'));
};
