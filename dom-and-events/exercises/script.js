function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
   paragraph.innerHTML = 'Houston! We have liftoff!';
});

    button.addEventListener('mouseover', function (event) {

    })

    missionAbort.addEventListener("mouseover", function( event ) {
   event.target.style.backgroundColor = "red";
});

    missionAbort.addEventListener("mouseout", function( event ) {
   event.target.style.backgroundColor = "";
});

    button.addEventListener('click', event => {
   paragraph.innerHTML = 'Houston! We have liftoff!';
});
}

window.addEventListener("load", init);
