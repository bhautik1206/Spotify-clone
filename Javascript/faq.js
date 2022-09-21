var faq=document.getElementsByClassName("faq-page");
var i;
for(i=0;i<faq.length;i++){
    faq[i].addEventListener("click",function () {
        this.classList.toggle("active");
        var body=this.nextElementSibling;
        if(body.style.display==="block"){
            body.style.display="none";
        }
        else{
            body.style.display="block";
        }
    });
}
window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}