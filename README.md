# trivia_react

## Description 
This is an application built on React JS utilizing components, react hooks and context to distribute data in each component. The purpose is to create an interactive trivia game based on novels and genres of literature. 

## Current Status
The application is functional and operates normal. The current novel/genre selection is limited to the Game of Chance as the primary focus of the tool was to promote the novel at www.raqueldrosos.com. The backend functionality and infrustructure exists to add more novels/genres in the application. 

## Installation 
The application has been built to accomodate installation both on a native website and as a blug in on a WordPress based site without redirecting visitors to a new page. In order for a user to install the website, he/she needs to take download the code from GitHub and in their local copy head to the package.json file where they will need to update the **homepage** attribute to the address of your website where you want to deploy the application. 

The base version is setup to work on a WordPress based website, so in the **package.json** file, in the scripts dictionary, the **Public** attribute should be updated in case you want to deploy the application on a native website. 

Finally, in the **public/index.html** folder, I have added meta tags for social media and web crawlers. These are currently directing to the www.raqueldrosos.com website and contain information about the author and novel. Users should update these tags to direct to their own website. 

## Adding more Novels or Genres 
The current version of the application contains questions only for the **Games of Chance** novel, so in case users want to add more genres or novels, please follow these steps: 
* **assets/questionsList.js**: Update the questions dictionary or add a new dictionary with the questions you want your playesr to answer. In case you add a new dictionary variable, don't forget to export it. The recommendation is to use **const** to store the data. 
* **data/DataProvider.js**: Update the DataProvider component to include the new dictionary or questions. A dropdown selection has been commented out, but it can be used to replace the current single version. 
* Current questionaire contains 10 questions and if the new container variable contains a different number, it must be updated. 

## Contribution 
Contribution to this project is open and welcomed. Potential contributors should open an issue using the GitHub functionality to recommend improvements. 

To merge updates, I follow a regular review process where I examine your contributions/recommendations before merging them to the main branch. 