// const Data = {
//     "employees": [
//         {"firstName":"john" , "lastName":"Doe"},
//         {"firstNamae":"Anna" , "lasName":"Smith"},
//         {"firstName" : "peter" , "lastName":"jones"},
//         {"firstName" : "Doni" , "lastName":"Wong"},
//         {"firstName" : "Slamet" , "lastName":"Jordan"},
//         {"firstName" : "Carlo" , "lastName":"Wee"},
//         {"firstName" : "Philips" , "lastName":"Morris"},
//         {"firstName" : "Angga" , "lastName":"Dwi"},
//         {"firstName" : "Vicky" , "lastName":"sasongko"},
//         {"firstName" : "Nadya" , "lastName":"Lembayung"},
//     ],
//     "jobs" : [
//         {"department":"Qa" , "title":"Qa"},
//         {"department":"IT" , "title":['IT Support','software engineering','UI/UX','Devops','tester']},
//         {"department":"Human resource Development" , "title":"Spv"},
//         {"department":"Finance and Acounting" , "title":"Finance"},
//         {"department":"Marketing dan customer service" , "title":"marketing"},
//         {"department":"maintenance and facility" , "title":"maintenance"},
//     ],
//     "details" : [
//         {"age":[22,23,24,29,30,32]},
//         {"experience" : ['2 tahun','3 tahun','4 tahun',]},
//     ],

//}
const Data = {
    employees: [
        {firstName:"john" , lastName:"Doe"},
        {firstName:"Anna" , lastName:"Smith"},
        {firstName : "peter" , lastName:"jones"},
        {firstName : "Doni" , lastName:"Wong"},
        {firstName : "Slamet" , lastName:"Jordan"},
        {firstName : "Carlo" , lastName:"Wee"},
        {firstName : "Philips" , lastName:"Morris"},
        {firstName : "Angga" , lastName:"Dwi"},
        {firstName : "Vicky" , lastName:"sasongko"},
        {firstName : "Nadya" , lastName:"Lembayung"},
    ],
    jobs : [
        {department:"Qa" , title:"Qa"},
        {department:"IT" , title:['IT Support','software engineering','UI/UX','Devops','tester']},
        {department:"Human resource Development" , title:"Spv"},
        {department:"Finance and Acounting" , title:"Finance"},
        {department:"Marketing dan customer service" , title:"marketing"},
        {department:"maintenance and facility" , title:"maintenance"},
    ],
    details : [
        {age:[22,23,24,29,30,32]},
        {experience : ['2 tahun','3 tahun','4 tahun',]},
    ],
    printDataKaryawan : function (id1,id2,id3,id4,id) {
        if (id3 > 1 ) {
            console.log ('jika id2 bukan angka 1 disaat id3 bukan 0 maka , data yang anda terima salah silahkan masukan kembali data ')
        }else if (id2 > 7) {
            console.log ('id2  untuk seksi dapartment , dapartment kita hanya 6 jika anda memasukan id2 lebih dari 6 ,data yang anda terima salah silahkan masukan kembali data ')
        }else if (id4 > 8 ) {
            console.log ('id 4 cuman punya 7 opsi,data yang anda terima salah silahkan masukan kembali data ')
        }else if (id > 4) {
            console.log ('id5 hanya punya 3 opsi,data yang anda terima salah silahkan masukan kembali data ')
        }else {
            console.log('ini adalah data karyawan kita')
        }
        const printfNama = JSON.stringify (Data.employees[id1].firstName)
        const printlNama = JSON.stringify (Data.employees[id1].lastName)
        const jobsD = JSON.stringify (Data.jobs[id2].department)
        const jobsT = JSON.stringify (Data.jobs[1].title[id3])
        const detailsA =  (Data.details[0].age[id4])
        const detailsE = (Data.details[1].experience[id])
        

        
        
       console.log (`nama : ${printfNama} ${printlNama} jobs: ${jobsD} ${jobsT} details : umur ${detailsA} pengalaman ${detailsE}`)
    }
    
}
console.log (`keterangan memasukan Data.printDataKaryawan 
        id1 , adalah inputan paling awal di Data.printDataKaryawan maksimal angka 10
        id2, adalah inputan kedua setelah id1 di Data.printDataKaryawan maksimal angka 6
        id3, adalah inputan ketiga setelah id2 di Data.printDataKaryawan maksimal angka 1 dengan syarat id2 benilai 1 
        id4, adalah inputan keempat setelah id3 di Data.printDataKaryawan maksimal angka adalah 7
        id5, adalah inputan kelima setelah id4 di Data.printDataKaryawan maksimal angka adalah 3
    `)

