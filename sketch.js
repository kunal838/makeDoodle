let doodleClassifier
let resultsDiv;
function setup() {
  createCanvas(displayWidth, displayHeight-160);
  clearButton = createButton('clear');
  clearButton.mousePressed(clearCanvas);
  background(255);
  doodleClassifier = ml5.imageClassifier('DoodleNet',modelReady);
  resultsDiv = createDiv('model Loading...')
}
function modelReady(){
  console.log("yeah");
  doodleClassifier.classify(canvas,gotResult)
}

function gotResult(error,results) {
  if (error) {
    console.error(error);
    return;
  }
  console.log(results);
  let content = `
  ${results[0].label} 
  ${nf(100 * results[0].confidence,2,1)}%<br/>
  ${results[1].label} 
  ${nf(100 * results[1].confidence,2,1)}%<br/>
  ${results[2].label} 
  ${nf(100 * results[2].confidence,2,1)}%<br/>
  ${results[3].label} 
  ${nf(100 * results[3].confidence,2,1)}%<br/>
  ${results[4].label} 
  ${nf(100 * results[4].confidence,2,1)}%<br/>
  ${results[5].label} 
  ${nf(100 * results[0].confidence,2,1)}%<br/>
 
  `
  resultsDiv.html(content)
  doodleClassifier.classify(canvas,gotResult);


}

function clearCanvas(){
  background(255);
}
function draw() {
  if(mouseIsPressed){
    strokeWeight(12);
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
}