
////////////////////////////////////////////////////////////////////////////

//First Scoping Example

/*
var a='Hello! '
first();

function first()
{
    var b = 'MathiSudhanan. '
    second();

    function second()
    {
        var c= 'Good Morning. :-)'
        console.log(a+b+c);
    }
}
*/


//Example to show the difference between execution stack and scope chain
/*
var a='Hello! '
first();

function first()
{
    var b = 'MathiSudhanan. ';
    second();

    function second()
    {
        var c= 'Good Morning.';
        third();
        
    }
}

function third()
{
    var smiley = ' :-)';
    console.log(a+b+c + d);
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////

//Lecture : The this keyword
/*
console.log(this);

calculateAge(1979);

function calculateAge(year)
{
    console.log(2019-year);
    console.log(this);
}
*/
var mathiSudhanan={
    firstName : 'MathiSudhanan',
    lastName : 'Manickam',
    name : function()
    {
        console.log(this.firstName + ' ' + this.lastName)
        return this.firstName + ' ' + this.lastName;
    },
    dateOfBirth: 1979,
    calculateAge: function()
    {
        this.name();
        console.log(this);
        console.log(2019 - this.dateOfBirth);

       /* function innerMethod()
        {
            console.log(this);
        }
        innerMethod();
        */

        /*
       var ca = this;
        ca.innerProperty = function innerProp()
        {
            console.log(this);
        };
        ca.innerProperty();
        */
    }
};

mathiSudhanan.calculateAge();

var mike = {
    firstName : 'Mike',
    lastName : 'White',
    dateOfBirth : 1955
};

mike.name = mathiSudhanan.name;
mike.calculateAge = mathiSudhanan.calculateAge;

mike.calculateAge();