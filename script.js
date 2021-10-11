var coll = document.getElementsByClassName("label");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(){
    var lastElement = this.lastChild;
    var firstElement = this.firstChild.nextElementSibling;
    if(lastElement.classList.contains("hidden"))
    {
      lastElement.classList.remove("hidden");
      lastElement.classList.add("visible");
      firstElement.style.transform = 'rotate(90deg)';
    }
    else
    {
      lastElement.style.fontSize = "0px";
      lastElement.classList.remove("visible");
      lastElement.classList.add("hidden");
      lastElement.style.fonSize = "100px";
      firstElement.style.transform = 'rotate(0deg)';
      lastElement.style.fontSize = "20px";
    }
  });
}