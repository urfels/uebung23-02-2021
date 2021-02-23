function fakultätBerechnen(n){
  var n = document.getElementById("input").value;

  if (n <= 2) {
    document.getElementById("ergebnis").innerHTML = n;
  }
   n*fakultätBerechnen(n-1);
}
