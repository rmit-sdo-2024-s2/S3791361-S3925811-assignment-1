# COSC2759 Assignment 1
## Notes App - CI Pipeline
- Full Name/Names: **Bailey Liebler, Isaac Kelly**
- Student ID/IDs: **s3791361, s3925811**

### Guidance (remove this section before final submission)

1. Refer for assignment specification `Marking Guide` for details of what should appear in this README.

2. If you do not see an `Actions` tab in your GitHub, email matthew.cullen@rmit.edu.au with URL to your repository, so that it can be enabled.

3. Implement your CI pipeline in the directory `.github/workflows`.

4. Refer to [src/README.md](/src/README.md) for important details on building and testing the application.

5. Commit images to the `img` directory and add them like 
    ```html
    <img src="/img/md.png" style="height: 70px;"/>
    ```
    <img src="/img/md.png" style="height: 70px;"/>

6. Only edit THIS README.md - not the src/README.md
## 1. Apline Inc Notes Application CI Pipeline 
This repository contains the CI pipeline setup for the Alpine Inc Notes Application. The application is built using Node.js, Express, and MongoDB. This CI pipeline will allow Alpine to automate the build, tests, and deployment processes which will allow for future releases to be bug-free. The CI will allow Alpine to reliably deploy their changes. 

### 1.1 Prerequisites 
Please ensure that before running this CI pipeline, the following is installed on your computer/system:
   
    - Node.js
    - MongoDB
    - Git

### Problem Alpine is facing
Alpine has been facing multiple issues recently in the deployment of its features. Alpine has not been using an automated deployment process and has relied on a manual process. This has led to missed releases and bugs in production which has caused an increase in the number of support calls from their customers and a critical release missed for one of their largest clients. The issues are now causing an impact on morale within the team and impacting the revenue seen by Alpine Inc. This project aims to implement a CI pipeline that automates builds, tests, and deployments. This automation process will reduce errors and improve release reliability. Using a CI pipeline will also ensure that any code changes will be tested and validated before being deployed, which will limit the risk of bugs appearing. 

## 2. CI Pipeline Overview
Dont know what to write here yet..................

### 2.1 How to run the CI Pipeline 
For this project, the pipeline will be automatically triggered when changes are pushed to any branch or when a pull request is created. 

!! Not sure if there will be a manual trigger?? !! 

### 2.2 Solution Explanation and Justification  
The CI pipeline created for Alpine Inc has addressed the issues that were previously being faced. By automating the entire process from code generation to deployment, it has allowed for there to be no need for manual deployment. The automation process has provided a solution that will reduce the risk of human error, improve the reliability of the application and ensure that only tested and validated code will be deployed to their clients. 


    - Static Code Analysis: This step helps to identify coding violations and potential errors early in the pipeline.
    - Unit testing: This step will allow for individual components to be tested. It gives a detailed view of each part of the code. 
    - Code coverage: Not sure what to put here yet . 
    - Artifact generating?: Dont have info on this yet 
    - End-to-end testing: This validates that the application works as a whole from start to finish. Testing the application in real-world scenarios. 

