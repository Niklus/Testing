/**
 * Get a greeting
 * @param  {String} name The name of the person to greet
 * @return {String}      The greeting
 */

function sayHi(name = "there") {
  return `Hi ${name}`;
}

export { sayHi };
