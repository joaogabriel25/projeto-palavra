let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
   
}

function palavraAleatoria(){
   let palavras = ["maromba" , "academia" , "gym" , "halter"];
  return random(palavras);
}

 function inicializaCores(minimo, maximo){
   background("black");
  fill("purple");
  textSize(64);
  textAlign(CENTER, CENTER);
 }

function palavraparcial (minimo, maximo){
 let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraparcial(0, width);
  text(texto, 200, 200);
  
  /*if (mouseX < 50){
  let palavra = "m";
  text(palavra, 200, 200);
  } else if(mouseX <100){
    let palavra = "ma";
    text(palavra, 200, 200);
  } else if(mouseX <150){
    let palavra = "mar";
    text(palavra, 200, 200);
  } else if(mouseX <200){
    let palavra = "maro";
    text(palavra, 200, 200);
  } else if(mouseX <250){
    let palavra = "marom";
    text(palavra, 200, 200);
  } else if(mouseX <300){
    let palavra = "maromb";
    text(palavra, 200, 200);
  } else if(mouseX <350){
    let palavra = "maromba";
    text(palavra, 200, 200);
  }*/
}