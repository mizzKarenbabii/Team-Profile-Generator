var manager = require('./lib/Manager');
const inquirer = require ('inquirer');
const fs = require ('fs');
// const chalkPipe = require('chalk-pipe');

/**
 * List prompt example
 */

 'use strict';
 const inquirer = require('..');
 
//  inquirer
//    .prompt([
//      {
//        type: 'list',
//        name: 'theme',
//        message: 'What is your role?',
//        choices: [
//          'Manager',
//          'Employee',
//          'Eningeer',
//          'Intern'
//          new inquirer.Separator(),
//          'Ask for opening hours',
//          {
//            name: 'Contact support',
//            disabled: 'Unavailable at this time',
//          },
//          'Talk to the receptionist',
//        ],
//      },
//      {
//        type: 'list',
//        name: 'size',
//        message: 'What size do you need?',
//        choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
//        filter(val) {
//          return val.toLowerCase();
//        },
//      },
//    ])
//    .then((answers) => {
//      console.log(JSON.stringify(answers, null, '  '));
//    });

// const questions = [
//   {
//     type: 'input',
//     name: 'first_name',
//     message: "What's your first name",
//   },
//   {
//     type: 'input',
//     name: 'last_name',
//     message: "What's your last name",
//     default() {
//       return 'Doe';
//     },
//   },
//   {
//     type: 'input',
//     name: 'fav_color',
//     message: "What's your favorite color",
//     transformer(color, answers, flags) {
//       const text = chalkPipe(color)(color);
//       if (flags.isFinal) {
//         return text + '!';
//       }

//       return text;
//     },
//   },
//   {
//     type: 'input',
//     name: 'phone',
//     message: "What's your phone number",
//     validate(value) {
//       const pass = value.match(
//         /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//       );
//       if (pass) {
//         return true;
//       }

//       return 'Please enter a valid phone number';
//     },
//   },
// ];

// inquirer.prompt(questions).then((answers) => {
//   console.log(JSON.stringify(answers, null, '  '));
// });



// /**
//  * Input prompt example
//  */

//  'use strict';
//  const inquirer = require('..');
//  const chalkPipe = require('chalk-pipe');
 
//  const questions = [
//    {
//      type: 'input',
//      name: 'first_name',
//      message: "",
//    },
//    {
//      type: 'input',
//      name: 'last_name',
//      message: "What's your last name",
//      default() {
//        return 'Doe';
//      },
//    },
//    {
//      type: 'input',
//      name: 'fav_color',
//      message: "What's your favorite color",
//      transformer(color, answers, flags) {
//        const text = chalkPipe(color)(color);
//        if (flags.isFinal) {
//          return text + '!';
//        }
 
//        return text;
//      },
//    },
//    {
//      type: 'input',
//      name: 'phone',
//      message: "What's your phone number",
//      validate(value) {
//        const pass = value.match(
//          /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
//        );
//        if (pass) {
//          return true;
//        }
 
//        return 'Please enter a valid phone number';
//      },
//    },
//  ];
 
//  inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
});