/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const containers = fs.readdirSync(path.join(__dirname, '../../src/containers'));

function containerExists(comp) {
  return containers.indexOf(comp) >= 0;
}

module.exports = containerExists;
