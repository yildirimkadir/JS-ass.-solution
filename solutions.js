const fiyatlar = [100, 250, 50, 89];

// 1!ÖDEV1:fiyatlar dizisinde her bir fiyata %10 zam yapalım.
//? NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

fiyatlar.forEach((value, index, fiyatlar) => {
  fiyatlar[index] = (value * 1.1).toFixed(2);
})
console.log(fiyatlar);

// ÖDEV2 fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

fiyatlar.filter((f) => f > 90).forEach((f) => console.log(f));

// or

fiyatlar.forEach((value) => value>90 ? console.log(value) : null);

//ÖDEV3 fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

fiyatlar.map((x) => x<110 ? console.log((x*1.1).toFixed(2)) : null);

// or

fiyatlar.filter((f) => f < 110).map((f) => Math.round(f * 1.1)).forEach((f) => console.log(f));

//ÖDEV4  maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];
const zamli = maaslar.filter((x) => x < 4000).map((y) => y * 1.5);
console.log(zamli);

//ÖDEV5 Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

maaslar.filter((x) => x > 4000).map((y) => y * 1.25).forEach((z) => console.log(z));

//ÖDEV6  Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.

// forEach;

let toplam = 0
maaslar.forEach((x) => {
  toplam += x; 
})
console.log(toplam);

// reduce ile ;

const toplam2 = maaslar.reduce((t,m) => t+m,0);
console.log(toplam2);


