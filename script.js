// 1. Mengubah Object Javascript manjadi JSON
// const staff = {
//     nama: "A. Shintya Lestari",
//     umur: 25,
//     jabatan: "programmer freelance"
// }

// console.log(JSON.stringify(staff));

//  2. Mengubah JSON menjadi Object Javascript 
// 2.1 Menggunakan Vanila Javascript/Javascript Murni
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4 && xhr.status == 200) {
//         let staff = JSON.parse(this.responseText);
//         console.log(staff);
//     }
// }

// xhr.open('GET', 'example.json', true);
// xhr.send();

// 2.2 Menggunakan JQuery
$.getJSON('example.json', function(data) {
    console.log(data);
});