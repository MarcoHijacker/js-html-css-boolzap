// Boolzap Template JS + jQuery

// Funzione principale

function init() {

  addMessage();
  addMessageByKey();
  showArrow();
  showMenu();
  deleteMsg();
  liveSearch();

}

$(document).ready(init);

// Lista funzioni
// Funzione di aggiunta messaggio con il bottone di send
function addMessage() {
  $('#send-msg').click(function () {
    var content = $('#content-msg').val();

    if(content) {
      var dt = new Date();
      var time = dt.getHours() + ":" + dt.getMinutes();
      var content = $('#content-msg').val();
      var ownerMsg = $('#owner-msg-templ').clone();

      ownerMsg.find('#owner-msg-cont').text(content);
      ownerMsg.find('#owner-msg-hour').text(time);
      $('.text-space').append(ownerMsg);
      ownerMsg.show();
      $('#content-msg').val('');
      setTimeout(autoReply, 1000);
    }
  });
}
// Funzione di aggiunta messaggio con il tasto invio
function addMessageByKey() {
  $('#content-msg').keydown(function () {
  var key = event.which;
  var content = $('#content-msg').val();

  if (key == 13 && content) {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();
    var ownerMsg = $('#owner-msg-templ').clone();

    ownerMsg.find('#owner-msg-cont').text(content);
    ownerMsg.find('#owner-msg-hour').text(time);
    $('.text-space').append(ownerMsg);
    ownerMsg.show();
    $('#content-msg').val('');
    setTimeout(autoReply, 1000);
  }
});
}
// Funzione di autorisposta 'Ok!'
function autoReply() {
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes();
  var contactMsg = $('#contact-msg-templ').clone();

  contactMsg.find('#contact-msg-cont').text('Ok!');
  contactMsg.find('#contact-msg-hour').text(time);
  $('.text-space').append(contactMsg);
  contactMsg.show();
}
// Funzione che visualizza i chevron
function showArrow() {
  $(document).on('mouseover', 'div.owner-msg', function() {
    $(this).find('.info-msg').addClass('active');
  });
  $(document).on('mouseover', 'div.contact-msg', function() {
    $(this).find('.info-msg').addClass('active');
  });
  $(document).on('mouseleave', 'div.owner-msg', function() {
    $(this).find('.info-msg').removeClass('active');
  });
  $(document).on('mouseleave', 'div.contact-msg', function() {
    $(this).find('.info-msg').removeClass('active');
  });
}
// Funzione che visualizza i menu sul click sullo chevron
function showMenu() {
  $(document).on('click', 'div.owner-msg .info-msg', function() {
    $(this).next('div').toggleClass('active');
  });
  $(document).on('click', 'div.contact-msg .info-msg', function() {
    $(this).next('div').toggleClass('active');
  });
}
// Funzione che elimina messaggio
function deleteMsg() {
  $(document).on('click', 'div.owner-msg .dropdown-delete', function() {
    $(this).parent().parent().remove();
  });
  $(document).on('click', 'div.contact-msg .dropdown-delete', function() {
    $(this).parent().parent().remove();
  });
}
// Funzione per cercare conversazioni
// Non l'ho fatta io, l'ho solo adattata al mio html. Recuperata da: https://www.w3schools.com/jquery/jquery_filters.asp
function liveSearch() {
  var convArray = $('.contact-area .contact-conv .field-info .field-name');

  $('#search-conv').keydown(function() {
    var key = event.which;

    if(key == 13) {
      $("#search-conv").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".contact-area .field-name").filter(function() {
          $(this).parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    }
  });
}
