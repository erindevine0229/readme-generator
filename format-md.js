

function formatReadme (title, description, installation, usage, contributions, test, license, username, email) {
  
    const readmeContent = 


`
# ${title}

### Table of Contents:

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contributions](#contributions)
5. [Testing](#testing)
6. [License](#license)
7. [Questions](#questions)


## Description
${description}

 ## Installation
${installation}

## Usage
${usage}

## Contributions
${contributions}

## Testing
${test}

## License
${license}

## Questions
My GitHub profile username is ${username}. View my profile at https://github.com/${username}. 
If you have any questions, you can contact me at ${email}.`
    
    return readmeContent;
};

module.exports = formatReadme;