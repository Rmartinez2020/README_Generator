function generateMarkdown(answers) {
  return `
  # ${answers.title}

  ## Project Description
  
  ${answers.description}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation

  ${answers.install}
  
  ## Usage 
  
  ${answers.usage}
  
  
  ## Credits
  
  ${answers.credits}
  
  
  ## License
  https://img.shields.io/badge/license-GNU%20GPLv3-blue
  ![license](https://img.shields.io/badge/license-${answers.license}-blue)
`;
}

module.exports = generateMarkdown;
