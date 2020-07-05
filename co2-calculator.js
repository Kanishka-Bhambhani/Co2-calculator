
const {argv} = require('yargs');

function getCo2EmissionRates(){
    
    return new Map([
        ['small-diesel-car',142],
        ['small-petrol-car',154],
        ['small-plugin-hybrid-car',73],
        ['small-electric-car',50],

        ['medium-diesel-car',171],
        ['medium-petrol-car',192],
        ['medium-plugin-hybrid-car',110],
        ['medium-electric-car',58],

        ['large-diesel-car',209],
        ['large-petrol-car',282],
        ['large-plugin-hybrid-car',126],
        ['large-electric-car',73],

        ['bus',27],
        ['train',6]
    ]);

}

function getDistanceInKiloMeter(distance,unitOfDistance) {
    if( unitOfDistance != undefined && unitOfDistance == 'm' )
        return distance / 1000;
    else
        return distance;
}

function calculateCo2Emission(transportationMethod,distance,unitOfDistance) {
    let co2EmissionRates = getCo2EmissionRates();
    let validDistance = validateDistance(distance);
    let validUnitOfDistance = validateUnitOfDistance(unitOfDistance);
    if(co2EmissionRates.get(transportationMethod) != undefined && validDistance === true && validUnitOfDistance === true)
    	return co2EmissionRates.get(transportationMethod) * getDistanceInKiloMeter(distance,unitOfDistance);
    else 
	return undefined;
}

function printCo2Emission(emission,unitOfEmission) {
    let validUnitOfEmission = validateOutput(unitOfEmission)
    if(emission != undefined && validUnitOfEmission === true)
    {
    if( unitOfEmission !=undefined ) {
        if ( unitOfEmission == 'kg' )
            emission = emission / 1000;
        else
            unitOfEmission = 'g';
    }else {
        unitOfEmission = emission > 1000 ? 'kg' : 'g';
        emission = emission > 1000 ? emission / 1000 : emission;
    }

    console.log(`Your trip caused ${emission}${unitOfEmission} of CO2-equivalent.`);
    return emission+unitOfEmission;
    }
    else
    {
	console.log("Data entered is incorrect");
        return "Incorrect Data"
    }
}

let co2Emission =  calculateCo2Emission( argv.transportationMethod , argv.distance  , argv.unitOfDistance);
printCo2Emission(  co2Emission , argv.output );

function validateDistance(distance)
{

  if (isNaN(distance) || distance < 0 || distance === 'undefined')  {
    return false;
  }
  return true;
  
}

function validateUnitOfDistance(unitOfDistance)
{
  if(unitOfDistance != undefined)
 {
  if (unitOfDistance == 'km' || unitOfDistance == 'm')  {
    return true;
  }
  return false;
 }
 else
 {
  return true;
 }
}

function validateOutput(output)
{
  if(output != undefined)
 {
  if (output == 'kg' || output == 'g')  {
    return true;
  }
  return false;
 }
 else
 {
   return true;
 }
}

module.exports.calculateCo2Emission = calculateCo2Emission;
module.exports.printCo2Emission = printCo2Emission;
module.exports.validateDistance = validateDistance;
module.exports.validateUnitOfDistance = validateUnitOfDistance;
module.exports.validateOutput = validateOutput;
module.exports.printCo2Emission = printCo2Emission;
