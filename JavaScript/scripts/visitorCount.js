const visitsDisplay = document.querySelector(".visits");

// gettin the stored value from localStorage. 
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// check if this is the first visit and display the number of visits. 
if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = "This is your first visit. ";
}

// Increase the number of visits. 
numVisits++;

// Store the new and updated number of visits. 
localStorage.setItem("visits-ls", numVisits);
