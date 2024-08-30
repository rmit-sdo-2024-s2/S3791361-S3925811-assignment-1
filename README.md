# COSC2759 Assignment 1
## Notes App - CI Pipeline
**Full Name/Names:** Bailey Liebler, Isaac Kelly
**Student ID/IDs:** s3791361, s3925811

### Introduction
This README provides an overview of the Continuous Integration (CI) pipeline setup for the Alpine Inc. Notes Application

### Alpine Inc CI Pipeline
This repository contains the CI pipeline setup for the Alpine Inc Notes Application. The application is built using Node.js, Express, and MongoDB. This CI pipeline will allow Alpine to automate the build, tests, and deployment processes which will allow for future releases to be bug-free. The CI will allow Alpine Inc. to deploy its changes reliably.
### Prerequisites
Please ensure that before running this CI pipeline, the following is installed on your computer/system:
- Node.js
- MongoDB
- Git

### Problem Alpine is Facing
Alpine Inc. has faced several challenges due to the lack of an automated deployment process. These challenges include missed releases, production bugs, and reduced team morale. Introducing a CI pipeline addresses these issues by automating key development processes. 
### CI Pipeline Overview
The CI pipeline will trigger automatically when any push or pull requests are made on any branch. The pipeline has multiple stages, all of which play a different role in ensuring bug-free code.

- **Linting:** Will ensure code quality by identifying and flagging issues early in the development process.
- **Unit testing:** Will allow for individual components to be tested and ensure they work as expected without any bugs.
- **Code Coverage:** Will ensure that the codebase is adequately tested.
- **Artifact Generation:** Produces deployable builds that can be consistently deployed to various environments.
- **End-to-end testing:** Will simulate real-world user interactions to validate the functionality of the application from start to finish.

### How to Run the CI Pipeline
The CI pipeline will automatically run on GitHub actions upon the following:
- **Pushing changes to any branch:** This will trigger the pipeline automatically
- **Creating a pull request:** This will again trigger the pipeline automatically.

### Output Expected
The expected output if all the tests pass and there are no issues is that the pipeline will complete successfully. The artifacts will be generated to the main branch and the application will run as expected.
If there are issues, which could include linting errors or failed tests, the pipeline will fail. On GitHub actions there will be details on why the error occurred and will provide details of what needs to be fixed.

