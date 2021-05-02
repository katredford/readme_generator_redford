// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if satements
    //return '≈'
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, contents, installation, usage, pic, vid, email, github, license } = data
  var badge = renderLicenseBadge(license)
  return `
  # ${title}
  ## Description: 
   ${description} 
   ${contents && '## Contents:'}
   ${contents && contents}
  ${installation && '## Installation'}
  ${installation && installation}
  ${usage && '##Usage'}
  ${usage && usage}
  ${pic && "##Screenshots"}
  ![Alt text](${data.pic}?raw=true "Title")
  ${vid && '##Video'}
  ${vid && vid}
  ${email && '##Email'}
  ${email && email}
  ${github && '##github'}
  ${github && github}

  

  `;
}

module.exports = generateMarkdown;
