function datumLetzteSeitenAenderung(){
  var lastModified1 = document.lastModified;
  var lastModified = new Date(Date.parse(document.lastModified));
  var tag =  new Array("Sonntag","Montag","Dienstag", "Mittwoch","Donnerstag","Freitag","Samstag");

  var datum = lastModified.getDate();
  var tag = tag[lastModified.getDay()];
  var monat = lastModified.getMonth() + 1;
  var jahr = lastModified.getFullYear();
  var stunden = lastModified.getHours();
  var minuten = lastModified.getMinutes();
  var sekunden = lastModified.getSeconds();

  console.log(lastModified);
  if (tag<10) {
    tag = "0" + tag;

  }
if (monat<10) {
  monat = "0" + monat;

}
  document.getElementById("letzeAenderung").innerHTML = "Diese Datei wurde zuletzt geändert am " + tag + ", den " + datum+"."+monat+ "." +jahr+", " +"um "+ stunden+":"+minuten+":"+sekunden + ".";
}
