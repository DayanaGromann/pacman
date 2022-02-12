var grupoParedes;
var grupoMoedas;
var fantasmas = [];
var grupoMoedasGrandes;
var pacman;
var score = 0;
var estadoJogo = "jogar"
var edges;
var fantasmasMortais = false;

function setup() {
  createCanvas(800,400)
  grupoParedes = new Group();
  grupoMoedas = new Group();
  grupoMoedasGrandes = new Group();
  pacman = new PacMan();
  criarParedes()
  gerarMoedas()
  criarFantasmas();

  
}

function draw() {
  background(0);  


  grupoParedes.displace(pacman.sprite)
  
  
  drawSprites();
  
  if(estadoJogo == "jogar"  && pacman.vivo == true){
    pacman.mover()
    pacman.comer()
    
    
  }
  console.log(fantasmasMortais)

  if(fantasmasMortais){
    pacman.comerFantasmas()
  }

  //detecta se o fantasma e o pacman estão encostando 
  for(var i = 0; i < fantasmas.length; i++){
    fantasmas[i].mover()
    
    if(fantasmas[i].sprite.isTouching(pacman.sprite)){
      if(!fantasmasMortais){
        pacman.morrer()
        
      }else{
        score += 50;
        fantasmas[i].sprite.destroy();
      }
    }
  }


  text("x: "+ mouseX + "y: "+ mouseY, mouseX, mouseY)
  text("pontuação: " + score, 315, 390);
  text("vidas: " + pacman.vidas, 205, 390);
}

function gerarMoedas(){
  for(var y = 45; y < 326; y = y + 30){
    for(var x = 100; x < 700; x = x + 20){
      if(x > 670 && y == 45 || x == 100 && y > 300 || y == 45 && x==100 || x > 670 && y> 300){
        var masterCoin = createSprite(x, y, 8, 8);
        masterCoin.shapeColor = "yellow"
        if(grupoParedes.isTouching(masterCoin)){
          masterCoin.destroy()
        }
        if(masterCoin){
          grupoMoedasGrandes.add(masterCoin);
        }
      }else{
        var coin = createSprite(x, y, 5, 5);
        coin.shapeColor = "yellow"
        if(grupoParedes.isTouching(coin)){
          coin.destroy()
        }
        if(coin){
          grupoMoedas.add(coin);
        }
      } 
    }
  }
}



function criarParedes(){
  var parede1 = createSprite(400, 30, 600,10);
  grupoParedes.add(parede1);

  var parede2 = createSprite(400, 60, 600,10);
  grupoParedes.add(parede2);

  var parede3 = createSprite(400, 90, 600,10);
  grupoParedes.add(parede3);

  var parede4 = createSprite(400, 120, 600,10);
  grupoParedes.add(parede4);

  var parede5 = createSprite(400, 150, 600,10);
  grupoParedes.add(parede5);

  var parede6 = createSprite(400, 180, 600,10);
  grupoParedes.add(parede6);

  var parede7 = createSprite(400, 210, 600,10);
  grupoParedes.add(parede7);

  var parede8 = createSprite(400, 240, 600,10);
  grupoParedes.add(parede8);

  var parede9 = createSprite(400, 270, 600,10);
  grupoParedes.add(parede9);

  var parede10 = createSprite(400, 300, 600,10);
  grupoParedes.add(parede10);

  var parede11 = createSprite(400, 330, 600,10);
  grupoParedes.add(parede11);

  var parede12 = createSprite(400, 360, 800, 10);
  grupoParedes.add(parede12);

  var parede13 = createSprite(400, 0, 800, 10);
  grupoParedes.add(parede13);

  var parede14 = createSprite(800, 200, 100, 400);
  grupoParedes.add(parede14);

  var parede15 = createSprite(00, 200, 100, 400);
  grupoParedes.add(parede15);

  parede13.debug = true
}

function criarFantasmas(){
  for(var i = 0; i <=4; i++){
    var fantasma = new Fantasma(680,345)
    fantasma.sprite.shapeColor = fantasma.cores[i]
    fantasmas.push(fantasma)
  }
}