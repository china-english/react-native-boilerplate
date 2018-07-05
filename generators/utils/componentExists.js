/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const pageComponents = fs.readdirSync(path.join(__dirname, '../../src/components'));
const pageContainers = fs.readdirSync(path.join(__dirname, '../../src/containers'));
const pageForms = fs.readdirSync(path.join(__dirname, '../../src/forms'));
const pageFormFields = fs.readdirSync(path.join(__dirname, '../../src/forms/formFields'));
const components = pageComponents.concat(pageContainers).concat(pageForms).concat(pageFormFields);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
