class Fantasma{
    constructor(x,y){
        this.sprite = createSprite(x,y,10,10);
        this.cores = ["magenta", "cyan", "red", "purple", "orange"];
        
        
        this.direcoes = [[0,3],[0, -3], [3,0], [-3,0]] //direções para as quais os fantasmas podem se mover
        this.direcao = this.direcoes[2]; //direção escolhida

        this.colisorDireito = createSprite(x,y, 5, 5);
        this.colisorDireito.visible = false;

        this.colisorEsquerdo = createSprite(x,y, 5, 5);
        this.colisorEsquerdo.visible = false;

        this.colisorTopo = createSprite(x,y, 5, 5);
        this.colisorTopo.visible = false;

        this.colisorBase = createSprite(x,y, 5, 5)
        this.colisorBase.visible = false;
    }

    mover(){
        grupoParedes.displace(this.colisorDireito)
        grupoParedes.displace(this.colisorEsquerdo)
        grupoParedes.displace(this.colisorTopo)
        grupoParedes.displace(this.colisorBase)
        
    
        
        
        this.colisorDireito.x = this.sprite.x + 5;
        this.colisorDireito.y = this.sprite.y;

        this.colisorEsquerdo.x = this.sprite.x - 5;
        this.colisorEsquerdo.y = this.sprite.y;

        this.colisorTopo.y = this.sprite.y - 5;
        this.colisorTopo.x = this.sprite.x;

        this.colisorBase.y = this.sprite.y + 5;
        this.colisorBase.x = this.sprite.x;

   
        if(grupoParedes.isTouching(this.colisorDireito)){
            var possiveisDirecoes = [0,1,3]
            this.sprite.x -= 2
            var rand = random(possiveisDirecoes)
            this.direcao = this.direcoes[rand]
        }

        if(grupoParedes.isTouching(this.colisorEsquerdo)){
            var possiveisDirecoes = [0,1,2]
            this.sprite.x += 2
            var rand = random(possiveisDirecoes)
            this.direcao = this.direcoes[rand]
        }

        if(grupoParedes.isTouching(this.colisorTopo)){
            var possiveisDirecoes = [0,2,3]
            this.sprite.y += 2
            var rand = random(possiveisDirecoes)
            this.direcao = this.direcoes[rand]
        }

        if(grupoParedes.isTouching(this.colisorBase)){
            var possiveisDirecoes = [1,2,3]
            this.sprite.y -= 2
            var rand = random(possiveisDirecoes)
            this.direcao = this.direcoes[rand]
        }


        var rand 
        if(this.sprite.x % 20 === 0){
            var possiveisDirecoes = [0,1,2,3]
            var rand = random(possiveisDirecoes)
            this.direcao = this.direcoes[rand]
        }
    
        this.sprite.setVelocity(this.direcao[0], this.direcao[1])

    }

}

