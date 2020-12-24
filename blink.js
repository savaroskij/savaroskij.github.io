(function() {
  var h1 = document.getElementById('h1');
  var color = 'red';
  setInterval(function() {
    h1.style.color = color;
    color = (color === 'red') ? 'green' : 'red';
  }, 100);
})();
