
//Funtion to make sure the date fields are entered correctly and the CITY and COUNTRY fields are complete.

let editDates = (today, deptDate, retDate) => {

    if (deptDate === null || deptDate === '' || retDate === null || retDate === '') {
        alert('You must enter a depart AND return date')
        return true;
    }

    if (retDate < deptDate) {
        alert('The Return Date cannot be before the Departure Date.')
        return true;
    }

    if (deptDate < today) {
        alert('The Departure Date cannot be in the past')
        return true;
    }

    let city = document.getElementById('city').value
    let country = document.getElementById('country').value
    if (city === null || city === '' || country === null || country === '') {
        alert('City AND Country must contain a value')
        return true;
    }
}


//Function to calculate the number of days difference betweeen 2 dates.
let date_diff_indays = (date1, date2) => {

    let dt1 = new Date(date1);
    let dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
}


//Function to create the countdown until the departure date and build the text to display.
let countdown = (departDate, returnDate) => {

let tripTotalDays = date_diff_indays(departDate, returnDate)
 
// Get Interval from LS and if one exists kill it
var thisInterval = '';
thisInterval = JSON.parse(localStorage.getItem('interval'))
if (thisInterval != null) {
    clearInterval(thisInterval);
}

// the setInterval function creates the countdown
    let x = setInterval(function () {
    thisInterval = x
    let dt2 = new Date(departDate);
    let countDownDate = dt2.getTime();
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById('countDown').innerHTML = `Your ${tripTotalDays} day trip starts in: ${days}d, ${hours}h, ${minutes}m, and ${seconds}s!!!`
    localStorage.setItem('interval', JSON.stringify(thisInterval))
    // If the count down is finished, clear the text
    // if (timeLeft < 0) {
    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById('countDown').innerHTML = '';
    }
    }, 1000);
    
}

export { date_diff_indays }
export { countdown }
export { editDates }               