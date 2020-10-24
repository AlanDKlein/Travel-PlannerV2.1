
// This function builds the verbiage to display about the destination
 let buildPageFacts = data => {
    
    let countryName = data.name
    let capital = data.capital
    let currency = data.currencies[0].name
    let symbol = data.currencies[0].symbol
    let language = data.languages[0].name
    let pop = data.population
    let stringPop = Number(pop).toLocaleString();
    let funfacts = `The dominant language of ${countryName} is ${language}, and the currency is the ${symbol}${currency}.  The population of ${countryName} is ${stringPop} people and the capital is ${capital}.`
    document.getElementById('facts').innerHTML = funfacts;
}

export {buildPageFacts}