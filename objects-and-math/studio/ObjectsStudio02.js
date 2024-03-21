// Code your orbitCircumference function here:
function calculateCircumference(radius) {
    const EARTH_RADIUS = 6371; // Earth's average radius in km
    let totalRadius = EARTH_RADIUS + radius;
    return Math.round(2 * Math.PI * totalRadius);
}



// Code your missionDuration function here:
function missionDuration(numberOfOrbits, radius = 2000, speed = 28000) {
    let orbitCircumference = calculateCircumference(radius);
    let totalDistance = orbitCircumference * numberOfOrbits;
    let timeHours = totalDistance / speed;
    return timeHours.toFixed(2);
}


// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idArray) {
    let randomIndex = Math.floor(Math.random() * idArray.length);
    return idArray[randomIndex];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius, speed) {
    let spacewalkDuration = missionDuration(3, radius, speed); // Duration for 3 orbits
    let oxygenConsumed = candidate.o2Used(spacewalkDuration);
    oxygenConsumed = parseFloat(oxygenConsumed.toFixed(3)); // Round to 3 decimal places

    return `${candidate.name} will perform the spacewalk, which will last ${spacewalkDuration} hours and require ${oxygenConsumed} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 