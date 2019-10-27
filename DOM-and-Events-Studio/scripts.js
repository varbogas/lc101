// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
});

function init() {

    let fstatus = document.getElementById("flightStatus");

    let shuttleBkg = document.getElementById("shuttleBackground");

    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let takeoffButton = document.getElementById("takeoff");
    
    takeoffButton.addEventListener("click", function() {
            fstatus.innerHTML = "Shuttle in flight."; // change flight status readout
            shuttleBkg.style.backgroundColor = "blue"; //change background of box
            shuttleHeight.innerHTML = 10000; // add 10,000 miles to height readout
    });

    let landButton = document.getElementById("landing");
    landButton.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        fstatus.innerHTML = "The shuttle has landed."; // change flight status readout
        shuttleBkg.style.backgroundColor = "green"; //change background of box
        shuttleHeight.innerHTML = 0; // bring back to 0 miles
    });

    let abortButton = document.getElementById("missionAbort");

    abortButton.addEventListener("click", function() {
        ifReady = confirm("Confirm that you want to abort the mission.");
        if (ifReady) { // if user chooses "OK"
            fstatus.innerHTML = "Mission aborted."; // change flight status readout
            shuttleBkg.style.backgroundColor = "green"; //change background of box
            shuttleHeight.innerHTML = 0; // keep height readout
        }
    });
}

window.onload = init;