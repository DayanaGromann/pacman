class PacMan{
    constructor(){
        this.sprite = createSprite(90,20,10,10);
        this.sprite.shapeColor = "green"
        this.vidas = 3;
        this.vivo = true;
        this.imortal = false;

    }

    mover(){
        if(keyDown("left")){
            this.sprite.x -= 3;
        }
        if(keyDown("right")){
            this.sprite.x += 3;
        }
        if(keyDown("up")){
            this.sprite.y -= 3;
        }
        if(keyDown("down")){
            this.sprite.y += 3;
        }

        
    }

    comer(){
        for(var i = 0; i < grupoMoedas.length; i++){
                if(grupoMoedas[i].isTouching(this.sprite)){
                grupoMoedas[i].destroy()
                score += 1;
            }
        }

        for(var i = 0; i < grupoMoedasGrandes.length; i++){
            if(grupoMoedasGrandes[i].isTouching(this.sprite)){
                grupoMoedasGrandes[i].destroy()
                score += 10;
                fantasmasMortais = true;

                setTimeout(()=>{
                    fantasmasMortais = false;
                },10000);
                
            }
        }

      
    }

    comerFantasmas(){
        pacman.imortal = true;
        for(var i = 0; i< fantasmas.length; i++){
            
            fantasmas[i].sprite.shapeColor = "lightBlue"

             
        }
    }

    morrer(){
        this.vivo = false
        

        if(this.vivo == false && this.imortal == false){
            this.sprite.shapeColor = "red";
            this.vidas -= 1;
            this.vivo = true;
            this.imortal = true;
            setTimeout(()=>{
                if(this.vidas > 0){
                    
                    
                    this.sprite.shapeColor = "green"
                    this.sprite.x = 90;
                    this.sprite.y = 20
                    this.imortal = false
                    this.vivo = true;
                    
                }else{
                    estadoJogo = "gameOver";
                }
                
            }, 1000);
        }
    }
}