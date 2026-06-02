/**** HIGHER-ORDER FUNCTIONS ****/

/** EXAMPLE 1 - THE HOF SYSTEM MANAGER **/

// DEMO: Define a HOF that accepts a target name and a function that can describe
// specifically how that target is engaged.

function engageTacticalComputer(targetName, engageTarget) {
    console.log(`[RADAR TRACKING]: Locking Onto ${targetName}]`);
    console.log(`[SYSTEM ENGAGED]: ${engageTarget(targetName)}`);
}

// DEMO: Pass an in-place contractor to SCAN the target

engageTacticalComputer("Unidentified Frigate", target => `Scan of ${target} complete: Hull composition is 80% carbon.`);

// DEMO: Pass a completely different contractor to WEAPON LOCK the target

engageTacticalComputer("Scout Drone-04", target => `Target Locked. Railgun Velocity Calibrated to Engage ${target}.` );

/** EXAMPLE 2 - RETURNING A FUNCTION FROM A HOF **/

// DEMO: Define an HOF that can manufacture and return brand-new specialized functions

function createThrusterBurnCalculator(burnMultiplier) {
    return baseFuel => baseFuel * burnMultiplier;
}

// DEMO: Use the HOF to manufacture two distinct calculation engines

const getStandardBurn = createThrusterBurnCalculator(1.5);
const getEmergencyEscapeBurn = createThrusterBurnCalculator(4.0);

// DEMO: Call each manufactored function and log a report:

console.log(`Standard Fuel Required: ${getStandardBurn(100)}t`);
console.log(`Emergency Fuel Required: ${getEmergencyEscapeBurn(100)}t`);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
