/* eslint-disable strict, no-console */

'use strict';

const fs = require('fs');
const glob = require('glob');
const chalk = require('chalk');
const extend = require('extend');

let hasError = false;
const pkgGlob = './packages/node_modules/**/package.json';

function objectIntersection(obj1, obj2) {
    return Object.keys(obj1).filter({}.hasOwnProperty.bind(obj2));
}

function verifySameValue(obj1, obj2, errorMessage) {
    return (key) => {
        if (obj1[key] !== obj2[key]) {
            console.log(`${chalk.red('ERROR::')} Found internal mismatch for ${key}. ${obj1[key]} !== ${obj2[key]}`);
            console.log(`${chalk.red('ERROR::')} ${errorMessage(key, obj1[key], obj2[key])}`);
            hasError = true;
        }
    };
}

const internalMismatch = (key, val1, val2) => `Found internal mismatch for ${key}. ${val1} !== ${val2}`;
const globalMismatch = (key, val1, val2) => `Found global mismatch for ${key}. ${val1} !== ${val2}`;
const interMismatch = (key, val1, val2) => `Found inter-dependency mismatch for ${key}. ${val1} !== ${val2}`;

function analyzeDependenciesOf(pkg, depMap) {
    if (!depMap) {
        depMap = {};
    }
    // Check that dependencies in pkg use same version in all dependency-sections
    const dependencies = pkg.dependencies || {};
    const peerDependencies = pkg.peerDependencies || {};
    const devDependencies = pkg.devDependencies || {};

    objectIntersection(dependencies, peerDependencies).forEach(verifySameValue(dependencies, peerDependencies, internalMismatch));
    objectIntersection(dependencies, devDependencies).forEach(verifySameValue(dependencies, devDependencies, internalMismatch));
    objectIntersection(peerDependencies, devDependencies).forEach(verifySameValue(peerDependencies, devDependencies, internalMismatch));

    objectIntersection(dependencies, depMap).forEach(verifySameValue(dependencies, depMap, interMismatch));
    objectIntersection(devDependencies, depMap).forEach(verifySameValue(devDependencies, depMap, interMismatch));
    objectIntersection(peerDependencies, depMap).forEach(verifySameValue(peerDependencies, depMap, interMismatch));

    return {
        name: pkg.name,
        version: pkg.version,
        dependencies: extend({}, dependencies, peerDependencies, devDependencies)
    };
}

console.log(`Checking package: ${chalk.cyan('./package.json')}`);
const globalPkg = analyzeDependenciesOf(JSON.parse(fs.readFileSync('./package.json')));
console.log('');

glob(pkgGlob, { dot: true }, (err, files) => {
    const pkgs = files.map((file) => ({ file: file, content: JSON.parse(fs.readFileSync(file, 'utf-8'))}));
    const depMap = pkgs.reduce((map, data) => extend(map, {[data.content.name]: data.content.version}), {});


    pkgs.forEach((data) => {
        console.log(`Checking package: ${chalk.cyan(data.file)}`);
        const pkg = analyzeDependenciesOf(data.content, depMap);
        Object.keys(pkg.dependencies)
            .filter((key) => !key.startsWith('nav-frontend-') && key !== 'nav-frontend-core')
            .forEach(verifySameValue(pkg.dependencies, globalPkg.dependencies, globalMismatch));

        console.log('');
    });

    hasError && process.exit(1); // eslint-disable-line no-unused-expressions
});
