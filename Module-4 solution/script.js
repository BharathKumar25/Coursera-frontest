(function () {

var names = ["Yaakov", "Jack", "John", "Janeen", "Peter", "Fred", "Lade", "Paulie", "Laure", "Jonas"];


for (var i = 0; i < names.length; i++) {

 
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    speakHello.speak(names[i]);
  }
}

})();