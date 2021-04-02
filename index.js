function change1(){
    document.getElementById("html").style.display = "block";
    document.getElementById("css").style.display = "none";
    document.getElementById("js").style.display = "none";
    document.getElementById("code").style.display = "none";
    document.getElementById("copy1").style.display = "none";
    document.getElementById("copy2").style.display = "none";
    document.getElementById("copy3").style.display = "none";
    document.getElementById("br1").style.display = "block";
    document.getElementById("br2").style.display = "block";
    document.getElementById("br3").style.display = "block";
    document.getElementById("br1").style.display = "none";
    document.getElementById("br2").style.display = "none";
    document.getElementById("br3").style.display = "none";
    document.getElementById("br").style.display = "none";
    }
function change2(){
    document.getElementById("js").style.display = "none";
    document.getElementById("css").style.display = "block";
    document.getElementById("html").style.display = "none";
    document.getElementById("code").style.display = "none";
    document.getElementById("copy1").style.display = "none";
    document.getElementById("copy2").style.display = "none";
    document.getElementById("copy3").style.display = "none";
    document.getElementById("br1").style.display = "none";
    document.getElementById("br2").style.display = "none";
    document.getElementById("br3").style.display = "none";
    document.getElementById("br").style.display = "none";
    
}
function loader(){
    document.getElementById("loader").style.display = "none";
}
function change3() {
    document.getElementById("js").style.display = "block";
    document.getElementById("css").style.display = "none";
    document.getElementById("html").style.display = "none";
    document.getElementById("code").style.display = "none";
    document.getElementById("copy1").style.display = "none";
    document.getElementById("copy2").style.display = "none";
    document.getElementById("copy3").style.display = "none";
    document.getElementById("br").style.display = "none";
    document.getElementById("br1").style.display = "none";
    document.getElementById("br2").style.display = "none";
    document.getElementById("br3").style.display = "none";
    }
function change4() {
    document.getElementById("js").style.display = "none";
    document.getElementById("css").style.display = "none";
    document.getElementById("html").style.display = "none";
    document.getElementById("code").style.display = "block";
    document.getElementById("copy1").style.display = "none";
    document.getElementById("copy2").style.display = "none";
    document.getElementById("copy3").style.display = "none";
    document.getElementById("br").style.display = "none";
    document.getElementById("br1").style.display = "none";
    document.getElementById("br2").style.display = "none";
    document.getElementById("br3").style.display = "none";
    }
    function change5() {
        document.getElementById("js").style.display = "none";
        document.getElementById("css").style.display = "none";
        document.getElementById("html").style.display = "none";
        document.getElementById("code").style.display = "none";
        document.getElementById("copy1").style.display = "block";
        document.getElementById("copy2").style.display = "block";
        document.getElementById("copy3").style.display = "block";
        document.getElementById("br").style.display = "block";
        document.getElementById("br1").style.display = "block";
        document.getElementById("br2").style.display = "block";
        document.getElementById("br3").style.display = "block";
        }
    function copy1() {
  var copyText = document.getElementById("html");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
    }
    function copy2() {
        var copyText = document.getElementById("css");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
          }
          function copy3() {
            var copyText = document.getElementById("js");
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
              }