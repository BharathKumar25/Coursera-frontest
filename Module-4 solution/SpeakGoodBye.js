(function(window){


// var byeSpeaker =

var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'byeSpeaker' object.
var speakWord  = "Good Bye";
    
byeSpeaker.speak= function(name)  {
  console.log(speakWord  + " " + name);
}


// 'byeSpeaker' on the global scope as well.
window.byeSpeaker=byeSpeaker;
}) (window);