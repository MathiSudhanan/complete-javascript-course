 
var mathi={
    fullName : "MathiSudhanan Manickam",
    mass : 79.5,
    height :1.7,
    calculateBMI : function()
    {
        this.BMI = this.mass / (this.height * this.height);
    }
};
var divya={
    fullName :"Divya MathiSudhanan",
    mass : 73,
    height: 1.3,
    calculateBMI : function()
    {
        this.BMI = this.mass / (this.height * this.height);
    }
};

mathi.calculateBMI();
divya.calculateBMI();
console.log(mathi.BMI);
function logInConsoles()
{
    if(mathi.BMI > divya.BMI)
    {
        console.log('The person who has heighest BMI is ' + mathi.fullName + ' and BMI : ' + mathi.BMI);
    }
    else if(divya.BMI > mathi.BMI)
    {
        console.log('The person who has heighest BMI is ' + divya.fullName + ' and BMI : ' + divya.BMI);
    }
    else{
        console.log('Both mathi and Divya has the same BMI : '+ divya.BMI);
    }
};

logInConsoles();