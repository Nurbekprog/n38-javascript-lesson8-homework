// Str1
// function printFirstNLetters(n) {
//     if (n < 1 || n > 26) {
//         console.log("Noto'g'ri . n 1 dan 26 gacha bo'lishi kerak! ");
//         return;
//     }
//     const asciiA = 65;
//     for (let i = 0; i < n; i++) {
//         const currentLetter = String.fromCharCode(asciiA + i);
//         console.log(currentLetter);
//     }
// }
// printFirstNLetters(26);


// Str2
// function identifyCharacterType(character) {
//     if (typeof character === 'string' && character.length === 1) {
//         if (/[0-9]/.test(character)) {
//             console.log("Digit");
//         } else if (/[a-zA-Z]/.test(character)) {
//             console.log("Lotin");
//         } else {
//             console.log("Nol");
//         }
//     } else {
//         console.log("Nol");
//     }
// }
// const userInput = prompt("Iltimos, belgi kiriting:");
// identifyCharacterType(userInput);


// Str3
// Satr
// let satr = "Satr berilgan.";
// let birinchiBelgi = satr.charAt(0);
// let oxirgiBelgi = satr.charAt(satr.length - 1);
// let birinchiKod = birinchiBelgi.charCodeAt(0);
// let oxirgiKod = oxirgiBelgi.charCodeAt(0);
// console.log("Birinchi belgi: " + birinchiBelgi + ", UTF-16 kodi: " + birinchiKod);
// console.log("Oxirgi belgi: " + oxirgiBelgi + ", UTF-16 kodi: " + oxirgiKod);


// Str4
// N va belgi
// let N = 5;
// let belgi = 'A';
// let satr = belgi.repeat(N);

// console.log(satr);


// Str5
// let kiritilganSatr = "Salom, dunyo!";
// let teskariSatr = kiritilganSatr.split('').reverse().join('');

// console.log(teskariSatr);


// Str6
// function getStringStars(satr, N) {
//     let belgilar = satr.split('');
//     for (let i = 0; i < belgilar.length; i += N + 1) {
//         belgilar.splice(i, 0, "*".repeat(N));
//     }
//     return belgilar.join('');
// }
// let kiritilganSatr = "Salom, dunyo!";
// let N = 3;
// let natijaSatr = getStringStars(kiritilganSatr, N);
// console.log(natijaSatr);


// Str7
// function aniqlovchiRaqamSoni(satr) {
//     let raqamSoni = 0;
//     for (let belgi of satr) {
//         if (!isNaN(belgi)) {
//             raqamSoni++;
//         }
//     }
//     return raqamSoni;
// }
// let testSatr = "Salom, 12345 dunyo!";
// let natija = aniqlovchiRaqamSoni(testSatr);
// console.log("Satrdagi raqamlar soni: " + natija);


// Str8
// function umumiyHarfSoni(satr) {
//     let kichikLotinVaKirillHarflar = /[a-zа-я]/g;
//     let umumiySoni = (satr.match(kichikLotinVaKirillHarflar) || []).length;
//     return umumiySoni;
// }
// let testSatr = "Salom, Dunyo! Привет, Мир!";
// let natija = umumiyHarfSoni(testSatr);
// console.log("Satrdagi kichik lotin va kirill harflarining umumiy soni: " + natija);


// Str9
// function kattaLotinlarniKichigigaAlmashtir(satr) {
//     let yangiSatr = "";
//     for (let belgi of satr) {
//         if (belgi >= 'A' && belgi <= 'Z') {
//             yangiSatr += String.fromCharCode(belgi.charCodeAt(0) + 32);
//         } else {
//             yangiSatr += belgi;
//         }
//     }
//     return yangiSatr;
// }
// let testSatr = "Hello World!";
// let natija = kattaLotinlarniKichigigaAlmashtir(testSatr);
// console.log("Natija: " + natija);


// Str10
// function harflarniAlmashtir(satr) {
//     let yangiSatr = "";
//     for (let belgi of satr) {
//         if (belgi >= 'A' && belgi <= 'Z') {
//             yangiSatr += belgi.toLowerCase();
//         } else if (belgi >= 'a' && belgi <= 'z') {
//             yangiSatr += belgi.toUpperCase();
//         } else {
//             yangiSatr += belgi;
//         }
//     }
//     return yangiSatr;
// }
// let testSatr = "Hello World!";
// let natija = harflarniAlmashtir(testSatr);
// console.log("Natija: " + natija);


// Str11
// function sinov(satr) {
//     let son = parseFloat(satr);
//     if (!isNaN(son) && satr.includes('.') && son.toString() === satr) {
//         return 2;
//     }
//     if (!isNaN(son) && son.toString() === satr) {
//         return 1;
//     }
//     return 0;
// }
// console.log(sinov("123"));    
// console.log(sinov("12.34"));    
// console.log(sinov("12.34.56")); 
// console.log(sinov("abc"));      


// Str12
// function getInverseNumber(n) {
//     let teskariSoni = parseInt(n.toString().split('').reverse().join(''));
//     return teskariSoni;
// }
// let n = 12345;
// let teskari = getInverseNumber(n);
// console.log("Berilgan son: " + n);
// console.log("Teskari son: " + teskari);


// Str13
// function hisoblash(ifoda) {
//     ifoda = ifoda.replace(/\s+/g, '');
//     ifoda = ifoda.replace(/\+\+/g, '+');
//     ifoda = ifoda.replace(/\+-/g, '-');
//     ifoda = ifoda.replace(/-\+/g, '-');
//     ifoda = ifoda.replace(/--/g, '+');
//     let belgilar = ifoda.split(/[+-]/);
//     let amallar = ifoda.match(/[+-]/g) || [];
//     let natija = parseInt(belgilar[0]);
//     for (let i = 1; i < belgilar.length; i++) {
//         let belgi = amallar[i - 1];
//         let son = parseInt(belgilar[i]);
//         if (belgi === '+') {
//             natija += son;
//         } else {
//             natija -= son;
//         }
//     }
//     return natija;
// }
// let ifoda = "7 + 3 - 2";
// let natija = hisoblash(ifoda);
// console.log("Ifoda: " + ifoda);
// console.log("Natija: " + natija);


// Str14
// function hosilQilish(N1, N2, S1, S2) {
//     if (N1 < 0 || N2 < 0 || N1 > S1.length || N2 > S2.length) {
//         return "Noto'g'ri kiritilgan qiymatlar.";
//     }
//     let yangiSatr = S1.substring(0, N1) + S2.substring(S2.length - N2);
//     return yangiSatr;
// }
// let N1 = 3;
// let N2 = 2;
// let S1 = "Salom, dunyo!";
// let S2 = "Qalaysan?";
// let natija = hosilQilish(N1, N2, S1, S2);
// console.log("S1: " + S1);
// console.log("S2: " + S2);
// console.log("Yangi satr: " + natija);


// Str15
// function ikkiMartagaOrrat(C, S) {
//     let natijaSatr = "";
//     for (let i = 0; i < S.length; i++) {
//         natijaSatr += S[i];
//         if (S[i] === C) {
//             natijaSatr += C;
//         }
//     }
//     return natijaSatr;
// }
// let C = 'a';
// let S = 'salom';
// let natija = ikkiMartagaOrrat(C, S);
// console.log("C belgisi: " + C);
// console.log("S satri: " + S);
// console.log("Natija: " + natija);


// Str16
// function qoshishdanOldin(C, S1, S2) {
//     let natijaSatr = "";
//     for (let i = 0; i < S1.length; i++) {
//         natijaSatr += S1[i];
//         if (S1[i] === C) {
//             natijaSatr += S2;
//         }
//     }
//     return natijaSatr;
// }
// let C = 'a';
// let S1 = 'salom';
// let S2 = 'Qalaysan?';
// let natija = qoshishdanOldin(C, S1, S2);
// console.log("C belgisi: " + C);
// console.log("S1 satri: " + S1);
// console.log("S2 satri: " + S2);
// console.log("Natija: " + natija);
 

// Str17
// function takrorlanishlarSoni(S1, S2) {
//     let takrorlanishlarSoni = 0;
//     for (let i = 0; i <= S1.length - S2.length; i++) {
//         if (S1.substring(i, i + S2.length) === S2) {
//             takrorlanishlarSoni++;
//         }
//     }
//     return takrorlanishlarSoni;
// }
// let S1 = "abcabcabc";
// let S2 = "abc";
// let natija = takrorlanishlarSoni(S1, S2);
// console.log("S1 satri: " + S1);
// console.log("S2 satri: " + S2);
// console.log("Takrorlanishlar soni: " + natija);


// Str18
// function ochiribTashlash(S1, S2) {
//     let indeks = S1.indexOf(S2);
//     if (indeks !== -1) {
//         S1 = S1.slice(0, indeks) + S1.slice(indeks + S2.length);
//     }
//     return S1;
// }
// let S1 = "salomdunyo";
// let S2 = "lo";
// let natija = ochiribTashlash(S1, S2);
// console.log("S1 satri: " + S1);
// console.log("S2 satri: " + S2);
// console.log("Natija: " + natija);


// Str19
// function ochiribTashlash(S1, S2) {
//     let indeks = S1.indexOf(S2);
//     while (indeks !== -1) {
//         S1 = S1.slice(0, indeks) + S1.slice(indeks + S2.length);
//         indeks = S1.indexOf(S2);
//     }
//     return S1;
// }
// let S1 = "salomdunyosalomsalom";
// let S2 = "salom";
// let natija = ochiribTashlash(S1, S2);
// console.log("S1 satri: " + S1);
// console.log("S2 satri: " + S2);
// console.log("Natija: " + natija);


// Str20
// function ozgartirish(S1, S2, S3) {
//     let indeks = S1.indexOf(S2);
//     if (indeks !== -1) {
//         S1 = S1.slice(0, indeks) + S3 + S1.slice(indeks + S2.length);
//     }
//     return S1;
// }
// let S1 = "salomdunyo";
// let S2 = "lo";
// let S3 = "hayot";
// let natija = ozgartirish(S1, S2, S3);
// console.log("S1 satri: " + S1);
// console.log("S2 satri: " + S2);
// console.log("S3 satri: " + S3);
// console.log("Natija: " + natija);


// Str21
// function ozgartirish(S1, S2, S3) {
//     let indeks = S1.lastIndexOf(S2);
//     if (indeks !== -1) {
//         S1 = S1.slice(0, indeks) + S3 + S1.slice(indeks + S2.length);
//     }
//     return S1;
// }
// let S1 = "salomdunyosalomsalom";
// let S2 = "salom";
// let S3 = "hayot";
// let natija = ozgartirish(S1, S2, S3);
// console.log("S1 satri: " + S1);
// console.log("S2 satri: " + S2);
// console.log("S3 satri: " + S3);
// console.log("Natija: " + natija);


// Str22
// function boshlanuvchiTugovchi(S) {
//     let sozlar = S.split(' ');
//     let boshlanuvchi = "";
//     let tugovchi = "";
//     for (let soz of sozlar) {
//         if (soz.length > 0) {
//             let boshHarf = soz[0].toUpperCase();
//             let tugHarf = soz[soz.length - 1].toUpperCase();
//             if (boshlanuvchi === "") {
//                 boshlanuvchi = boshHarf;
//             } else if (boshHarf !== boshlanuvchi) {
//                 break;
//             }
//             tugovchi = tugHarf;
//         }
//     }
//     return { boshlanuvchi, tugovchi };
// }
// let satr = "Salom Dunyo Sog'liq";
// let natija = boshlanuvchiTugovchi(satr);
// console.log("Satr: " + satr);
// console.log("Boshlanuvchi harf: " + natija.boshlanuvchi);
// console.log("Tugovchi harf: " + natija.tugovchi);


// Str23
// function ikkitaAHarf(satr) {
//     let sozlar = satr.split(' ');
//     let aHarfSoni = 0;
//     for (let soz of sozlar) {
//         let aSoni = 0;
//         for (let harf of soz) {
//             if (harf === 'A') {
//                 aSoni++;
//             }
//         }
//         if (aSoni === 2) {
//             aHarfSoni++;
//         }
//     }
//     return aHarfSoni;
// }
// let berilganSatr = "Salom Dunyo Sog'liq Ayt";
// let natija = ikkitaAHarf(berilganSatr);
// console.log("Berilgan Satr: " + berilganSatr);
// console.log("Aniq 2 ta 'A' harfi bor so'zlar soni: " + natija);


// Str24
// function getMaxOfString(str) {
//     let sozlar = str.split(' ');
//     let engUzunSoz = "";
//     for (let soz of sozlar) {
//         if (soz.length > engUzunSoz.length) {
//             engUzunSoz = soz;
//         }
//     }
//     return engUzunSoz;
// }
// let satr = "Salom Dunyo Sog'liq Ayt";
// let engUzunSoz = getMaxOfString(satr);
// console.log("Berilgan Satr: " + satr);
// console.log("Eng uzun so'z: " + engUzunSoz);


// Str25
// function chiqarish(str) {
//     let sozlar = str.split(' ');
//     let natija = sozlar.join('.');
//     console.log(natija);
// }
// let satr = "Salom Dunyo Sog'liq Ayt";
// chiqarish(satr);


// Str26
// function almashtirish(str) {
//     let sozlar = str.split(' ');
//     let natija = "";
//     for (let soz of sozlar) {
//         let birinchiHarf = soz.charAt(0);
//         let kattaHarf = birinchiHarf.toUpperCase();
//         let qolganQism = soz.slice(1);
//         let almashtirilganSoz = kattaHarf + qolganQism;
//         natija += almashtirilganSoz + ' ';
//     }
//     return natija.trim();
// }
// let satr = "salom dunyo sog'liq ayt";
// let natija = almashtirish(satr);
// console.log("Berilgan Satr: " + satr);
// console.log("Natija: " + natija);


// Str27
// function tinishBelgilariSoni(satr) {
//     let marks = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];
//     let tinishBelgilarSoni = 0;
//     for (let belgi of marks) {
//         let belgiSoni = 0;
//         for (let harf of satr) {
//             if (harf === belgi) {
//                 belgiSoni++;
//             }
//         }
//         tinishBelgilarSoni += belgiSoni;
//     }
//     return tinishBelgilarSoni;
// }
// let berilganSatr = "Salom, Dunyo! Sog'liq?";
// let natija = tinishBelgilariSoni(berilganSatr);
// console.log("Berilgan Satr: " + berilganSatr);
// console.log("Tinish belgilari soni: " + natija);


// Str28
// function faylningNominiOlish(faylNom) {
//     let slashIndeksi = faylNom.lastIndexOf('/');
//     let backslashIndeksi = faylNom.lastIndexOf('\\');
//     let indeksi = Math.max(slashIndeksi, backslashIndeksi);
//     if (indeksi !== -1) {
//         faylNom = faylNom.slice(indeksi + 1);
//     }
//     let dotIndeksi = faylNom.lastIndexOf('.');
//     if (dotIndeksi !== -1) {
//         faylNom = faylNom.slice(0, dotIndeksi);
//     }
//     return faylNom;
// }
// let faylNom = "D:/Qudrat_c++/books/My_book.exe";
// let natija = faylningNominiOlish(faylNom);
// console.log("Berilgan Fayl Nom: " + faylNom);
// console.log("Faylning nomi (kengaytmasiz): " + natija);


// Str29
// function faylningKengaytmasiniOlish(faylNom) {
//     let dotIndeksi = faylNom.lastIndexOf('.');
//     if (dotIndeksi !== -1) {
//         return faylNom.slice(dotIndeksi + 1);
//     }
//     return "";
// }
// let faylNom = "D:/Qudrat_c++/books/My_book.exe";
// let natija = faylningKengaytmasiniOlish(faylNom);
// console.log("Berilgan Fayl Nom: " + faylNom);
// console.log("Faylning kengaytmasi: " + natija);


// Str30
// function oxirgiPapkaNominiOlish(faylNom) {
//     let slashIndeksi = faylNom.lastIndexOf('/');
//     let backslashIndeksi = faylNom.lastIndexOf('\\');
//     let indeksi = Math.max(slashIndeksi, backslashIndeksi);
//     if (indeksi !== -1) {
//         let oxirgiPapkaNom = faylNom.slice(0, indeksi);
//         let oxirgiSlashIndeksi = oxirgiPapkaNom.lastIndexOf('/');
//         let oxirgiBackslashIndeksi = oxirgiPapkaNom.lastIndexOf('\\');
//         let oxirgiIndeksi = Math.max(oxirgiSlashIndeksi, oxirgiBackslashIndeksi);
//         if (oxirgiIndeksi !== -1) {
//             return oxirgiPapkaNom.slice(oxirgiIndeksi + 1);
//         } else {
//             return "/";
//         }
//     }
//     return "";
// }
// let faylNom = "D:/Qudrat_c++/books/My_book.exe";
// let natija = oxirgiPapkaNominiOlish(faylNom);
// console.log("Berilgan Fayl Nom: " + faylNom);
// console.log("Oxirgi papka nomi: " + natija);