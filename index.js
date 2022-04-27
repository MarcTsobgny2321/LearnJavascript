const link=document.getElementById('monLien');
t=0;
function stchiw() {
    if (t==0) {
        t=1;
    } else if(t==1) {
        t=0;
    }
}
link.addEventListener('click' , function() {
    if (t==0) {
        
    link.innerHTML="C'est cliqué";
    stchiw();

    } else {  

    link.innerHTML="Désactivé !";
    stchiw();
    }
});