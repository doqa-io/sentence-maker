let adjective='little';
let noun='cat';
let verb='drink';
let place='living room';
let adjective2='ugly';
let noun2='dog';

let firstStory = "Once upon a time, there was a(n) "+adjective+" "+noun+" who loved to eat "+noun2+". The "+noun+" lived in a "+place+" and had "+adjective2+" nostrils that blew fire when it was "+verb+".";

console.log("First story: "+firstStory);

const output = document.getElementById('output');

function addStory(title, text) {
  const card = document.createElement('div');
  card.className = 'story-card';
  card.innerHTML = '<h2>' + title + '</h2><p>' + text + '</p>';
  output.appendChild(card);
}

addStory('First Story', firstStory);

adjective='beautiful';
noun='monk';
verb='spat';
place='monastry';
adjective2='tremendous';
noun2='guard';

let secondStory = "Once upon a time, there was a(n) "+adjective+" "+noun+" who loved to eat "+noun2+". The "+noun+" lived in a "+place+" and had "+adjective2+" nostrils that blew fire when it was "+verb+".";

console.log("Second story: "+secondStory);
addStory('Second Story', secondStory);