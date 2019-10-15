'use strict';

function giveCompliment(name) {
    const compliments = ['great', 'cool', 'funky', 'sick', 'mega', 'really cool', 'haha yeha man', 'mad', 'wicked', 'oh yeah'];
    let randomCompliment = Math.floor(Math.random() * 10);
    console.log(`You are ${compliments[randomCompliment]} ${name}`); 
}

for (var i = 0; i < 3; i++) {
    giveCompliment('lochie');
}