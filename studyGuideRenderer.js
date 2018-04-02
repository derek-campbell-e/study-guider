module.exports = function StudyGuideRenderer (){
  const ipc = require('electron').ipcRenderer;
  let sgr = {};

  sgr.currentCard = {};

  sgr.start = function(event, card){
    sgr.currentCard = card;
    sgr.displayCard();
  };

  sgr.displayCard = function(){
    console.log(sgr.currentCard.panelOrder);
    let html = "";
    for(let panelNameIndex in sgr.currentCard.panelOrder){
      let panelName = sgr.currentCard.panelOrder[panelNameIndex];
      let panelSize = sgr.currentCard.panelSizes[panelNameIndex];
      let cardHtml = "";
      cardHtml += "<div class='card-container "+panelSize+"' data-card-container='"+panelName+"'>";
      cardHtml += sgr.createCard(panelName, sgr.currentCard.panel[panelName]);
      cardHtml += "</div>";
      html += cardHtml;
    }
    $(".study-guide-cards").html(html);
    //sgr.bindFlip();
  };

  sgr.bindFlip = function(){
    $(".card-container").each(function(i, e){
      let cardContainer = $(e);
      cardContainer.flip({trigger: 'manual'});
    });
  };

  sgr.createCard = function(panelName, panelData){
    let template = $(".card-template").clone();
    template.find('.card').attr('data-card', panelName);
    template.find(".card-title").text(panelName);
    template.find('.card-subtitle').text("Guess").show();
    template.find(".card-text").text(panelData).hide();
    template.find('.reveal').attr('data-card-link', panelName);
    return template.html();
  };

  sgr.revealCard = function(e){
    let revealLink = $(this);
    let cardName = revealLink.attr('data-card-link');
    
    $("[data-card='"+cardName+"']").find(".card-text").toggle();
    $("[data-card='"+cardName+"']").find(".card-subtitle").toggle();
    
    //let dom = $("[data-card-container='"+cardName+"']");
    //dom.flip('toggle');

  };

  sgr.nextCard = function(){
    ipc.send('study-guide-next');
  };

  sgr.revealAll = function(){
    $(".card").each(function(i, e){
      let card = $(e);
      card.find(".card-text").show();
      card.find(".card-subtitle").hide();
      //card.find(".reveal").trigger('click');
    });
  };

  let bind = function(){
    $(document).on('click', '.reveal', sgr.revealCard);
    $(document).on('click', '.next-card', sgr.nextCard);
    $(document).on('click', '.reveal-all', sgr.revealAll);
    ipc.on('study-guide-card', sgr.start);
  };

  let init = function(){
    bind();
    ipc.send('study-guide-ready');
    
    return sgr;
  };

  return init();
};