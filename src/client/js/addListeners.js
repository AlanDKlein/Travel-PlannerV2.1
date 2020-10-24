
import { retrieveGeoData } from './RetrieveGeoData'
import { saveThisTrip } from './processTripData'
import { getSavedTrip } from './processTripData'
import { deleteTrip } from './processTripData'

//Set the 'Save This Trip' button to disabled until they enter the input values
document.getElementById('saveTrip').disabled = true;

// function myListeners() {
    let myListeners = () => {
        // Add 4 event listeners for the 4 buttons
    document.getElementById('generate').addEventListener('click', getCity);
    document.getElementById('saveTrip').addEventListener('click', saveMyTrip);
    document.getElementById('getTrip').addEventListener('click', getTrip);
    document.getElementById('delete').addEventListener('click', deleteTrip);

    // Retrieve the previously saved trips (if any) and display on the screen on startup.
    for (var i = 0; i < localStorage.length; i++) {
        //Get the key of each object
        let key = localStorage.key(i)
        
        //If the key is a previously stored countdown interval skip over it, else get the object and build it to the DOM.
        if (key != 'interval') {
        let object = localStorage.getItem(key)
 
        //Parse the object to get the values 
        let parsedResponse = JSON.parse(object);
        let departDate = parsedResponse.departDate

        //Create the radio button & text
        let radio = document.createElement('input')
        radio.type = 'radio'
        radio.id = key
        radio.name = 'newTrips'
        var description = document.createTextNode(`${key} on ${departDate}`)
        let ul = document.querySelector('ul')
        let linebreak = document.createElement('br')

        //Add the newly created elements to the page  
        ul.appendChild(radio);
        ul.appendChild(description);
        ul.appendChild(linebreak);
        }
    }
    
}  

// Main function to start retrieving all the trip data
let  getCity = () => {
    retrieveGeoData();
};

// Function to pull the details of the saved trip for display
let getTrip = () => {
    getSavedTrip();
};

// Function to save a trip to storage
let saveMyTrip = () => {
    saveThisTrip();
};

export { saveThisTrip }
export { getSavedTrip }
export { deleteTrip }
export { myListeners }
