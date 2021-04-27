function szamol() {
    var letszam = document.getElementById("letszam").value;
    var ejszaka = document.getElementById("letszam").value;
    var orszag = document.getElementById("letszam").value;
    var fizetendo;

    //--számolás--
      fizetendo = letszam * ejszaka;
    //------------
    document.getElementById('eredmeny').value = fizetendo+" Ft";
    
}