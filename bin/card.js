#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Michael Hoffmann /'),
  handle: chalk.red('Mokkapps'),
  work: chalk.white('   Senior Freelance Software Developer'),
  twitter: chalk.red(' twitter.com/mokkapps'),
  github: chalk.red('  github.com/mokkapps'),
  devto: chalk.red('   dev.to/mokkapps'),
  instagram: chalk.red('instagram.com/mokkapps'),
  web: chalk.red('     mokkapps.de'),
  npx: chalk.white('npx mokkapps'),
  labelWork: chalk.white.bold('Title:'),
  labelDevTo: chalk.white.bold('Dev.to:'),
  labelTwitter: chalk.white.bold('Twitter:'),
  labelGitHub: chalk.white.bold('GitHub:'),
  labelInstagram: chalk.white.bold('Instagram:'),
  labelWeb: chalk.white.bold('Web:'),
  labelCard: chalk.white.bold('Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const instagraming = `${data.labelInstagram} ${data.instagram}`
const devTo = `${data.labelDevTo} ${data.devto}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  instagraming +
  newline +
  devTo +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.red(boxen(output, options)));
