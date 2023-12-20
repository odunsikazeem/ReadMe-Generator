// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#Usage)
  * [Features](#features)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## Features
  ${data.features}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  visit [github/${data.creator}](https://github.com/${data.creator}).
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect). 
  `;
  }

module.exports = generateMarkdown;
