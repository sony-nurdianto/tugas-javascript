// var hasil = 10 
// if (true)  {
//     var hasil = 5
// } console.log(hasil);

// let hasil2 = 10 
// if (true) {
//     let hasil =5
// } console.log (hasil2)

// var foo = 5 
// var foo = 10 
// console.log(foo)

// let foo1 = 10
// // bakal eror kalo "let" ada 2
// // let foo1 = 15
// console.log (foo1)

// console.log('berapa banyak telur mu')

const telorInput = window.prompt('berapa banyak telormu ?')
const telor = Number (telorInput)


if (telor >= 100){
    window.alert ('telormu sangat banyak (sangat baik)');
} else if (telor > 89 ){
    window.alert ('telormu banyak (baik)');
} else if (telor > 75 ){
    window.alert ('telormu lumayan (cukup)');
} else if (telor > 60 ){
    window.alert ('telormu kurang (kurang)');
} else {
    window.alert ('kamu tidak punya cukup telur untuk dimasak');
}


// console.log (telor)