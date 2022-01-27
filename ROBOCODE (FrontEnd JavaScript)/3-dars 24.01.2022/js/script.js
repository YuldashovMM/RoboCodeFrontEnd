// >, <, >= <=, ==, ===, !=, >> Boolean
// console.log(10 > 5) //true
// console.log(10 < 5) //false
// console.log(10 >= 5) //true
// console.log(10 <= 5) //false

// JSda and=&&, or=||
// let x = 2 || 3 || 5 //brinchi true ni oladi
// let y = 2 && 3 && 1 //birinchi false ni oladi
// console.log(x)
// console.log(y)

// let age = +prompt("Yosh?: ")
// if (age >= 10 && age <= 20) {
//     alert("Welcome!")
// } else if (age == 10) {
//     alert("Wait more...")
// } else {
//     alert("Try again!")
// }

//if faqat true qiymat bilan ishlaydi
//else if faqat true qiymat bilan ishlaydi
//else faqar false qiymatida ishga tushadi

//masala 1 son kiritganda nechinchi kvartaldaligini aniqlansin
// let myNum = +prompt("Raqm yozing: ")
// if (myNum >= 1 && myNum <= 3) {
//     alert("1-kvartal")
// } else if (myNum >= 4 && myNum <= 6) {
//     alert("2-kvartal")
// } else if (myNum >= 7 && myNum <= 9) {
//     alert("3-kvartal")
// } else if (myNum >= 10 && myNum <= 12) {
//     alert("4-kvartal")
// } else {
//     alert("Try again and write number")
// }

//Masala 2 sekund kirgizganda minut, soat va kunini chiqarsin!
// let second = +prompt("Sekundni kirgizing: ")
// const sec = 60
// const hour = 3600
// const day = 86400
// console.log(`Minut: ${second/sec}`)
// console.log(`Soat: ${second/hour}`)
// console.log(`Kun: ${second/day}`)

//Masala 3 
// const login = 'user'
// let pass = 123456
// let log = prompt("Loginni yozing")
// let password = prompt("Parolni kiriting")
// if (password == pass) {
//     alert("Xush kelibsiz")
// } else if (login == log) {
//     alert("Loginda xato")
// } else {
//     alert("Parolda xato!")
// }

//masala 4
// let a = +prompt("birinchi sonni kirgizing: ")
// let b = +prompt("ikkinchi sonni kirgizing: ")
// let c = +prompt("uchinchi sonni kirgizing: ")
// if (a < b && b < c) { alert("Togri") } else { alert("Notogri") }

//masala 5
let age = prompt("yoshingiz: ")
let w = prompt("Vazningiz: ")
confirm("Dokumentingiz bormi")
if (age > 16 && age < 24) {} else if (confirm == true && confirm == false) {} else if (w > 50 && w < 90) {} else {
    alert("Qayta urining xato")
}
console.log(age, w, Boolean(confirm))