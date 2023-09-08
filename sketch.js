//crie as variaveis dos seus personagens aqui
var box;
var DJ;
var p1;
var p2;
var p3;


function preload() {
  //carregue as imagens dos personagens aqui
}

function setup() {
  canvas = createCanvas(900, 900);
  canvas.center();

  paredes();

  DJ = createSprite(510, 20, 20, 20);
  DJ.shapeColor = "red";


  p1 = createSprite(100, 50, 20, 60);
  p1.shapeColor = "yellow";
  p2 = createSprite(30, 220, 20, 60);
  p2.shapeColor = "yellow";
  p3 = createSprite(835, 360, 90, 20);
  p3.shapeColor = "yellow";
  p4 = createSprite(870, 300, 20, 60);
  p4.shapeColor = "yellow";
  p5 = createSprite(35, 545, 30, 10); 
  p5.shapeColor = "yellow";


}

function draw() {
  background("black");
  //box35.rotationSpeed = 6;
  //box36.rotationSpeed = 6;

  //box37.rotationSpeed = 5;
  //box38.rotationSpeed = 5;

  //box53.rotationSpeed = 3;
  //box56.rotationSpeed = 3;

  //box57.rotationSpeed = 4;
  //box58.rotationSpeed = 4;

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

  if (DJ.isTouching(p1)) {
    per1();
  }
  if (DJ.isTouching(p2)) {
    per2();
  }

  if (DJ.isTouching(p3)) {
    per3();
  }
  if (DJ.isTouching(p4)) {
    per4();
  }

  if (DJ.isTouching(p5)) {
    per5();
  }
  //perguntas()
  // DJ.bounceOff(box)
 
  
  drawSprites();
  
  for(var i=0; i<box.length; i++){
    DJ.bounceOff(box[i]);
    box[i].shapeColor = "green"
  }
}


function paredes() {
  //laterais
  box = []

  box.push(createSprite(10, 410, 20, 1000))
  box.push(createSprite(890, 410, 20, 1000));
  //wall de cima
  box.push(createSprite(200, 10, 450, 20));
  box.push(createSprite(800, 10, 450, 20));
  //wall
  box.push(createSprite(80, 180, 450, 20));
  box.push(createSprite(80, 480, 450, 20));
  box.push(createSprite(800, 340, 450, 20));
  box.push(createSprite(80, 50, 20, 100));
  box.push(createSprite(150, 90, 150, 20));
  box.push(createSprite(280, 50, 20, 100));
  box.push(createSprite(180, 270, 20, 180));
  box.push(createSprite(580, 80, 20, 180));
  box.push(createSprite(680, 250, 20, 180));
  box.push(createSprite(780, 440, 20, 180));
  box.push(createSprite(680, 440, 180, 20));
  box.push(createSprite(780, 80, 20, 180));
  box.push(createSprite(720, 80, 100, 20));
  box.push(createSprite(720, 220, 100, 20));
  box.push(createSprite(830, 260, 100, 20));
  box.push(createSprite(30, 260, 100, 20));
  box.push(createSprite(120, 350, 100, 20));
  box.push(createSprite(80, 380, 20, 50));
  box.push(createSprite(180, 450, 20, 70));
  box.push(createSprite(300, 260, 20, 180));
  box.push(createSprite(420, 120, 20, 280));
  box.push(createSprite(420, 250, 120, 20));
  box.push(createSprite(600, 210, 180, 20));
  box.push(createSprite(230, 410, 180, 20));
  box.push(createSprite(380, 350, 180, 20));
  box.push(createSprite(380, 450, 20, 180));
  box.push(createSprite(450, 550, 160, 20));
  box.push(createSprite(580, 480, 20, 180));
  box.push(createSprite(680, 520, 20, 180));
  box.push(createSprite(750, 620, 160, 20));
  box.push(createSprite(450, 630, 20, 180));
  box.push(createSprite(250, 580, 20, 180));
  //rodando
  box.push(createSprite(460, 460, 20, 80));
  box.push(createSprite(460, 460, 80, 20));
  box.push(createSprite(60, 560, 20, 80));
  box.push(createSprite(60, 560, 80, 20));
  box.push(createSprite(600, 730, 80, 20));
  box.push(createSprite(330, 80, 60, 20));
  box.push(createSprite(830, 80, 60, 20));
  box.push(createSprite(830, 80, 20, 60));
  //wall
  box.push(createSprite(100, 680, 180, 20));
  box.push(createSprite(150, 630, 20, 120));
  box.push(createSprite(180, 730, 20, 120));
  box.push(createSprite(250, 730, 120, 20));
  box.push(createSprite(450, 730, 120, 20));
  box.push(createSprite(350, 630, 120, 20));
  box.push(createSprite(350, 660, 20, 80));
  box.push(createSprite(80, 760, 20, 80));
  box.push(createSprite(50, 790, 80, 20));
  box.push(createSprite(500, 780, 20, 80));
  box.push(createSprite(300, 780, 20, 80));
  box.push(createSprite(125, 730, 20, 120));
  box.push(createSprite(140, 840, 180, 20));
  box.push(createSprite(790, 730, 180, 20));
  box.push(createSprite(780, 780, 20, 80));
  box.push(createSprite(750, 650, 20, 80));
  box.push(createSprite(400, 890, 880, 20));
}

function per1() {
  swal({
    title: "Julio César é a chave, decodifiqueo avançando três fazes:",
    text: "tenha certeza de que todas as respostas serão escritas com letra minúscula. a frase é:ghvlvwd djrud",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something"
  },
    function (inputValue) {
      if (inputValue === null) return false;

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      if (inputValue === "desista agora") {
        swal("É você não é tão ruim", "Sua resposta foi:  " + inputValue + ". o minimo eu diria");
      } else {
        swal("É sério isso?", "Sua resposta foi:  " + inputValue + ". dá para melhorar né? confio em você");
      }



    });


  DJ.x += 25;
}
function per2() {
  swal({
    title: "oque será que eu sou?",
    text: "oque é oque é? moro no local aonde você se encontra, já fiz parte da mitologia, e apenas um conseguiu me derrotar:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something"
  },
    function (inputValue) {
      if (inputValue === null) return false;

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      if (inputValue === "minotauro") {
        swal("você continua na minha casa?", "Sua resposta foi:  " + inputValue + ". advinhou quem eu sou, parabéns");
      } else {
        swal("putz foi quase? talvez sem letra maiuscula", "Sua resposta foi:  " + inputValue + ". tente ler um pouco mais sobre a mitologia grega, talvez isso te ajude");
      }



    });


  DJ.x += 25;
}

function per3() {
  swal({
    title: "qual a minha altura?",
    text: "48.858921, 2.293539 me veja e saberá a resposta",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something"
  },
    function (inputValue) {
      if (inputValue === null) return false;

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      if (inputValue === "330 metros") {
        swal("será que sou alta?", "Sua resposta foi:  " + inputValue + ". adivinhar a altura do maior monumento do mundo não é tão difícil");
      } else {
        swal("como é amigo?", "Sua resposta foi:  " + inputValue + ". relaxa cara, é só dar um google, vc acha, vai lá");
      }



    });


  DJ.y += 25;
}

function per4() {
  swal({
    title: "fraqueza que me destruiu",
    text: "ser muito incontrolável deixa eu util sutil, Aquele urgênte imprevisto litoraneo eminente sentiremos",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write something"
  },
    function (inputValue) {
      if (inputValue === null) return false;

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      if (inputValue === "calcanhar") {
        swal("injustos aqueles que me banharam", "Sua resposta foi:  " + inputValue + ". olha só você é bom em enigmas");
      } else {
        swal("vamo lá!!!", "Sua resposta foi:  " + inputValue + ". essa realmente é dificil, analize com mais calma e tente novamente");
      }



    });


  DJ.y += 25;
}

function per5() {

    swal({ 
      title: "a morte eminente",
      text: "as impurezas me consomen, o fogo me mata, os humanos me destroem e eles de mim precisam, estou entre os 8 grandes astros de nosso sistema",
      type: "input", showCancelButton: true, 
      closeOnConfirm: false, 
      animation: "slide-from-top",
       inputPlaceholder: "Write something" 
      },
      function (inputValue) {
        if (inputValue === null)
          return false; if (inputValue === "") {
          swal.showInputError("You need to write something!");
          return false
        }
        if (inputValue === "terra") { swal("cada vez mais me sinto destruída", "Sua resposta foi:  " + inputValue + ". obrigado por entender minhas dores e parabéns você acertou meu pequeno enigma"); }
        else {
          swal("olá, sinto muito por ter errado porém tente. Você consegue!!", "Sua resposta foi:  " + inputValue + ". infelizmente irei durar mais alguns anos, mas digamos que você sem mim não vive");
        }
      });
    DJ.y -= 25;
  
}
