$(function() {
  // Lorsque l'on click sur label
  $('#buttonLabel').click(function(){
    $('hr').after('<div id="textLabel">Texte du label <input type="text" id="idLabel"> <button id="okLabel" class="btn btn-default">Ok</button></div>');
    $('#okLabel').click(function(){
      $('#gauche').append('<span><strong>' + $('#idLabel').val() + '</strong></span>');
      $('span').append('   ');
      $('#textLabel').remove();
    });
  });

  // Lorsque l'on click sur zone de texte
  $('#buttonZone').click(function(){
    $('hr').after('<div id="textZone">id zone de texte <input type="text" id="idZone"> <button id="okZone" class="btn btn-default">Ok</button></div>');
    $('#okZone').click(function(){
      $('#gauche').append('<input id="'+ $('#idZone').val() + '" type="text"><br><br>');
      $('#textZone').remove();
    });
  });

  // Lorsque l'on click sur Bouton
  $('#buttonBouton').click(function(){
    $('hr').after('<div id="textBouton">Texte bouton <input type="text" id="idBouton"> <button id="okBouton" class="btn btn-default">Ok</button></div>');
    $('#okBouton').click(function(){
      $('#gauche').append('<button class="btn btn-primary">' + $('#idBouton').val() + '</button><br><br>');
      $('#textBouton').remove();
    });
  });

  });
