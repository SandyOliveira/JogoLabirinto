//crie as variaveis dos seus personagens aqui
var box;
var DJ;
var p1;





function preload() {
  //carregue as imagens dos personagens aqui
}

function setup() {
  canvas = createCanvas(900, 900);
  canvas.center()
  paredes()

  DJ = createSprite(510, 20, 20, 20);
  DJ.shapeColor = "red";



}

function draw() {
  background("black");


  box35.rotationSpeed = 6;
  box36.rotationSpeed = 6;

  box37.rotationSpeed = 5;
  box38.rotationSpeed = 5;

  box53.rotationSpeed = 3;
  box56.rotationSpeed = 3;

  box57.rotationSpeed = 4;
  box58.rotationSpeed = 4;

  if (keyDown("w")) {
    DJ.y -= 2
  }
  if (keyDown("s")) {
    DJ.y += 2
  }
  if (keyDown("a")) {
    DJ.x -= 2
  }
  if (keyDown("d")) {
    DJ.x += 2
  }


  perguntas()

  drawSprites();
}
function paredes() {
  //laterais
  box = createSprite(10, 410, 20, 1000);
  box.shapeColor = "green";

  box1 = createSprite(890, 410, 20, 1000);
  box1.shapeColor = "green";

  //wall de cima
  box2 = createSprite(200, 10, 450, 20);
  box2.shapeColor = "green";

  box3 = createSprite(800, 10, 450, 20);
  box3.shapeColor = "green";

  //wall
  box5 = createSprite(80, 180, 450, 20);
  box5.shapeColor = "green";

  box6 = createSprite(80, 480, 450, 20);
  box6.shapeColor = "green";

  box7 = createSprite(800, 340, 450, 20);
  box7.shapeColor = "green";

  box8 = createSprite(80, 50, 20, 100);
  box8.shapeColor = "green";

  box9 = createSprite(150, 90, 150, 20);
  box9.shapeColor = "green";

  box10 = createSprite(280, 50, 20, 100);
  box10.shapeColor = "green";

  box11 = createSprite(180, 270, 20, 180);
  box11.shapeColor = "green";

  box12 = createSprite(580, 80, 20, 180);
  box12.shapeColor = "green";

  box13 = createSprite(680, 250, 20, 180);
  box13.shapeColor = "green";

  box14 = createSprite(780, 440, 20, 180);
  box14.shapeColor = "green";

  box15 = createSprite(680, 440, 180, 20);
  box15.shapeColor = "green";

  box16 = createSprite(780, 80, 20, 180);
  box16.shapeColor = "green";

  box17 = createSprite(720, 80, 100, 20);
  box17.shapeColor = "green";

  box18 = createSprite(720, 220, 100, 20);
  box18.shapeColor = "green";

  box19 = createSprite(830, 260, 100, 20);
  box19.shapeColor = "green";

  box20 = createSprite(30, 260, 100, 20);
  box20.shapeColor = "green";

  box21 = createSprite(120, 350, 100, 20);
  box21.shapeColor = "green";

  box22 = createSprite(80, 380, 20, 50);
  box22.shapeColor = "green";

  box23 = createSprite(180, 450, 20, 70);
  box23.shapeColor = "green";

  box24 = createSprite(300, 260, 20, 180);
  box24.shapeColor = "green";

  box25 = createSprite(420, 120, 20, 280);
  box25.shapeColor = "green";

  box26 = createSprite(420, 250, 120, 20);
  box26.shapeColor = "green";

  box27 = createSprite(600, 210, 180, 20);
  box27.shapeColor = "green";

  box28 = createSprite(230, 410, 180, 20);
  box28.shapeColor = "green";

  box29 = createSprite(380, 350, 180, 20);
  box29.shapeColor = "green";

  box30 = createSprite(380, 450, 20, 180);
  box30.shapeColor = "green";

  box31 = createSprite(450, 550, 160, 20);
  box31.shapeColor = "green";

  box30 = createSprite(580, 480, 20, 180);
  box30.shapeColor = "green";

  box31 = createSprite(680, 520, 20, 180);
  box31.shapeColor = "green";

  box32 = createSprite(750, 620, 160, 20);
  box32.shapeColor = "green";

  box33 = createSprite(450, 630, 20, 180);
  box33.shapeColor = "green";

  box34 = createSprite(250, 580, 20, 180);
  box34.shapeColor = "green";

  //rodando
  box35 = createSprite(460, 460, 20, 80);
  box35.shapeColor = "green";

  box36 = createSprite(460, 460, 80, 20);
  box36.shapeColor = "green";

  box37 = createSprite(60, 560, 20, 80);
  box37.shapeColor = "green";

  box38 = createSprite(60, 560, 80, 20);
  box38.shapeColor = "green";

  box53 = createSprite(600, 730, 80, 20);
  box53.shapeColor = "green";

  box56 = createSprite(330, 80, 60, 20);
  box56.shapeColor = "green";

  box57 = createSprite(830, 80, 60, 20);
  box57.shapeColor = "green";

  box58 = createSprite(830, 80, 20, 60);
  box58.shapeColor = "green";

  //wall
  box39 = createSprite(100, 680, 180, 20);
  box39.shapeColor = "green";

  box40 = createSprite(150, 630, 20, 120);
  box40.shapeColor = "green";

  box41 = createSprite(180, 730, 20, 120);
  box41.shapeColor = "green";

  box42 = createSprite(250, 730, 120, 20);
  box42.shapeColor = "green";

  box43 = createSprite(450, 730, 120, 20);
  box43.shapeColor = "green";

  box44 = createSprite(350, 630, 120, 20);
  box44.shapeColor = "green";

  box45 = createSprite(350, 660, 20, 80);
  box45.shapeColor = "green";

  box46 = createSprite(80, 760, 20, 80);
  box46.shapeColor = "green";

  box47 = createSprite(50, 790, 80, 20);
  box47.shapeColor = "green";

  box48 = createSprite(500, 780, 20, 80);
  box48.shapeColor = "green";

  box49 = createSprite(300, 780, 20, 80);
  box49.shapeColor = "green";

  box50 = createSprite(125, 730, 20, 120);
  box50.shapeColor = "green";

  box51 = createSprite(140, 840, 180, 20);
  box51.shapeColor = "green";

  box52 = createSprite(790, 730, 180, 20);
  box52.shapeColor = "green";

  box54 = createSprite(780, 780, 20, 80);
  box54.shapeColor = "green";

  box55 = createSprite(750, 650, 20, 80);
  box55.shapeColor = "green";
  //wall final
  box60 = createSprite(400, 890, 880, 20);
  box60.shapeColor = "green";

}

function perguntas() {
  p1 = createSprite(100, 50, 20, 60);
  p1.shapeColor = "yellow";
  //p1.visible = false;

  if (DJ.isTouching(p1)) {
    swal({
      title: "Me surpreenda!",
      text: "Julio César é a chave, decodifiqueo avançando três fazes:",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputPlaceholder: "Write something"
    },
    function(inputValue){
      if (inputValue === null) return false;
      
      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      if (inputValue === "d") {
        swal("Nice!", "Sua resposta foi:  " + inputValue + " você passou com sucesso"); 
      }else{
        swal("Caramba!", "Sua resposta foi:  " + inputValue + "vacilou"); 
      }
     
    
     
    });
    
 
    DJ.x += 25;
  }
}
