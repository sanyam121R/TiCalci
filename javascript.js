document.getElementById("totalTip").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("calculate").onclick = function() { calculateTip(); };

function calculateTip() {
    var billAmount = document.getElementById("billamount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var Npeople = document.getElementById("totalPeople").value;

    if(billAmount === " " || serviceQuality == 0){
      window.alert("Please enter some values...");
      return;
    }

    if(Npeople==="" || Npeople <= 1){
        Npeople = 1;
        document.getElementById("each").style.display="none";
    } else {
        document.getElementById("each").style.display="block";
    }

    var total = (billAmount * serviceQuality) / Npeople;
    total = Math.round(total*100) / 100;
    total = total.toFixed(2);

    document.getElementById("totalTip").style.display="block";
    document.getElementById("tip").innerHTML= total;

}
