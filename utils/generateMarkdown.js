// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Welcome to my automated README.md Generator

  ## What is the title of your project, exactly as it appears on GitHub?
  * ${data.title} #

  ## Describe your project? 
  * ${data.description} 

  ## Input your project installation instructions? 
  * ${data.install} 

  ## Input your project usage information. How will this be used? 
  * ${data.usage} 

  ## Input your project contribution guidelines.
  * ${data.guideline}
  
  ## Input your project test instructions. How can another user test the gerator markdown? 
  * ${data.test}

  ## Which license applies to your project?
  * ${data.license}

  // ## What is your GitHub username? 
  * ${data.github} 

  ## What is your email address? 
  * ${data.email} 
`;
}

module.exports = generateMarkdown;
