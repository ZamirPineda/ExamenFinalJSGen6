$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash); //this.hash lee el atributo href de este
      $('html, body').animate({ scrollTop: destino.offset().top }, 1000); //Llega a su destino con el tiempo deseado
      return false;
    });
  });

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
  let ubicacionScroll = window.pageYOffset;
  if(ubicacionPrincipal >= ubicacionScroll){
    document.getElementById('header-menu').style.top= '0';
  }
  else{
    document.getElementById('header-menu').style.top= '-200px';
  }
  ubicacionPrincipal = ubicacionScroll;
}
