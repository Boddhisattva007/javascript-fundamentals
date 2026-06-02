/**** ARROW FUNCTION SYNTAX ****/

/** EXAMPLE 1 - THE SYNTAX MIGRATION BRIDGE **/

// STAGE 1: Traditional Named Function Declaration
function traditionalCalculateFuel(mass) {
	return mass * 11.2;
}

// STAGE 2: Block-Body Arrow Function (Explicit Return)

// DEMO: Rewrite the traditional function with transitional arrow syntax;

const blockArrowCalculateFuel = (mass) => {
    return mass * 11.2;
}

// STAGE 3: Concise-Body Arrow Function (Implicit Return)

// DEMO: Rewrite the function again with concise array syntax

const conciseCalculateFuel = mass => mass * 11.2;

// DEMO: Test the concise arrow function

console.log(`Implicit Return Fuel Calculation: ${conciseCalculateFuel(100)}t`);

/** EXAMPLE 2 - THE HOISTING PARADOX **/

// 1. DEMO: On the next line, call the traditional function defined below

console.log(`Traditional Probe Reading: ${readTraditionalSensor()}`);

function readTraditionalSensor() {
	return "Telemetry Active";
}

// 2. DEMO: On the next line, call the arrow function defined below

// console.log(`Arrow Probe Reading: ${readArrowSensor()}`); // cannot run a const before it's been defined.

const readArrowSensor = () => "Telemetry Active";

// DEMO: Call the arrow function again on the next line.

console.log(`Arrow Probe Reading: ${readArrowSensor()}`);

// DEMO: Make a git commit!

/* 
    Follow up with additional exercises after demo for hands-on practice 
    with problem-solving and coding!
*/
