$(function() {

  // Lorsque l'on click sur label
  $('#buttonLabel').click(function(){
    $('hr').after('<div class ="apparition" id="textLabel">Texte du label <input type="text" id="idLabel"> <button id="okLabel" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    // création d'une div pour afficher l'aide
    $('.apparition').after('<br> <div id ="help" class="text-justify" style ="color: red"> </div>');
    // mise à jour du texte d'aide dans la div à partir du fichier help.html
    $('#help').hide().load('help.html #label');
    // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('.apparition').fadeIn('slow');
    $('#idLabel').focus();
    // apparition du texte d'aide
    $('#help').fadeIn('slow');

    // on désactive les boutons label, zone de texte et bouton et les ombrages
    $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", true).css('box-shadow', 'none');
    // si click sur ok
    $('#okLabel').click(function(){
      $('#gauche').append('<span><strong>' + $('#idLabel').val() + '</strong></span>');
      $('span').append('   ');
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
      // disparition de la zone de saisie dans la partie droite avec fadeOut
      $('#help').fadeOut('slow');
      $('.apparition').fadeOut('slow', function() {
        $('#textLabel').remove();
        $('#help').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textLabel').remove();
      $('#help').remove();
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
    });
  });

  // Lorsque l'on click sur zone de texte
  $('#buttonZone').click(function(){
    $('hr').after('<div class="apparition" id="textZone">id zone de texte <input type="text" id="idZone"> <button id="okZone" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    // création d'une div pour afficher l'aide
    $('.apparition').after('<br> <div id ="help" class="text-justify" style ="color: red"> </div>');
    // mise à jour du texte d'aide dans la div à partir du fichier help.html
    $('#help').hide().load('help.html #zone');
    // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('.apparition').fadeIn('slow');
    $('#idZone').focus();
    // apparition du texte d'aide
    $('#help').fadeIn('slow');

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
        $('#help').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textZone').remove();
      $('#help').remove();
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
    });
  });

  // Lorsque l'on click sur Bouton
  $('#buttonBouton').click(function(){
    $('hr').after('<div class = "apparition" id="textBouton">Texte bouton <input type="text" id="idBouton"> <button id="okBouton" class="btn btn-default">Ok</button> <button id="nulLabel" class="btn btn-default">Annuler</button></div>');
    // création d'une div pour afficher l'aide
    $('.apparition').after('<br> <div id ="help" class="text-justify" style="color: red"> </div>');
    // mise à jour du texte d'aide dans la div à partir du fichier help.html
    $('#help').hide().load('help.html #bouton');
    // apparition de la zone de saisie qui n'est pas apparente par défaut dans le CSS (display: none)
    $('.apparition').fadeIn('slow');
    $('#idBouton').focus();
    $('#help').fadeIn('slow');

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
        $('#help').remove();
      });
    });
    // si click sur annuler :
    $('#nulLabel').click(function() {
      $('#textBouton').remove();
      $('#help').remove();
      // on réactive les boutons label, zone de texte et bouton et les ombrages
      $('#buttonLabel, #buttonZone, #buttonBouton').prop("disabled", false).removeAttr('style');
    });
  });

  });
