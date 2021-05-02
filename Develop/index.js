const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your projects title?",
      },
 
      {
        type: 'input',
        name: 'description',
        message: "Please describe your project",
      },
    
    {
        type: 'checkbox',
        name: 'contents',
        message: "Please list the sections of your README",
        choices: [
          
            {
                name:'usage',
            },

            {
                name:'credits',
            },

            {
                name:'license',
            },
        ]
    },
    

   

    {
        type: 'input',
        name: 'installation',
        message: "how is your application installed?",
    },

      
      {
        type: 'input',
        name: 'pic',
        message: "What's your pics relative path?",
      },

      {
        type: 'input',
        name: 'vid',
        message: "What is your tutorial video's relative path?",
      },

      {
        type: 'input',
        name: 'use',
        message: "what is your application used for?",
      },

      {
        type: 'input',
        name: 'credits',
        message: "who collaborated on this project?",
      },

      {
        type: 'list',
        name: 'badges',
        message: "What badges do you want?",
        choices: ['MIT', 'Creative', 'Open Source']
      },

      {
        type: 'input',
        name: 'email',
        message: "what is your email address?",
      },
    
      {
        type: 'input',
        name: 'github',
        message: "what is the URL of your github profile?",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    //1 ask all the questions we need for the read me!
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        //2 Make the fake read me string
        var makeReadMe = generateMarkdown(answers);
        // 3 then fs.writeFIle with the fakeReadMe
        console.log(makeReadMe)
        fs.writeFile('README.md', makeReadMe, function(err){

        })
      });
      
}

// Function call to initialize app
init();
