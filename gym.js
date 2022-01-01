let avgDolpins1 = (44+23+71)/3;

let avgKoalas1 = (65+54+49)/3;


let avgDolpins2 = (85+54+41)/3;

let avgKoalas2 = (23+34+27)/3;



function checkWinner1(avgDolpins1, avgKoalas1 ){

if(avgDolpins1 >= 2* avgKoalas1) {
console.log(`the winner is ${avgDolpins1}  is bigger than ${avgKoalas1}`)
}
else if (avgKoalas1 >= 2* avgDolpins1  ) {
console.log(`the winner is ${avgKoalas1} because its bigger than ${avgDolpins1}`)
}

else {

console.log(`no team wins`)


}

}
checkWinner1(avgDolpins1, avgKoalas1 );


function checkWinner2(avgDolpins2, avgKoalas2){

if(avgDolpins2 >= 2* avgKoalas2) {
console.log(`the winner is ${avgDolpins2} is bigger than  ${avgKoalas2} `)
}
else if (avgKoalas2 >= 2* avgDolpins2) {
console.log(`the winner is ${avgKoalas2} bigger than ${avgDolpins2}`);
}

else {

console.log(`no team wins`)


}

}
checkWinner2(avgDolpins2, avgKoalas2);
