

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


var sillyStory = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertx = ["Willy the Goblin","Big Daddy","Father Christmas"];

var inserty = ["the soup kitchen","Disneyland","the White House"];

var insertz = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
   var finalStory = sillyStory;

var x;
var y;
var z;

x = randomValueFromArray(insertx);
y = randomValueFromArray(inserty);
z = randomValueFromArray(insertz);

finalStory= finalStory.replace(":insertx:",x);
finalStory = finalStory.replace(":inserty:",y);
finalStory = finalStory.replace(":insertz:",z);
finalStory = finalStory.replace(":insertx:",x);



  if(customName.value !== '') {
    const name = customName.value;

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}
