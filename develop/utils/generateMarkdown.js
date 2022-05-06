const renderLicense = require('./renderLicense')

// Function to generate markdown for a professional README
function generateMarkdown(data) {
return `
---
# ${data.title}

  ${data.description}

  ${data.renderLicense}

  A deployed version can be viewed here: ${data.URL} 

---
## Contents

1. [About](#about)
2. [User Story](#user-story)
3. [Acceptance Criteria](#acceptance-criteria)
4. [Visuals](#visuals)
5. [Build](#build)
6. [Installations](#installations)
7. [License](#license)
8. [Contributions](#contributions)
9. [Tests](#tests)
10. [Authors](#authors)

---
## About:

${data.about}

---
## User Story:

${data.userStory}

---
## Acceptance Criteria:

${data.acceptanceCriteria}

---
## Visuals:

![]() 

---

## Build:

${data.build}
---
## Installations:

${data.installations}

To clone the repo:

  git clone ${data.clone}

---
## License
  License used for this project - ${data.license} 
  * For more information on license types, please reference - [https: //choosealicense.com/](https://choosealicense.com/).

---
## Contributions:

  ${data.contributions}

  To contribute to this application, create a pull request.
  Here are the steps needed to do so:
  - Fork the repository
  - Create a feature branch (git checkout -b (feature branch name))
  - Commit your new feature
  - Push feature branch
  - Create a new pull request
  Following a code review, your feature may be merged.

---
## Tests:
  ${data.testing}

---
## Authors:
  ${data.author}

---
## Contact Information:
* GitHub Username: ${data.gitName}
* GitHub Email: ${data.email}
  
`;
}

module.exports = generateMarkdown;