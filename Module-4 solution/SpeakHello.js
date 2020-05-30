(function (window){
    // speakHello variale is created for attaching the input which will be called
    var speakHello = {};
    // wordSpeak is the variable to call hello string and finally gets initialized for the name
    var wordSpeak = "Hello";
speakHello.speak = function(name){
    console.log(wordSpeak + " " + name);
}
window.speakHello = speakHello;
})(window);