'use strict'

// Pull in our modules
const boxen = require('boxen');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Frank Zi WANG'),
  handle: chalk.white('@FrankZiWANG-dev'),
  work: chalk.white('Junior Web Developer at Becode'),
  github: chalk.gray('https://github.com/FrankZiWANG-dev'),
  linkedin: chalk.gray('https://linkedin.com/in/frank-zi-wang'),
  labelWork: chalk.white.bold('       Work:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               githubing + newline + // data.labelGitHub + data.github
               linkedining

fs.writeFileSync(path.join(__dirname, './bin/output'), chalk.green(boxen(output, options)))