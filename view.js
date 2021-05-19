const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.red(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {temperatureFrom} = model
    const {temperatureTo} = model
    const {unitFrom}= model
    const {unitTo}= model
    return [
        {leftValue: temperatureFrom, 
        leftUnit: unitFrom,
        rightValue: temperatureTo,
        rigtUnit: unitTo}
    ]
}

function inputForm(model){
    const {input} = model
    const {temperatureFrom}= model
    const message1 = 'Left temperature is source?'
    const message2= 'Temperature value to convert'
    return inquirer.prompt([
        {
            name: 'input',
            type: 'input',
            message: message1,
            default: input,
            validate: function(value){
                if(value === 'Y' || value === 'n'){
                    return true
                } else {
                    return 'Enter Y or n'
                }
            }},
        { 
        name: 'temperatureFrom',
        type: 'temperatureFrom',
        message: message2,
        default: temperatureFrom,
        }
    ])
}

function listForm(model){
    const {unitFrom} = model
    const {unitTo} = model
    const messageFrom = 'From?'
    const messageTo = 'To?'
    const choices = ['Celsius', 'Fahrenheit','Kelvin']
    return inquirer.prompt([{
        name: 'unitFrom',
        type: 'list',
        message: messageFrom,
        default: unitFrom,
        choices: choices
    },
    {name: 'unitTo',
    type: 'list',
    message: messageTo,
    default: unitTo,
    choices: choices

    }])
}



function view(model){
    return {
        title: getTitle(),
        table: getTable(model)
    }
}

module.exports = {
    view, 
    inputForm,
    listForm
}
