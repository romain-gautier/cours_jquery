$(function() {

  // Lorsque l'on click sur label
  $('#buttonLabel').click(function(){
    $('hr').after('<div class ="apparition" id="textLabel">Texte du label <input type="text" id="idLabel"> <button id="okLabel" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    $('.apparition').fadeIn('slow'); // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", true);
    $('#okLabel').click(function(){
      $('#gauche').append('<span><strong>' + $('#idLabel').val() + '</strong></span>');
      $('span').append('   ');
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false);
      $('.apparition').fadeOut('slow', function() { // disparition de la zone de saisie dans la partie droite avec fadeOut
        $('#textLabel').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textLabel').remove();
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false);
    });
  });

  // Lorsque l'on click sur zone de texte
  $('#buttonZone').click(function(){
    $('hr').after('<div class="apparition" id="textZone">id zone de texte <input type="text" id="idZone"> <button id="okZone" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    $('.apparition').fadeIn('slow'); // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", true);
    $('#okZone').click(function(){
      $('#gauche').append('<input id="'+ $('#idZone').val() + '" type="text" placeholder="'+ $('#idZone').val() + '"><br><br>');
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false);
      $('.apparition').fadeOut('slow', function() { // disparition de la zone de saisie dans la partie droite avec fadeOut
        $('#textZone').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textZone').remove();
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false);
    });
  });

  // Lorsque l'on click sur Bouton
  $('#buttonBouton').click(function(){
    $('hr').after('<div class = "apparition" id="textBouton">Texte bouton <input type="text" id="idBouton"> <button id="okBouton" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    $('.apparition').fadeIn('slow'); // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", true);
    $('#okBouton').click(function(){
      $('#gauche').append('<button class="btn btn-primary">' + $('#idBouton').val() + '</button><br><br>');
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false);
      $('.apparition').fadeOut('slow', function() { // disparition de la zone de saisie dans la partie droite avec fadeOut
        $('#textBouton').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textBouton').remove();
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false);
    });
  });

  });
