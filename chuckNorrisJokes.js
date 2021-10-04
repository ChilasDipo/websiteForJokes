
xhttp = new XMLHttpRequest();

xhttp.onload = function(){
    alert("works")
    document.getElementById("joke").innerHTML = this.responseText;
    }

function loadJoke(){
    alert("works")
    xhttp.open("GET", "https://api.chucknorris.io/jokes/random");
    xhttp.send;
}
