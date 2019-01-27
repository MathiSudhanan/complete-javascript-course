/* BMI = Mass / Height^2 */
var johnMass = 86;
var markMass = 90;
var johnHeight = 1.3;
var markHeight = 1.5;

var calculateBMI = function (mass,height)
{
    return mass / (height * height);
}

var johnBMI = calculateBMI(johnMass, johnHeight);
var markBMI = calculateBMI(markMass, markHeight);
console.log("John's BMI :", johnBMI);
console.log("Mark's BMI :", markBMI);
console.log("Is marks bmi greater than john's? :", markBMI > johnBMI);