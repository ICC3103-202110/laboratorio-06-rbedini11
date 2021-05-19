const FUNCTIONS = {
    'Y': normal,
    'n': change
}
function normal(temperatureFrom, unitFrom, temperatureTo, unitTo){
    return {
        temperatureFrom,
        unitFrom
    }
}
function change(temperatureFrom, unitFrom, temperatureTo, unitTo){
    return {
        temperatureTo,
        unitTo
    }
}
function getTemperatureTo(temperatureFrom, unitFrom, unitTo){
    switch(unitFrom){
        case 'Celsius':
            switch(unitTo){
                case 'Kelvin':
                    return temperatureFrom+273.15
                case 'Fahrenheit':
                    return (temperatureFrom* 9/5)+32;
                default:
                    return temperatureFrom 
            }
        case 'Kelvin':
            switch(unitTo){
                case 'Celsius':
                    return temperatureFrom-273.15
                case 'Fahrenheit':
                    return ((temperatureFrom-273.15)* 9/5)+32;
                default:
                    return temperatureFrom 
            }
        case 'Fahrenheit':
            switch(unitTo){
                case 'Celsius':
                    return (temperatureFrom-32)* 5/9
                case 'Kelvin':
                    return ((temperatureFrom-32) * 5/9) + 273.15;
                default:
                    return temperatureFrom 
            }               
        default:
            return false
    }
}
function update(input, model){
    const {input} = model
    const {temperatureInitial, unitInitial} = FUNCTIONS[input](temperatureFrom, unitFrom, model)
    const{temperatureFinal}= getTemperatureTo(temperatureInitial, unitInitial, unitFrom )
    return {
        ...model,
        temperatureTo: temperatureFinal,
        input: input
    }
}
module.exports={
    update
}
