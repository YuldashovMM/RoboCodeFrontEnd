//number, string, null, undefined
//Infinity, BigInt, NaN

// number
// console.log(1 / 0) //infinity
// let bInt = 1325456845213184; BigInt
// console.log("str" * 20) //NaN >> Not a Number
// console.log("salom" + 30) //NaN
// console.log(30 + "30") //string
// let x = 10
//   //let y = 10.5
//   //let z = -33
// console.log(typeof x) //number


// string
// let s = 'javascript'
// let a = "js"
// console.log("'salom'")
// console.log(typeof s)
// let name = prompt("Ismingizni kiriting:")
// let age = +prompt("yoshizni kiriting:")
// let word = `Salom , meni ismim ${name}, yoshim ${age} da`
// console.log(word)



//boolean(x)
//true, false
// let x = true //1
// let y = false //0
// console.log(x + false)



//null
// let x = null
// console.log(typeof x)

//undefined

// let x
// console.log(x)



// let control = confirm("Tanlen")
// console.log(typeof control) //true or false

// let p = prompt("Son kirit:")
// p = parseInt(p) butun songa aylantiradi
// p = Number(p) number ga aylantiradi
// p = parseFloat(p) qoldiqli songa aylantirish
// console.log(p ** 2)


// let x = "1024"
// x = parseInt(x) //number
// console.log(x * 2) //2048

// z = String(x)
// console.log(z * 2)



// let c = Boolean(x)
// console.log(c) true





//Arifmetika
// +qoshish
// -    ayrish 
// *   kopaytirish
// /    bolish
// % qoldiq olish 
// ** darajaga kotarish

// console.log(5 + 5)
// console.log(5 - 2)
// console.log(5 * 2)
// console.log(5 / 2)
// console.log(5 % 2)
// console.log(5 ** 2)


// let w = 3
//     // w = w + 3
// w += 3 //6
// w -= 3 //3
// w *= 3 //9
// w /= 3 //3
// console.log(w)

// console.log(100 + 3 * (3 / 10 - 5))
//№1
// let a = +prompt("perimetr kiriting:")
// console.log(`Kv perimetr = ${4*a}`) //p=4*a
// №2
// let b = +prompt("Yuzani kirit: ")
// console.log(`yuza = ${b**2}`)
// №3
// let a = +prompt("tomonni kirgizing: ")
// let b = +prompt("tomonni kirgizing: ")
// console.log(`S yuza = ${a*b}`, `Perimetr = ${2*(a+b)}`)
// №4
// let d = +prompt("Diametr kirgizing:")
// let pi = 3.14
// console.log(`Diametr: ${pi*d}`)
// №5
// let k = +prompt("Kubning tomonini kirgizing: ")
// console.log(`Uning hajmi: ${k**3}`, `To'la sirti: ${6*k**2}`)

//№6
// let a = +prompt("Paralelepipedning tomonini kirgizing: ")
// let b = +prompt("Paralelepipedning tomonini kirgizing: ")
// let c = +prompt("Paralelepipedning tomonini kirgizing: ")
// console.log(`Paralelepipedning hajmi: ${a*b*c}`, `Paralelepipedning sirti: ${2*(a*b+b*c+a*c)}`)

//№7
// let R = +prompt("Raqam kirgizing: ")
// let pi = 3.14
// console.log(`Doiraning uzunligi: L=${2*pi*R}`, `Doiraning yuzasi: S=${pi*R**2}`)

//№8
// let a = +prompt("Birinchi sonni kirgizing: ")
// let b = +prompt("Ikkinchi sonni kirgizing: ")
// console.log(`O'rta arifmetigi: ${(a+b)/2}`)

//№8
// let a = +prompt("1-chi son: ")
// let b = +prompt("2-chi son: ")
// console.log(`${a*b}`)

//№9
// let a = +prompt('a ni kiriting')
// let b = +prompt('b ni kiriting')
// console.log((a * b) ** 0.5)

//№10
// let a = +prompt('a ni kiriting')
// let b = +prompt('b ni kiriting')
// console.log(a !== 0)
// console.log(b !== 0)
// A = a + b
// K = a * b
// S1 = a**2
// S2 = b**2
//  console.log(a va b sonlarining yig'indisi: ${A})
//  console.log(a va b sonlarining ko'paytmasi: ${K})
//  console.log(a sonining kvadrati: ${S1})
//  console.log(b sonining kvadrati: ${S2})

//№11
// let a = +prompt('a ni kiriting')
// let b = +prompt('b ni kiriting')
// A = a + b
// K = a * b
// Math.abs(b)
// Math.abs(a)
// console.log(a va b sonlarining yig'indisi: ${A})
// console.log(a va b sonlarining ko'paytmasi: ${K})


//№12
// let a = +prompt('1-katetni kiriting:')
// let b = +prompt('2-katetni kiriting:')
// c = (a**2+b**2)**0.5
// P = a + b + c
// console.log(Uchburchak gipotenuzasi: ${c})
// console.log(Uchburchak perimetri: ${P})

//№13
// let R1 = +prompt('Birinchi radiusni kiriting (R1>R2);')
// let R2 = +prompt('ikkinchi radiusni kiriting (R1>R2);')
// pi = 3.14
// S1 = (R1**2)*pi
// S2 = (R2**2)*pi
// S3 = S1 - S2
// console.log(natija: ${S3})

//№14
// let L = +prompt('uznlikni kiritirting')
// pi = 3.14
// R = L / (2 * pi)
// S = pi * (R**2)
// S = pi * ((L / (2 * pi))**2)
// console.log(Radiusi: ${R})
// console.log(Yuzi: ${S})

//№15
// let  S = +prompt('Yuzani kiriting')
// pi = 3.14
// R = (S / pi)**0.5
// D = 2 * R
// console.log(Radiusi: ${R})
// console.log(Diametri: ${D})

//№16
// let a = +prompt('a ni kiriting')
// let b = +prompt('b ni kiriting')
// x = a - b
// Math.abs( x)
// console .log(x)

//№17
// let X1 = +prompt('1-sonni kiriting')
// let X2 = +prompt('1-sonni kiriting') 
// x = X1 - X2
//  Math.abs(x)
//  console.log(sonlar orasidagi masofa: ${x})

//№18
// let AB = +prompt('AB kesmani kiriting')
// let BC = +prompt('BC kesmani kiriting')
// a = AB + BC
// console .log(`AB kesma uzunligi :${AB}
// BC kesma uzunligi :${BC}
// Kesmalar uzzunliklari yig'indisi:${a}`)