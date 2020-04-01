// "use strict"
// const info = "internet postif";
// console.log ('berisi informasi untuk developer ${info}');
// console.log ("berisi informasi untuk developer ${info}");
// console.log (`berisi informasi ${info}` );

// const name = window.prompt("siapa nama anda","oriq");

// console.log (`nama saya adalah ${name}`);

// // konfirmasi


// const namanyaBener = window.confirm (`bener nih kamu ${name} `)
// debugger;
// if (namanyaBener) {
//     console.log ('bagus');
// } else {
//     console.log ("jelek");
// }

let bigCompany =['google','facebook','apple'];

let human = {
    name:'bean',
    height:'200',
    weight:50,
    live: 'Hong kong',
    jobs:['google','facebook',{
        name :'apple',
        location: 'US'
    }],

    pet : {
        name : 'blacky',
        height : 20,
        weight: 29,
        live: 'brazil',
    },
    printNameAndDogName : function () {
        const myName = this.name
        const dogName = this.pet
        debugger;
        console.log(`my name ${myName} my dog name ${dogName}`)
    },
    printjob: (urutan) => {
        const job = human.jobs[urutan]
        console.log(`my job is ${job}`)
    }
}

console.log(human.name)
console.log(human.jobs[1])
console.log(human.pet.name)
console.log(bigCompany[0])

let petName = human.pet.name 

let building ={
    name: 'batam pos',
    floor: 21,
    printNameAndFloor : function(info) {
        const name = this.name;
        const floor = this.floor;
        console.log (`${name} buildings have ${floor} floors and ${info}`)
    },
    printOther : (otherInfo) => {
        console.log(otherInfo)
    }
}
// JSON.stringify membuat JSON/javascript object notation

let jsonString = JSON.stringify(building)
console.log(jsonString)
//hasil => "{"name":"batam pos" , "floor":21}"
// yang fiambil adalah value string , integer , boolean dan float
// dan akan meremove yg memiliki value function & undifined

// JSON.parse membuat JSON berbentuk string kembali ke asalnya / ke object 
let jsonParse = JSON.parse (jsonString)
console.log (jsonParse)
// hasilnya
/*
    {
        "name": "batam pos",
        "floor": 21
    }
*/

