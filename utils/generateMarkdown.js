// function to generate markdown for README
function generateMarkdown(data) {
  let tableofContents = "## Table of Contents";
  if (data.license !== ''){tableofContents += '\n\n* [License](#license)\n'}
  if (data.installation !== ''){tableofContents += '\n* [Installation](#installation)\n'}
  if (data.usage !== ''){tableofContents += '\n* [Usage](#usage)\n';}
  if (data.contributions !== ''){tableofContents += '\n* [Contributions](#contributions)\n'}
  if (data.tests !== ''){tableofContents += '\n* [Tests](#tests)\n\n'}
  
  let markdown = `# ${data.title}
  ![Badge for Github repo license](https://img.shields.io/badge/${data.repo}%20-${data.name}-green)
 `;

markdown += `\n\n## Description\n\n${data.description}\n\n`
markdown += "\n" + tableofContents

if(data.license !== ''){
  markdown += `\n## License\n This project is licensed under ${data.license}\n\n`; 
}

if (data.installation !== '') {
  markdown += `\n## Installation \nInstallation Instructions:\n \n${data.installation}\n\n`;
}

if (data.usage !== '') {
  markdown += `\n## Usage\n ${data.usage}\n\n`;
}

if (data.contributions !== '') {
  markdown += `\n## Contributions\n For those intrested in contibuting please follow these guidlines\n ${data.contributions}\n\n`;
}

if (data.tests !== '') {
  markdown += `\n## Tests\n ${data.tests}\n\n`;
}

if (data.questions !== '') {
  markdown += `\n## Questions\n If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at (https://github.com/${data.gitusername}/)`;
}


 return markdown;
 
}

module.exports = generateMarkdown;

