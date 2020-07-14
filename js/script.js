// Boolzap Template JS + jQuery

// Funzione principale

function init() {

  addMessage();
  addMessageByKey();

}

$(document).ready(init);

// Lista funzioni
function addMessage() {
  $('#send-msg').click(function () {

    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();

    var content = $('#content-msg').val();
    var ownerMsg = $('#owner-msg-templ').clone();
    ownerMsg.text(content);
    ownerMsg.append('<span class="hour-msg">' + time + '</span>');
    $('.text-space').append(ownerMsg);
    ownerMsg.show();
    $('#content-msg').val('');
    setTimeout(autoReply, 1000);
  });
}

function addMessageByKey() {
  $(document).keydown(function () {
  var key;
  key = event.which;
  if (key == 13) {
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes();

    var content = $('#content-msg').val();
    var ownerMsg = $('#owner-msg-templ').clone();
    ownerMsg.text(content);
    ownerMsg.append('<span class="hour-msg">' + time + '</span>');
    $('.text-space').append(ownerMsg);
    ownerMsg.show();
    $('#content-msg').val('');
    setTimeout(autoReply, 1000);
  }
});
}

function autoReply() {
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes();

  var contactMsg = $('#contact-msg-templ').clone();
  contactMsg.text('Ok!');
  contactMsg.append('<span class="hour-msg">' + time + '</span>');
  $('.text-space').append(contactMsg);
  contactMsg.show();
}
