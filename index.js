function change1(){
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("code").style.display = "none";
    document.getElementById("copy11").style.display = "block";
    document.getElementById("copy12").style.display = "none";
    document.getElementById("copy13").style.display = "none";
    document.getElementById("buttonhtml").style.color = "none";
    document.getElementById("buttonhtml").style.backgroundColor = "#003f63";
    document.getElementById("buttonhtml").style.color = "#40ff00";
    document.getElementById("buttoncss").style.backgroundColor = "#002a42";
    document.getElementById("buttoncss").style.color = "white";
    document.getElementById("buttonjs").style.backgroundColor = "#002a42";
    document.getElementById("buttonjs").style.color = "white";
    document.getElementById("buttoncode").style.backgroundColor = "#002a42";
    document.getElementById("buttoncode").style.color = "white";
    }
function change2(){
    document.getElementById("js").style.display = "none";
    document.getElementById("css").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("code").style.display = "none";
    document.getElementById("copy11").style.display = "none";
    document.getElementById("copy12").style.display = "block";
    document.getElementById("copy13").style.display = "none";
    document.getElementById("buttonhtml").style.backgroundColor = "#002a42";
    document.getElementById("buttonhtml").style.color = "white";
    document.getElementById("buttoncss").style.backgroundColor = "#003f63";
    document.getElementById("buttoncss").style.color = "#40ff00";
    document.getElementById("buttonjs").style.backgroundColor = "#002a42";
    document.getElementById("buttonjs").style.color = "white";
    document.getElementById("buttoncode").style.backgroundColor = "#002a42";
    document.getElementById("buttoncode").style.color = "white";
    
}
function loader(){
    document.getElementById("loader").style.display = "none";
}
function change3() {
    document.getElementById("js").style.display = "block";
    document.getElementById("css").style.display = "none";
    document.getElementById("html").style.display = "none";
    document.getElementById("code").style.display = "none";
    document.getElementById("copy11").style.display = "none";
    document.getElementById("copy12").style.display = "none";
    document.getElementById("copy13").style.display = "block";
    document.getElementById("buttonhtml").style.backgroundColor = "#002a42";
    document.getElementById("buttonhtml").style.color = "white";
    document.getElementById("buttoncss").style.backgroundColor = "#002a42";
    document.getElementById("buttoncss").style.color = "white";
    document.getElementById("buttonjs").style.backgroundColor = "#003f63";
    document.getElementById("buttonjs").style.color = "#40ff00";
    document.getElementById("buttoncode").style.backgroundColor = "#002a42";
    document.getElementById("buttoncode").style.color = "white";
    }
function change4() {
    document.getElementById("js").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("html").style.display = "none";
    document.getElementById("code").style.display = "block";
    document.getElementById("copy11").style.display = "none";
    document.getElementById("copy12").style.display = "none";
    document.getElementById("copy13").style.display = "none";
    document.getElementById("buttonhtml").style.backgroundColor = "#002a42";
    document.getElementById("buttonhtml").style.color = "white";
    document.getElementById("buttoncss").style.backgroundColor = "#002a42";
    document.getElementById("buttoncss").style.color = "white";
    document.getElementById("buttonjs").style.backgroundColor = "#002a42";
    document.getElementById("buttonjs").style.color = "white";
    document.getElementById("buttoncode").style.backgroundColor = "#003f63";
    document.getElementById("buttoncode").style.color = "#40ff00";
    }
        function copy1() {
            var copyText = document.getElementById("html");
            copyText.select();
            copyText.setSelectionRange(0, 9999999999999999);
            document.execCommand("copy");
              }
              function copy2() {
                  var copyText = document.getElementById("css");
                  copyText.select();
                  copyText.setSelectionRange(0, 9999999999999999);
                  document.execCommand("copy");
                    }
                    function copy3() {
                      var copyText = document.getElementById("js");
                      copyText.select();
                      copyText.setSelectionRange(0, 9999999999999999);
                      document.execCommand("copy");
                        }

