
const body = document.querySelector("body");


const button = document.querySelector("button");

const colors =[

    "#4add45"   ,
    "#000000"   ,
    "#ffcc00"   ,
    "#179fff"   ,
    "#ceabd1"   ,
];


button.addEventListener("click" , changeBackground);

let sira = 0

function changeBackground() {
    
     //const rastgeleSayi = Math.floor (Math.random() * colors.length);
     //console.log(rastgeleSayi);
     //const secilenRenk = colors[rastgeleSayi];
     //body.style.backgroundColor = secilenRenk;

     console.log(sira);
     if (sira == 5) sira = 0;
     const secilenRenk = colors[sira];
     sira++;
     body.style.backgroundColor = secilenRenk;
}