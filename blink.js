(function() {
  var h1 = document.getElementById('h1');
  var color = 'magenta';
  setInterval(function() {
    h1.style.color = color;
    color = (color === 'magenta') ? 'green' : 'magenta';
  }, 500);
})();
