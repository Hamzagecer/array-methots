const arr=[1,2,3,4,5,6] ;

//tüm elemanlar 4’ ten büyük mü ?

const dörttenBuyuk=arr.every(num=>num>4);
console.log(dörttenBuyuk); //ekran çıktısı:false

//tüm elemanlar 10’ dan küçük mü ?

const ondanKüçük=arr.every(num=>num<10);
console.log(ondanKüçük); //ekran çıktısı:true
