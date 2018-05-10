// TO GET PEOPLE BORN BETWEEN 20 TO 25. SO WE USE FILTER STATEMENT 

// METHOD1
// const fifteen = data.filter(function(datas){
    //     if(datas.age >= 20 && datas.age <= 25 ){
        //         return true;
//     }
// });

// METHOD2
// const fifteen = data.filter( function(datas){
    //     return (datas.age >=20 && datas.age <= 25);
    // });
    
// METHOD3
const fifteen = data.filter( datas => (datas.age >=20 && datas.age <= 25));
// console.table(fifteen);

const fullname = data.map(datas => datas.fname +" "+ datas.lname);
// console.log(fullname);

//SORT THE ARRAY OF OBJECTS ACCORDING TO THE DATA PEOPLES AGE
// const ordered = data.sort( function(a, b) {
//     if( a.age > b.age) return 1;
//     else return -1;
// });
// console.table(ordered);

// To fetch all and output data or make a string for the output
// var dataage = "";
// ordered.forEach(dataage =>{
//     this.dataage =+ dataage.age;
//     console.log(this.dataage + " ")
// });

// const totalYears = data.reduce((total, datas)=>{
//     return total += datas.age;
// }, 0);
// console.log(totalYears);


const alpha = people.sort(function(lastOne, nextOne){
    console.log(lastOne);
});

console.log(alpha);
// var str = people.join("\n");
// console.log(str);

