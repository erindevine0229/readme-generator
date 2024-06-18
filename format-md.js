

function formatReadme (title, description, installation, usage, contributions, test, license, username, email) {
  
    const readmeContent = 
    `# ${title}

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