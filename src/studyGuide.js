module.exports = function StudyGuide(){
  let cards = require('../guide');
  let cardArray = Object.values(cards);

  let shuffle = function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
  };

  shuffle(cardArray);

  let sg = {};

  sg.getCard = function(){
    let card = cardArray.shift();
    if(typeof card === "undefined"){
      cardArray = Object.values(cards);
      shuffle(cardArray);
      return sg.getCard();
    }
    return card;
  };
  

  return sg;
};