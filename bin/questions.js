const inquirer = require('inquirer');
const name  =  'myProject';

const questions = [
    {
        type: "input",
        name: 'projectName',
        message: '项目名称:',
        default: name,
    },
    {
        type:"list",
        name: 'templateName',
        message: '选择模版',
        choices:[ "vue2-landpage" , "vue3-template", "react-template", "multi-page-template" ],
    },
];

module.exports = function() {
    return inquirer.prompt(questions);
}
