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
    printDataKaryawan : function (id1,id2,id3,id4,id5) {
        

        const printfNama =  (Data.employees[id1].firstName)
        const printlNama =  (Data.employees[id1].lastName)
        const jobsDIT =  (Data.jobs[1].department)
        const jobsTIT =  (Data.jobs[1].title[id3])
        const jobsD =  (Data.jobs[id2].department)
        const jobsT =  (Data.jobs[id2].title)
        const detailsA =  (Data.details[0].age[id4])
        const detailsE = (Data.details[1].experience[id5])

        if (id2 === 1 ){
            console.log (`nama : ${printfNama} ${printlNama} dapartment : ${jobsDIT} title : ${jobsTIT} age : ${detailsA} experience : ${detailsE}`)
            }else if ( id2 > 5 ) {     
                console.log (`id 2 untuk dapartment , kita hanya punya 7 dapartment`)
            }else  {
                console.log (`nama : ${printfNama} ${printlNama} dapartment : ${jobsD} title : ${jobsT} age : ${detailsA} experience : ${detailsE}`)
        }
        
        
        // if (id2 === 1 && id3 !== 0 ) {
        //     console.log (`nama : ${printfNama} ${printlNama} jobs : ${jobsDIT} title : ${jobsTIT} umur : ${detailsA} pengalaman : ${detailsE}`)
        // }else if  (id2 !== 1 && id3 === 0) {
        //     console.log (`nama : ${printfNama} ${printlNama} jobs : ${jobsD} title : ${jobsT} umur : ${detailsA} pengalaman: ${detailsE}`)
        // }else {
        //     console.log (`nama : ${printfNama} ${printlNama} jobs : ${jobsD} title : ${jobsT} umur : ${detailsA} pengalaman: ${detailsE}`)
        // }
    }


    
}
console.log (`keterangan memasukan Data.printDataKaryawan 
        id1 , adalah inputan paling awal di Data.printDataKaryawan maksimal angka 10
        id2, adalah inputan kedua setelah id1 di Data.printDataKaryawan maksimal angka 5
        id3, adalah inputan ketiga setelah id2 di Data.printDataKaryawan maksimal angka 1 dengan syarat id2 benilai 1 
        id4, adalah inputan keempat setelah id3 di Data.printDataKaryawan maksimal angka adalah 6
        id5, adalah inputan kelima setelah id4 di Data.printDataKaryawan maksimal angka adalah 3
    `)

