const visitDaysDisplay = document.querySelector(".visits");
const dayDifference = document.querySelector('#difference')
let today = new Date();

let lastVisit = localStorage.getItem('lastVisit') || today;

if (lastVisit == null) {
    localStorage.setItem('lastVisit', today);
}
else {
    ShowOnPage(visitDaysDisplay, lastVisit, dayDifference)
}

localStorage.setItem('lastVisit', today);

function DateCalculation(today, lastVisit) {
    let dateOfLastVisit = new Date(lastVisit);
    let difference = today.getTime() - dateOfLastVisit.getTime();
    let differenceNumber = Math.floor(difference / (1000 * 60 * 60 * 24));
    return differenceNumber;
}

function ShowOnPage(displayLastDate, lastDate, differenceInDate) {
    let dateOfLastVisit = new Date(lastVisit);
    let stringDateOfLast = dateOfLastVisit.toString();
    visitDaysDisplay.innerHTML = stringDateOfLast;
    dayDifference.innerHTML = DateCalculation(today, lastVisit)
}

