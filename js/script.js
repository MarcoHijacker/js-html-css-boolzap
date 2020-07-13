// Boolzap Template JS + jQuery

// Funzione principale

function init() {

  addMessage();

}

$(document).ready(init);

// Lista funzioni
function addMessage() {
  $('#send-msg').click(function () {
    var content = $('#content-msg').val();
    var ownerMsg = $('#owner-msg-templ').clone();
    ownerMsg.text(content);
    ownerMsg.append('<span class="hour-msg">HH:mm</span>');
    $('.text-space').append(ownerMsg);
    ownerMsg.show();
    $('#content-msg').val('');
  });
}
