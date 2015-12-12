$(document).ready(function(){
  var fbase = new Firebase("https://a1amv4xmkw6.firebaseio-demo.com/");

  $('#messageInput').keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      fbase.push({name: name, text: text});
      $('#messageInput').val('');
    }
      });
  fbase.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
});

function displayChatMessage(name, text){
  var para1 = $("<p>").html("Name: " + name);
  var para2 = $("<p>").html("Text: " + text);
  var para3 = $("<p>").html("");
  $("body").append(para1).append(para2).append(para3);
}

});