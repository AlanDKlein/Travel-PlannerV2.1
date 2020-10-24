// Import the functions we need
import { getPictures } from './RetrievePics'
import { date_diff_indays } from './calculateDates'
import { buildPageFacts } from './buildFacts'
import { countdown } from './calculateDates'
import { editDates } from './calculateDates'

function retrieveGeoData() {
    //Enable the 'Save Trip' button
    document.getElementById('saveTrip').disabled = false;

    // Get the dates and run the edits on them
    let badDates = false;
    let today = new Date().toJSON().slice(0, 10)
    let departDate = document.getElementById('depart').value
    let returnDate = document.getElementById('return').value
    badDates = editDates(today, departDate, returnDate);

    if (badDates === true) {
        return
    }

    



    // Get the # of days between today and Depart Date to use in the weather API
    let date_diff = 0;
    date_diff = date_diff_indays(today, departDate)

    //Get all of the API keys and the other input values needed
    fetch('http://localhost:8000/keys', { mode: 'no-cors' })
        .then(response => response.json())
        .then(data => {
            const geoKey = data.geoname
            let weatherBitKey = data.WBKey
            let pixabayKey = data.PixKey
            let city = document.getElementById('city').value
            let country = document.getElementById('country').value
            let state = document.getElementById('state').value
            let weatherURL = ''

            //Build the URL to get the longitude and latitude of the destination from geonames
            let URL = `http://api.geonames.org/searchJSON?q=${city},${state}&country=${country}&maxRows=10&username=${geoKey}`

            fetch(URL)
                .then(res => {
                    return res.json()
                })
                .then(function (data) {
                    let latitude = data.geonames[0].lat
                    let longitude = data.geonames[0].lng
                    let displayTemp = '';

                    // Call the current or the forecasted weather API based on the departure date
                    if (date_diff <= 7) {
                        displayTemp = 'current'
                        weatherURL = `https://api.weatherbit.io/v2.0/current?&units=I&lat=${latitude}&lon=${longitude}&key=${weatherBitKey}`
                    }
                    else {
                        displayTemp = 'forecasted'
                        weatherURL = `https://api.weatherbit.io/v2.0/forecast/daily?&units=I&lat=${latitude}&lon=${longitude}&key=${weatherBitKey}`
                    }

                    // Parse the results and build the verbiage for the page
                    fetch(weatherURL)
                        .then(res => {
                            return res.json()
                        })
                        .then(function (data) {
                            let temp = data.data[0].temp;
                            let weatherDesc = data.data[0].weather.description
                            let windDir = data.data[0].wind_cdir_full;
                            let windSpeed = data.data[0].wind_spd;
                            let weatherText = `The ${displayTemp} temperature for ${city} is ${temp} with ${weatherDesc} and winds from the ${windDir} at ${windSpeed} mph.`
                            document.getElementById('weather').innerHTML = weatherText;
                        })
                    // Call the getPictures function to get the image to show
                    getPictures(pixabayKey, city, country);
                })

            // Next call the RESTCountries URL to get stats on the destination country
            let countriesURL = `https://restcountries.eu/rest/v2/alpha/${country}`

            fetch(countriesURL)
                .then(res => {
                    return res.json()
                })
                .then(function (data) {
                    // Build the verbiage about the country to display and then start the countdown to departure.   
                   buildPageFacts(data);
                   countdown(departDate, returnDate);
                 })
        })
}
export { retrieveGeoData }
export { getPictures }
export { date_diff_indays }
export { buildPageFacts }
export { countdown }

