const hobbyBudy = ["swimming", "gaming", "gaming"]
const hobbyDeni = ["gaming", "gaming"]
const gabunganHobby = [...hobbyBudy, ...hobbyDeni]


let name1 = "risano"
let name2 = name1
name2 = "akbar"

// console.log(name1);
// console.log(name2);


// let biodata1 = {
//   firstName : 'risano',
//   lastName : 'akbar',
//   age: 27,
//   hobby : 'ngoding'
// }
// let biodata2 = biodata1

// biodata2.lastName = "akbar tanjung"
// console.log(biodata1);
// console.log(biodata2);


// menggukan spread operator

let biodata1 = {
  firstName : 'risano',
  lastName : 'akbar',
  age: 27,
  hobby : 'ngoding'
}
const kuliah = {
  nameKampus: "UPI",
  semester: 6
}
const biodata2 = {
...biodata1,
...kuliah
}
// const biodata2 ={
//  ...biodata1,
//  age: 25,
//  hobby: 'joging'
// }
// biodata2.lastName = "akbar tanjung"

// console.log(biodata1);
console.log(biodata2);
// console.log(hobbyBudy);
// console.log(gabunganHobby);