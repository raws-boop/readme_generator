// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Generates markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  # Welcome to my automated README.md Generator

  ## What is the title of your project, exactly as it appears on GitHub?
  * ${answers.title} #

  ## Describe your project? 
  * ${answers.description} 

  ## Input your project installation instructions? 
  * ${answers.install} 

  ## Input your project usage information. How will this be used? 
  * ${answers.usage} 

  ## Input your project contribution guidelines.
  * ${answers.guideline}
  
  ## Input your project test instructions. How can another user test the gerator markdown? 
  * ${answers.test}

  ## Which license applies to your project?
  * ${answers.license}

  ## What is your GitHub username? 
  * ${answers.github} 

  ## What is your email address? 
  * ${answers.email} 
`;
}

module.exports = generateMarkdown;
