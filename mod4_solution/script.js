(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (theName in names) {
    var firstLetter = names[theName].toLowerCase().charAt()

    if (firstLetter == "j") {
      byeSpeaker.speak(names[theName])
    } else {
      helloSpeaker.speak(names[theName])
    }
  }
  
})();

