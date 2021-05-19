
function getTemperatureTo(temperatureFrom, unitFrom, unitTo){
    switch(unitFrom){
        case 'Celsius':
            switch(unitTo){
                case 'Kelvin':
                    return (1*temperatureFrom)+273.15
                case 'Fahrenheit':
                    return (temperatureFrom* 9/5)+32;
                default:
                    return 1*temperatureFrom 
            }
        case 'Kelvin':
            switch(unitTo){
                case 'Celsius':
                    return (1*temperatureFrom)-273.15
                case 'Fahrenheit':
                    return (((1*temperatureFrom)-273.15)* 9/5)+32;
                default:
                    return temperatureFrom 
            }
        case 'Fahrenheit':
            switch(unitTo){
                case 'Celsius':
                    return ((1*temperatureFrom)-32)* 5/9
                case 'Kelvin':
                    return (((1*temperatureFrom)-32) * 5/9) + 273.15;
                default:
                    return temperatureFrom 
            }               
        default:
            return false
    }
}
function update(input, temperatureFrom, unitFrom, unitTo, model){
    const temperatureFinal= getTemperatureTo(temperatureFrom, unitFrom, unitTo)
    if (input==='Y'){
        return {
            ...model,
            temperatureTo: temperatureFinal,
            input: input,
            temperatureFrom: temperatureFrom,
            unitTo: unitTo,
            unitFrom: unitFrom
        }
    }
    else{ 
        return{
            ...model,
            temperatureFrom: temperatureFinal,
            input: input,
            unitFrom: unitTo,
            unitTo: unitFrom,
            temperatureTo: temperatureFrom

    }
    }
}
module.exports={
    update
}
