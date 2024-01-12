// Initialize Variables below

let date = "Monday 2019-03-18";

let time = "10:05:34 AM";

let astronautCount = 7;

let astronautStatus = "ready";

let averageAstronautMassKg = 80.7;

crewMassKg = astronautCount*averageAstronautMassKg

fuelMassKg = 760000;

shuttleMassKg = 74842.31;

totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg

maximumMassLimit = 850000;

fuelTempCelsius = -225;

minimumFuelTemp = -300;

maximumFuelTemp = -150;

fuelLevel = "100%";

weatherStatus = "clear";

preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <=7){
    preparedForLiftOff = true;

} else {
    preparedForLiftOff = false;
}

// add logic below to verify all astronauts are ready
if (astronautStatus = "ready" ){
    preparedForLiftOff = true;

} else {
    preparedForLiftOff = false;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <=maximumMassLimit){
    preparedForLiftOff = true;

} else {
    preparedForLiftOff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if ( fuelTempCelsius >= 300 || fuelTempCelsius <= -150 ){
    preparedForLiftOff = true;

} else {
    preparedForLiftOff = false;
}
// add logic below to verify the fuel level is at 100%
if ( fuelLevel === "100%"){
    preparedForLiftOff = true;

} else {
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear" ){
    preparedForLiftOff = true;

} else {
    preparedForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftOff === true ){
    preparedForLiftOff = true;

} else {
    preparedForLiftOff = false;
}

let banner = ("---------------------------------------");
let headline = ("All systems are a go! Initializing space shuttle launch sequence");
let closingMessage = ("Have a safe trip astronauts!" );
if (preparedForLiftOff = true){
    console.log(headline);
    console.log(banner);
    console.log("Date:"+date);
    console.log("Time"+time);
    console.log("Astronaut Count:"+astronautCount);
    console.log("Crew Mass:"+crewMassKg+ "kg");
    console.log("Fuel Mass:"+fuelMassKg+ "kg");
    console.log("Shuttle Mass:"+shuttleMassKg+ "kg");
    console.log("Total Mass:"+totalMassKg+ "kg");
    console.log("Fuel Temperature"+fuelTempCelsius+ "C");
    console.log("Weather Status:"+weatherStatus);
    console.log(banner);
}
