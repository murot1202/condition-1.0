var a = +prompt('Yoshingizni kiriting')
console.log(a);

if(a <= 18) {
    alert ('Yoshsiz. O`qishingiz kerak');
} else if (a <= 50) {
    alert('Ishlashingiz kerak');
} else if (a <= 59) {
    alert('Yaqinda pensiyaga chiqasiz');
} else if (a <= 150) {
    alert('Pensionerga o`xshaysiz, hali tirik bo`lsangiz :)');
}
else {
    alert('Nimadir notog`ri ketib qoldi')
}