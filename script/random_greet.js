function random_greet() {
  adjs = [ "buon", "felice" , "gioioso"];
  adj1 = adjs[Math.floor(Math.random() * adjs.length)];
  adj2 = adjs[Math.floor(Math.random() * adjs.length)];
  document.getElementById("greet").innerHTML = "Tanti auguri di un " + adj1 + " Natale e di un " + adj2 + " anno nuovo.";
}
