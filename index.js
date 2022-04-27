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

let elt = document.getElementById("bt");
elt.addEventListener('mousemove', function(event) {
    const x = event.offsetX; // Coordonnée X de la souris dans l'élément
    const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
    console.log("("+x+";"+y+")");
});


fetch('https://mockbin.com/request')
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
  