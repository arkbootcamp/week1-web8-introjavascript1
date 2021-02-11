const firstName = "muhammad"
const lastName = "risano"
const age = 25
const paragraf = "perkenankan nama depan saya "+ firstName + " dan \n"
+ "nama belakang saya "+ lastName +" dan 2 tahun kemudian umur saya "+ (age+2) +"\n"
"begitulah kisah saya"

const paragraf2 = `perkenalkan nama saya ${firstName} dan 
nama belakang saya adalah ${lastName} dan 2 tahun kemudian umur saya ${age+2}
dan ${age  > 23 ? 'saya sudah menikah': 'saya belum menikah'}`
console.log(paragraf);
console.log(paragraf2);