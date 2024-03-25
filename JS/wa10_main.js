///1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


///2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertX: went for a walk to get some flowers. When they got to :insertY:, they realized they had no money, then :insertZ:. Bob saw the whole thing and offered to buy the flowers — they cost 20 dollars, and :insertX: were really cute."

const insertX = ["three raccoons in a trench coat", "an army of squirrels", "two angry geese"] 

const insertY = ["the florist shop", "Trader Joe's", "the flower gardens"] 

const insertZ = ["cried for a long time. Womp womp", "made a grand attempt at stealing the flowers", "begged other shoppers to buy the flowers"] 


///3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  console.log("success")

    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertX:', xItem); 
    newStory = newStory.replaceAll(':insertY:', yItem); 
    newStory = newStory.replaceAll(':insertZ:', zItem); 

  if(customName.value !== '') {
    const name = customName.value; 

    newStory = newStory.replaceAll('Bob', name); 
    newStory = newStory.replaceAll(name, name.charAt(0).toUpperCase()+name.slice(1));
  }

  if(document.getElementById("uk").checked) {
    const money = Math.round(15.86); 
    const temperature =  Math.round(34.4444);

    newStory = newStory.replaceAll('20', money);
    newStory = newStory.replaceAll('dollars', 'pounds');
    newStory = newStory.replaceAll('94', temperature); 
    newStory = newStory.replaceAll('fahrenheit', 'centigrade')
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}