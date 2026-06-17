// //Javascript code to run on my website
'use strict';
// const dolphinAvgScore=(96 + 108 + 100) / 3
// const koalasAvgScore=(88 + 100 + 110) / 3

// console.log(`Team Dolphins score : ${dolphinAvgScore}`)

// console.log(`Team Koalas score : ${koalasAvgScore}`)

// if(dolphinAvgScore > koalasAvgScore){
//     console.log(`Dolphins team has a higher score than koalas team
// Dolphins is the winner`);
// } else if(dolphinAvgScore === koalasAvgScore){
//     console.log(`Ahh it's a draw`)
// } else {
//     console.log(`Koalas team has more score than Dolphins team
// Koalas is the winner`);
// }

// //Requirement of minimum score=100
// if (dolphinAvgScore >= 100 || koalasAvgScore >= 100){
//     if (dolphinAvgScore > koalasAvgScore){
//         console.log("Dolphin won")
//     } else if (dolphinAvgScore === koalasAvgScore){
//         console.log("Tie")
//     }
//     else {
//         console.log("Koalas won")
//     }
// }
// let billValue=275

// let tip= billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

// console.log(`The total bill is ${billValue} and the tip is ${tip} the total is ${billValue + tip}`);

// const calcaverage = (x,y,z) => {
//     let score = (x + y +z) / 3
//     return score
// }
// let DolphinsAvg = calcaverage(44,23,71)
// let KoalasAvg = calcaverage(65,54,49)

// function checkWinner (avgDolphins,avgKoalas){
//     if (avgDolphins >= avgKoalas * 2 ){
//         console.log(`Dolphins won (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= avgDolphins * 2 ) {
//         console.log(`Koalas won (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log("It's a draw")
//     }
// }
// checkWinner(DolphinsAvg,KoalasAvg)

// DolphinsAvg = calcaverage(85,54,41)
// KoalasAvg = calcaverage(23,34,27)

// checkWinner(DolphinsAvg,KoalasAvg)
// let tip;
// let sumBill;
// function calctip(bill){
//     if (bill >= 50 && bill <= 300){
//         tip = bill * 0.15;
//         return tip;
//     } else {
//         tip = bill * 0.2;
//         return tip;
//     }
// }
// let bills=[125,555,44]
// let tips=[calctip(bills[0]),calctip(bills[1]),calctip(bills[2])]
// console.log(tips)
// let total=[bills[0] + tips[0] , bills[1] + tips[1] , bills[2] + tips[2]]
// console.log(total)

// const jonas={
//     firstName: 'Jonas',
//     lastName: 'Schemdtmann',
//     friends: ['Micheal','John','Sagnika'],
//     job: 'Teacher'
// }

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends,and his best friend is called ${jonas.friends[0]}`)

// const Mark={
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI=(this.mass / this.height) ** 2;
//         return this.BMI;
//     }
// }

// const John={
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.BMI=(this.mass / this.height) ** 2;
//         return this.BMI;
//     }
// }

// Mark.calcBMI()
// John.calcBMI()
// Mark.BMI > John.BMI ? console.log(`${Mark.fullName} : ${Mark.BMI}`) : console.log(`${John.fullName} : ${John.BMI}`)

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calctip(bill) {
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
    return tip + bill;
  } else {
    tip = bill * 0.2;
    return tip + bill;
  }
}
// for(let i=0; i < bills.length ; i++){
//     totals.push(calctip(bills[i]))
//     console.log(totals[i])
// }

function calcAverage(arr) {
  if (i === 0) {
    arr[i];
  }
  arr[i] = arr[i] + arr[i - 1];
  console.log(arr);
}

console.log('hello');
