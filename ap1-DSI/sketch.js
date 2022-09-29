let classifier;
let pred;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  background(128);

  classifier = ml5.imageClassifier('MobileNet', modelReady);

  canvas.drop(carregaImagem);

  pred = select("#prediction")

  container = select("#container");
}

function modelReady(){
  console.log("Modelo Pronto.");
}

function carregaImagem(file) {
  loadImage(file.data, (img) => {
    resizeCanvas(500,img.height*500/img.width);
    image(img,0,0,width,height);
    //predict
    classifier.predict(img, classifierResult)
  });  
}

function classifierResult(err,result) {
  if (err) {
    console.log("Deu erro.")
  }
  else {
    console.log(result);
    pred.html(
    "1ª Possibilidade: " + result[0].label + "<br>" + 
    "Percentual de certeza: " + parseFloat(result[0].confidence*100).toFixed(2) + '%' + "<br><br>" + 

    "2ª Possibilidade: " + result[1].label + "<br>" + 
    "Percentual de certeza: " + parseFloat(result[1].confidence*100).toFixed(2) + '%' + "<br><br>" + 

    "3ª Possibilidade: " + result[2].label + "<br>" +
    "Percentual de certeza: " + parseFloat(result[2].confidence*100).toFixed(2)) + '%' + "<br>"
  }
}