document.getElementById("calcBMI").addEventListener('click',doCalcBMI);//corrected element id + "addEventListener" (2 errors)

function doCalcBMI(){ //corrected function spelling
    let theWeight = document.getElementById("myPounds").value;
    let theHeight = document.getElementById("myHeight").value;
    let myBMI = (theWeight / (theHeight * theHeight)) * 703; //fixed 2 errors with formula added spemicolon (1-3 errors)
    myBMI = myBMI.toFixed(2); // fixed decimal point
    document.getElementById("bmiResult").innerHTML = myOutput(myBMI) //changed innerHTML
}
function myOutput(getBMI){
    let theString = "Your body mass index (BMI) is: " + getBMI; //added plus
    return theString;
}
