/////////////////////
//Hoisting

//functions
CalulateAge(1979);

function CalulateAge(year)
{
    console.log(2019-year);
    return 2019-year;
};

// retirement(1970);
var retirement = function getRetirement(year)
{
    console.log(65 - CalulateAge(year));
}

retirement(1979);


//variables
console.log(age);

var age = 40;

console.log(age);

function foo()
{
    console.log(age);
    var age = 73;
    console.log(age);
}

foo();

console.log(age);



///////////////////////////////////////

//Lecture : Scoping

//First Scoping Example

/*First example

var a= 'Hello!';
first();

*/