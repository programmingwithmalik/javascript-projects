//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.


const input = require('readline-sync');
let fuelLevel = 0, numAstronauts = 0, altitude = 0;

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
   fuelLevel = input.question("Enter the starting fuel level: ");
}


  
while (numAstronauts>=7){
  numAstronauts=input.question("Enter the numebr of Astronauts:")
}
  

while (fuelLevel-100*numAstronauts >= 0) {
altitude += 50;
fuelLevel -= 100*numAstronauts;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”


If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
let output = `The shuttle gained an altitude of ${altitude} km.`;

if (altitude >= 2000) {
output += " Orbit achieved!";
}