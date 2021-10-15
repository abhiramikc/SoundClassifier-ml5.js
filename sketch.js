let classifier;
const options = {probablityThreashold: 0.7};

let label;
let confidence;

async function preload() {
    classifier = await ml5.soundClassifier('SpeechCommands18w', options,modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
async function setup() {
    classifier = ml5.soundClassifier('SpeechCommands18w', options);
    console.log("setup");
    noCanvas();
    label= document.createElement("DIV");
    label.textContent="label ...";
    confidence=document.createElement("DIV");
    confidence.textContent="confidence ...";


    document.body.appendChild(label);
    document.body.appendChild(confidence);

}
 function gotResult(error,result) {
     console.log('got result');
if(error)
{
    console.log("Error :",error);
}
console.log(result);
label.textContent = `Label: ${result[0].label}`;
confidence.textContent= `Confidence: ${result[0].confidence.toFixed(4)}`;

}