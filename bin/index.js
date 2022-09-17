const { program } = require('commander');
const download = require('download-git-repo');
const question = require('./questions');
const ora = require('ora');
const {name, version} = require('../package.json');

// 定义版本和参数选项
program.name(name)
    .version(version, '-v, --version')
    .command('create')
    .action(async () => {
        const answers = await question();
        const {templateName, projectName} = answers
        if (templateName === "vue3-template") {
            const spinner = ora(`clone ${templateName} ...`);
            spinner.start();
            download('github:yanggongzhou/vue3-template', projectName, {},function (err) {
                console.log(err ? 'Error' : 'Success... please enjoyð')
                err ?
                    console.error(err) :
                    spinner.succeed();
            })
        } else if(templateName === "react-template") {
            const spinner = ora(`clone ${templateName} ...`);
            spinner.start();
            download('github:yanggongzhou/react-template', projectName, {},function (err) {
                err ?
                    console.error(err) :
                    spinner.succeed();
            })
        } else if (templateName === "vue2-landpage") {
            const spinner = ora(`clone ${templateName} ...`);
            spinner.start();
            download('github:yanggongzhou/init-landpage', projectName, {},function (err) {
                err ?
                    console.error(err) :
                    spinner.succeed();
            })
        } else {
            console.error('A template name that does not exist')
        }
    });

program.parse(process.argv);


