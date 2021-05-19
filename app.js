const {inputForm, listForm} = require('./view')
const {printTable} = require('console-table-printer')


async function app(state, update, view){
    while (true){
        const {model, currentView} = state
        const {title, table} = currentView
        console.clear()
        console.log(title)
        printTable(table)
        const {input, temperatureFrom} = await inputForm(model)
        const {unitFrom, unitTo} = await listForm(model)
        const updatedModel = update(input, temperatureFrom, unitFrom, unitTo, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }
    }
}

module.exports = {
    app
}