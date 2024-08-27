// Task D:
//Shunday class tuzing nomi Shop va uni constructoriga 3 hil mahsulot pass bolsin,
// hamda classning 3 ta methodi bolsin, biri qoldiq, biri sotish va biri qabul. Har bir method
// ishga tushgan vaqt ham log qilinsin.
// Masalan: const shop = new Shop(4,5,2) shop.qoldiq() return hozir 20:40 4ta non, 5ta lagmon
// va 2ta cola mavjud! shop.sotish("non", 3) & shop.qabul("cola", 4) & shop.qoldiq() return hozir 20:50 ta 1ta non va 5 ta lagmon va 6ta cola mavjud

class Shop {
  constructor(lagmon, non, cola) {
    this.lagmon = lagmon;
    this.non = non;
    this.cola = cola;
  }

  sotish(items, amount) {
    // lagmon
    if (items === "lagmon") {
      if (this.lagmon >= amount) {
        this.lagmon -= amount;
      }
    }

    // non
    if (items === "non") {
      if (this.non >= amount) {
        this.non -= amount;
      }
    }

    // cola

    if (items === "cola") {
      if (this.cola >= amount) {
        this.cola -= amount;
      }
    }

    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor holos!`;
  }

  qabul(items, amount) {
    // lagmon
    if (items === "lagmon") {
      this.lagmon += amount;
    }

    // non
    if (items === "non") {
      this.non += amount;
    }

    // cola
    if (items === "cola") {
      this.cola += amount;
    }
    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola bor holos!`;
  }

  qoldiq() {
    return `hozir ${hour}:${minute} da ${this.lagmon} ta lagmon, ${this.non} ta non va ${this.cola} ta cola qolgan!`;
  }
}

const trade = new Shop(6, 2, 4);
console.log(trade.sotish("cola", 2));
console.log(trade.qabul("non", 2));













// Task C Starts:

// Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
// MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;

const checkContent = (a, b) => {
  const arr = b.split("");
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    if (a.length === arr.length && a.includes(arr[i])) {
      count++;
    }
    new_arr.push(count);
  }
  if (new_arr.includes(0)) {
    return false;
  } else {
    return true;
  }
};

const result = checkContent("mitgroup", "groupmti");
console.log(result);









// B-TASK STARTS
// function countDigits(string) {
//   let count = 0;
//   for (let n of string) {
//     if(n >= "0" && n <= "9"){
//       count++; 
//     }
//   }
//   return count;
// }
 
// const natija = countDigits("fsidfi324fasdfa3ini3n");
// console.log(natija);
// // B-TASK ENDS

// --------------------------------------------------------


// A-TASK STARTS

// function count_letter(element, string) {
//     let count = 0; // a variable to store the count of occurences
//     for (let i = 0; i < string.length; i++) {
//       // condition to check if the character at the current position is equal to specific letter required!
//       if (string[i] === element) {
//         count++; // if true increment by 1
//       }
//     }
//     return count ? count : "there is no such alphabet";
//   };
//   console.log(count_letter("e", "engineer")); 
//   console.log(count_letter("t", "engineer")); 
//   console.log(count_letter("b", "bubble-bus"));
//   // charAt() = a method that returns the character at a specified index (position) in a string.
  
  
  // A-TASK ENDS





// // Call Back Functions ni ko'rib chiqamiz
// console.log("Jack Ma Maslahatlari");

// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri bosjliq tanlang va ko'proq xato qiling", // 20-30
//     "uzingizga ushlashingizni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", //
//     "endi dam oling, foydasi yo'q endi", // 60
// ];
// function maslahatBering (a, callback) {
//     if(typeof a !== 'number') callback("Please insert a number",null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//             callback(null, list[5]);
//         }, 5000);
//     }
// }

// console.log("Passed here 0");
// maslahatBering(65, (err, data) => {
//     if (err) console.log("Error:", err);
//     else {
//         console.log("Javob:",data);
//     }
// });
// console.log("Passed here 1");


/*
                                                        Asychronous Functions
*/

// console.log("Jack Ma Maslahatlari");

// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri bosjliq tanlang va ko'proq xato qiling", // 20-30
//     "uzingizga ushlashingizni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", //
//     "endi dam oling, foydasi yo'q endi", // 60
// ];

// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert a number", null);
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return(null, list[1]);
//     else if(a > 30 && a <= 40) return(null, list[2]);
//     else if(a > 40 && a <= 50) return(null, list[3]);
//     else if(a > 50 && a <= 60) return(null, list[4]);
//     else {
//         // setTimeout(function () {
//         //     callback(null, list[5]);
//         // }, 5000);
//         return list[5];
//     }
// }
// // then/catch
// console.log("passed here 0");
// maslahatBering(51).then((data) => {
//     console.log("Javob: ", data);
// }).catch((err) => {
//     console.log("Error:", err);
// });
// console.log("passed here 1");

/*                                  Promise functions*/

// console.log("Jack Ma Maslahatlari");

// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri bosjliq tanlang va ko'proq xato qiling", // 20-30
//     "uzingizga ushlashingizni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", //
//     "endi dam oling, foydasi yo'q endi", // 60
// ];

// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert a number", null);
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return(null, list[1]);
//     else if(a > 30 && a <= 40) return(null, list[2]);
//     else if(a > 40 && a <= 50) return(null, list[3]);
//     else if(a > 50 && a <= 60) return(null, list[4]);
//     else {
//             // setTimeout(function () {
//             //     callback(null, list[5]);
//             // }, 5000);
//             // return list[5];
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });
//     }
// };

// // call via asynch
// async function run() {
//     let javob = await maslahatBering(34);
//     console.log(javob);
//     javob = await maslahatBering(62);
//     console.log(javob);
//     javob = await maslahatBering(23);
//     console.log(javob);
// }
// run();


////////////////////////////////////////////////////////////////////////////////////////////  A-TASK   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// let count_soz = 0;
// function topHarf(soz, harf) {
//     // let count_soz = 0;
//     for (let position = 0;position < harf.length; position++) {
//         if (harf.charAt(position) == soz) {
//             count_soz += 1;
//         }
//     }
//     return count_soz;
// }

// // Variant 1
// gucci = topHarf("c", "guccci");
// console.log("Gucci da c nechta?", gucci);
// //// Variant 2
// // console.log(topHarf("e","enginer"));












// function qoldiqTopish(a, b, callback) {
//     if(b===0) callback("Bo'luvchi 0 ga teng bo'lmasligi lozim", null);
//     else {
//         callback(null, a % b);
//     }
// }

// qoldiqTopish(5,0, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("qoldiq", data);
//     }
// });



// let promise = new Promise(function (resolve, reject) {
//     const x = "geeksforgeeks";
//     const y = "geeksforgeeks"
//     if (x === y) {
//         resolve();
//     } else {
//         reject();
//     }
// });

// promise.
//     then(function () {
//         console.log('Success, You are a GEEK');
//     }).
//     catch(function () {
//         console.log('Some error has occurred');
//     });