let numerosSorteados  = [];
const meuJogo = [11, 5, 25, 38, 46, 55];

for(let loop = 0; loop < 6; loop += 1){
 const numeroAleatorio = Math.floor(Math.random() * 60);
 if (numerosSorteados.includes(numeroAleatorio)){
    numerosSorteados.push(numeroAleatorio);

 }else{
    loop -=1;
 }
console.log(numerosSorteados);

}
