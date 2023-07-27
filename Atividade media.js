var nota1 = 10;
var nota2 = 10;
var nota3 = 10;
var nota4 = 10;

var media = (nota1+nota2+nota3+nota4)/4;

if (media == 0){
    console.log(" Infelizmente você zerou a prova :( ")
} 
else if(media>= 0.1 && media <= 3){
 console.log("Caramba,deu ruim, você obteve media" + " " + media + "! Estude mais e tente novamente !")   
}
else if(media>= 3.1 && media <= 5.9){
 console.log("Você obteve media" + " " + media + "! Falta pouco para a média !")   
}
else if(media>= 6 && media <= 7){
 console.log("Você está na média com" + " " + media )   
}
else if(media>= 7.1 && media <= 9.9){
    console.log("Notão! Sua média é " + " " + media + "!")   
   }
   else{
    console.log("Hoje é seu aniversário? Pq você tá de parabéns! 10 na média ")
   }

   // Utilizando switch case


   var nota1 = 10;
var nota2 = 10;
var nota3 = 10;
var nota4 = 10;

var media = (nota1 + nota2 + nota3 + nota4) / 4;

switch (media) {
    case 0:
        console.log("Infelizmente você zerou a prova :(");
        break;
    case (media >= 0.1 && media <= 3):
        console.log("Caramba, deu ruim! Você obteve média " + media + "! Estude mais e tente novamente!");
        break;
    case (media >= 3.1 && media <= 5.9):
        console.log("Você obteve média " + media + "! Falta pouco para a média!");
        break;
    case (media >= 6 && media <= 7):
        console.log("Você está na média com média " + media + ".");
        break;
    case (media >= 7.1 && media <= 9.9):
        console.log("Notão! Sua média é " + media + "!");
        break;
    default:
        console.log("Hoje é seu aniversário? Pq você tá de parabéns! 10 na média.");
        break;
}
