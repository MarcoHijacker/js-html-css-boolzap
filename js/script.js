// Boolzap Template JS + jQuery

// Funzione principale

function init() {

  addMessage();
  addMessageByKey();
  showArrow();
  showMenu();
  deleteMsg();

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
  $(document).keydown(function () {
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
  contactMsg.text('Ok!');
  contactMsg.append('<span class="hour-msg">' + time + '</span>');
  $('.text-space').append(contactMsg);
  contactMsg.show();
}
// Funzione che visualizza i chevron
function showArrow() {
  var ownerMsg = $('div.owner-msg');
  var contactMsg = $('div.contact-msg');

  ownerMsg.mouseover(function() {
    $(this).find('.info-msg').addClass('active');
  });
  contactMsg.mouseover(function() {
    $(this).find('.info-msg').addClass('active');
  });
  ownerMsg.mouseleave(function() {
    $(this).find('.info-msg').removeClass('active');
  });
  contactMsg.mouseleave(function() {
    $(this).find('.info-msg').removeClass('active');
  });

}
// Funzione che visualizza i menu sul click sullo chevron
function showMenu() {
  var ownerArrow = $('div.owner-msg .info-msg');
  var contactArrow = $('div.contact-msg .info-msg');

  ownerArrow.click(function() {
    $(this).next('div').toggleClass('active');
  });
  contactArrow.click(function() {
    $(this).next('div').toggleClass('active');
  });
}
// Funzione che elimina messaggio
function deleteMsg() {
  var ownerDelete = $('div.owner-msg .dropdown-delete');
  var contactDelete = $('div.contact-msg .dropdown-delete');

  ownerDelete.click(function() {
    $(this).parent().parent().remove(); // Il div del messaggio è il 'nonno' del div.dropdown-delete
  });
  contactDelete.click(function() {
    $(this).parent().parent().remove();
  });
}
