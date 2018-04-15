setInterval(shimmer, 3000);

function shimmer() {
  var blinky = setInterval(changeLinkColor, 10);
  setTimeout(function off() {
    clearInterval(blinky);
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      if (links[i].href) {
        links[i].onmouseover.style.color = "#0000FF";
      }
    }
  }, 300);
}

function changeLinkColor() {
  function getRandomColor() {
    var letters = '456789ABC'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 9)];
    }
    return color;
  }

  colorLinks(getRandomColor());

  function colorLinks(hex) {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      if (links[i].href) {
        links[i].style.color = hex;
      }
    }
  }
}