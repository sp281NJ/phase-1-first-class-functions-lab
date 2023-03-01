// Code your solution in this file!

const  Drivers = ["Antonia", "Nuru", "Amari", "Mo"];  

// function 1
const returnFirstTwoDrivers = function (a){
return a.slice(0,a.length - 2);
}
returnFirstTwoDrivers(Drivers);

// function 2
const returnLastTwoDrivers = function (b){
    return b.slice(-2);
    }
returnLastTwoDrivers(Drivers);

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

//calculate function
const fareQuintupler = (cfm)=>{
    let var1 = (cfm * 5);
        console.log( var1);
        return var1;
}


// function 3
function createFareMultiplier(cf){
   
   
   const fareMultiplier = function (fm){
    let var2 = (fm * cf);
    //console.log( var2);
    return var2;
}
           return fareMultiplier;       
    }
createFareMultiplier(5);


//function 4
const fareDoubler = createFareMultiplier(2);

//function 5.
const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drvpara,firstdr){

return firstdr(drvpara);

}
selectDifferentDrivers(Drivers,returnFirstTwoDrivers);
selectDifferentDrivers(Drivers,returnLastTwoDrivers);
