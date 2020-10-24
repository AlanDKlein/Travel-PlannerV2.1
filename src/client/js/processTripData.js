// This file has the functions to Save/Retrieve/Delet Trips
import { countdown } from './calculateDates'


let saveThisTrip = () => {
    //Get all the data to save from the DOM
    let city = document.getElementById('city').value
    let country = document.getElementById('country').value
    let state = document.getElementById('state').value
    let departDate = document.getElementById('depart').value
    let returnDate = document.getElementById('return').value
    let weatherText = document.getElementById('weather').innerText
    let funFacts = document.getElementById('facts').innerText
    let picURL = document.getElementById('image').src

    //Build the object to save to Local Storage
    let saveTrip = {
        city: city,
        state: state,
        country: country,
        weather: weatherText,
        facts: funFacts,
        pic: picURL,
        departDate: departDate,
        returnDate: returnDate
    };

    //Save the object to storage with the city name as the key
    localStorage.setItem(city, JSON.stringify(saveTrip))

    // Build the radio button and text to display in 'My Saved Trips'
    let textValues = `${city} on ${departDate}`
    let radio = document.createElement('input')
    radio.type = 'radio'
    radio.id = city
    radio.name = 'newTrips'

    var description = document.createTextNode(textValues);
    let ul = document.querySelector('ul')
    let linebreak = document.createElement('br')

    ul.appendChild(radio);
    ul.appendChild(description);
    ul.appendChild(linebreak);

    // Clear all of the input fields
    document.getElementById('depart').value = ''
    document.getElementById('return').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = ''
    document.getElementById('country').value = ''
}
let getSavedTrip = () => {
    //get the id of the radio button that was selected when they clicked the button and pass that to localStorage.

    let lis = document.getElementById('saved').getElementsByTagName('input');

    //Run edit to make sure they've selected a trip to retrieve
    let oneChecked = false;
    for (let i = 0; i <= lis.length - 1; i++) {
        if (lis[i].checked) {
            oneChecked = true
        }
    }

    // If they haven't selected a trip display an alert and return without processing anything.
    if (oneChecked === false) {
        alert('You must select a trip.')
        return
    }
    // Loop through the saved trips to get the one selected
    for (let i = 0; i <= lis.length - 1; i++) {
        if (lis[i].checked) {

            let key = lis[i].id
            // Get the ID of the selected trip and retrieve it from storage
            let object = localStorage.getItem(key)
            //Parse the object to get the details
            let parsedResponse = JSON.parse(object);
            let city = parsedResponse.city
            let state = parsedResponse.state
            let country = parsedResponse.country
            let getPicURL = parsedResponse.pic
            let departDate = parsedResponse.departDate
            let getWeather = parsedResponse.weather
            let getFacts = parsedResponse.facts
            let returnDate = parsedResponse.returnDate

            //Display the data on the screen
            document.getElementById('city').value = city;
            document.getElementById('state').value = state;
            document.getElementById('country').value = country;
            document.getElementById('facts').innerHTML = getFacts;
            document.getElementById('image').src = getPicURL;
            document.getElementById('depart').value = departDate;
            document.getElementById('return').value = returnDate;
            document.getElementById('weather').innerHTML = getWeather;
            // Pass depart and return date to use to calculate # of days in the trip and display that in the text along with the countdown data.
            countdown(departDate, returnDate);
        }
        else {
            console.log('Not Checked')
        }
    }
}

//Function to delte the trip from storage
let deleteTrip = () => {

    //Get all of the radio buttons and loop through to make sure one is checked
    let lis = document.getElementById('saved').getElementsByTagName('input');
    let oneChecked = false;
    for (let i = 0; i <= lis.length - 1; i++) {
        if (lis[i].checked) {
            oneChecked = true
        }
    }
    if (oneChecked === false) {
        alert('You must select a trip.')
        return
    }

    // Get the one that is checked to delete
    for (let i = 0; i <= lis.length - 1; i++) {
        if (lis[i].checked) {
            //Get the key and then delete the record
            let key = lis[i].id
            localStorage.removeItem(key)
            //Remove the elements from the page
            let ul = document.querySelector('ul')
            lis[i].nextSibling.textContent = ''
            ul.removeChild(lis[i])
            //Clear out the other verbiage
            document.getElementById('facts').innerHTML = '';
            document.getElementById('image').src = '';
            document.getElementById('weather').innerHTML = '';
            // call the countdown with zero dates to clear it        
            countdown(0, 0)
        }
    }
}

export { saveThisTrip }
export { getSavedTrip }
export { deleteTrip }
export { countdown }