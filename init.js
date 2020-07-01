const fs = require('fs');
const path = require('path');
const process = require('process');
const child_process = require('child_process');

(async () => {
  try {
    const packages = await fs.promises.readdir(__dirname + '/packages');
    packages.forEach(package => {
      console.log('\n' + package)
      process.chdir(__dirname + '/packages/' + package)
      child_process.execSync('yarn')
    })
  } catch (e) {
    console.error("We've thrown! Whoops!", e);
  }
})();