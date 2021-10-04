xhttp = new XMLHttpRequest();

xhttp.onload = function() {
  const obj = JSON.parse(this.responseText)
  document.getElementById("joke").innerHTML = obj.value;
}



function getJoke(){
  xhttp.open("GET", "https://api.chucknorris.io/jokes/random");
  xhttp.send(); 
}
