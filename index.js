
const inquirer = require('inquirer');
const fs = require('fs');
const formatReadme = require('./format-md');


const userQuestions = [
  {
    message: 'Generate a professional README.md file here. Press ENTER to continue...',
    name: 'enterKey'
  },

  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },

  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of this project.',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'Provide any information on installion.',
  },

{
  type: 'input',
  name: 'usage',
  message: 'What is the intended use of this project?'
},

{
  type: 'input',
  name: 'contributions',
  message: 'Please list any contributors/collaborations here (may put N/A if none).',
},

{
  type: 'input',
  name: 'test',
  message: 'Provide information/instructions on testing this project.'
},

{
  type: 'list',
  name: 'license',
  message: 'Select a License if applicable.',
  choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'Boost software License 1.0', 'Other', 'N/A'],

},

{
  type: 'input',
  name: 'username',
  message: 'What is your Git Hub username?',
},

{
  type: 'input',
  name: 'email',
  message: 'What is your email address?'
},

];


function generateFile () {

inquirer.prompt(userQuestions).then((response) => {
  const {title, description, installation, usage, contributions, test, license, username, email} = response;
  const readmeContent = formatReadme(title, description, installation, usage, contributions, test, license, username, email);

  fs.writeFile("README.md", readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README file successfully generated!");
    }
  });
});

};

generateFile();