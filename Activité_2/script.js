$(function() {

  // Lorsque l'on click sur label
  $('#buttonLabel').click(function(){
    $('hr').after('<div class ="apparition" id="textLabel">Texte du label <input type="text" id="idLabel"> <button id="okLabel" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('.apparition').fadeIn('slow');
    $('#idLabel').focus();
    // on désactive les boutons label, zone de texte et bouton et les ombrages
    $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", true).css('box-shadow', 'none');
    // si click sur ok
    $('#okLabel').click(function(){
      $('#gauche').append('<span><strong>' + $('#idLabel').val() + '</strong></span>');
      $('span').append('   ');
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
      // disparition de la zone de saisie dans la partie droite avec fadeOut
      $('.apparition').fadeOut('slow', function() {
        $('#textLabel').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textLabel').remove();
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
    });
  });

  // Lorsque l'on click sur zone de texte
  $('#buttonZone').click(function(){
    $('hr').after('<div class="apparition" id="textZone">id zone de texte <input type="text" id="idZone"> <button id="okZone" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('.apparition').fadeIn('slow');
    $('#idZone').focus();
    // on désactive les boutons label, zone de texte et bouton et les ombrages
    $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", true).css('box-shadow', 'none');
    // si click sur ok
    $('#okZone').click(function(){
      $('#gauche').append('<input id="'+ $('#idZone').val() + '" type="text" placeholder="'+ $('#idZone').val() + '"><br><br>');
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
      // disparition de la zone de saisie dans la partie droite avec fadeOut
      $('.apparition').fadeOut('slow', function() {
        $('#textZone').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textZone').remove();
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
    });
  });

  // Lorsque l'on click sur Bouton
  $('#buttonBouton').click(function(){
    $('hr').after('<div class = "apparition" id="textBouton">Texte bouton <input type="text" id="idBouton"> <button id="okBouton" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('.apparition').fadeIn('slow');
    $('#idBouton').focus();
    // on désactive les boutons label, zone de texte et bouton et les ombrages
    $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", true).css('box-shadow', 'none');
    // si click sur ok
    $('#okBouton').click(function(){
      $('#gauche').append('<button class="btn btn-primary">' + $('#idBouton').val() + '</button><br><br>');
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
      // disparition de la zone de saisie dans la partie droite avec fadeOut
      $('.apparition').fadeOut('slow', function() {
        $('#textBouton').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textBouton').remove();
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
    });
  });

  });
