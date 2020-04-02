const api = require("./api")


function generateMarkdown(answers, picture) {
  return `
  # ${answers.title}

  ## Project Description
  
  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Test](#test)
  * [Credits](#credits)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation
  
  This is how you install the app:
  \`${answers.install}\`
  
  ## Usage 
  
  How to use the app:

  \`${answers.usage}\`

  ## Test

  Run this to test the app:
  \`${answers.test}\`
  
  ## Credits
  ${answers.credits}

  ## Questions
  
  Link to my repo:

  ${api.data.data.url}
  
  
  ## License
  https://img.shields.io/badge/license-GNU%20GPLv3-blue
  ![license](https://img.shields.io/badge/license-${answers.license}-blue)
`;
}

module.exports = generateMarkdown;
