// Detecting Button Press

// var a = prompt("Enter Your Name:");

// var firstLetter = a.slice(0, 1);
// var remainingLetter = a.slice(1, a.length);
// var finalName = firstLetter.toUpperCase() + remainingLetter.toLowerCase();

// document.querySelector("h1").innerHTML =
//   "Welcome " + finalName + "! Play Your Own Music 🎶";

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    soundMaker(buttonInnerHTML);

    addAnimation(buttonInnerHTML);
  });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function (event) {
  soundMaker(event.key);

  addAnimation(event.key);
});

// Function For Making Sound

function soundMaker(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

// Adding animation to pressed button

function addAnimation(currentKey) {
  var keyPressed = document.querySelector("." + currentKey);
  keyPressed.classList.add("pressed");

  setTimeout(function () {
    keyPressed.classList.remove("pressed");
  }, 100);
}
