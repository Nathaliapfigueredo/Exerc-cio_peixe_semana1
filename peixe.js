
//configuração do jogo Phaser
var config = {
    type: Phaser.AUTO, //define renderização automática
    //tamanho da tela do jogo
    width: 800,
    height: 600,

    //funções de cada cena
    scene:{
        preload: preload,
        create:create,
        update: update
    }
};

//cria uma nova instância do jogo Phaser com as configurações definidas
var game = new Phaser.Game(config);

//variável para armazenar o peixe
var peixinho;

//carrega os assets
function preload(){
    this.load.image('mar','assets/mar.png');

    this.load.image('logo', 'assets/logo-inteli_azul.png');

    this.load.image('peixe', 'assets/tubarao.png');

    this.load.image('Aquaman', 'assets/aquaman.png');

}

//cria os elementos
function create(){
    this.add.image(400,300,'mar').setDisplaySize(800, 600);
    //centralzia e ajusta a largura e a altura da iamgem

    this. add.image(400,525,'logo').setScale(0.5);

    //guardar o peixe em uma variável         
    peixinho = this.add.image(400,300,'peixe').setOrigin(0.5,0.5).setFlip(true,false);
    //setOrigin(0.5,0.5) - define a posição que começa   
    // setFlip(true,false); - fixa o mouse no peixe

    this. add.image(675,230,'Aquaman').setScale(0.5, 0.5);

    // Adiciona um texto no topo da tela
    this.add.text(400, 100, 'Aventuras no Oceano!', { 
        fontSize: '32px', 
        color: '#008000', 
        fontFamily: 'Arial', 
        fontStyle: 'bold' 
    }).setOrigin(0.5, 0.5);

}

//atualiza o jogo a cada frame
function update(){

    //faz o peixe seguir o ponteiro do mouse
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
