function changeToggle() {
  var x = document.getElementById("myToggle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


function myFunction(x) {
           
  console.log("I changed!")
  var y = document.getElementById("navContainer")
  if (y.style.display === "none") {
      y.style.display = "block";
  } else {
      y.style.display = "none";
      
  }

  x.classList.toggle("change");

}

