function carregar()
{
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#imagem');

    var data = new Date();
    var hora = data.getHours();
     

     msg.innerHTML = `Agora são ${hora} horas`

     if (hora >= 0 && hora < 12) {
         //Bom dia
         img.src = 'foto_manha.png'
         document.body.style.backgroundColor = '#fdc067'
     } else if (hora >= 12 && hora < 18){
         //Boa tarde
         img.src = 'foto_tarde.png'
         document.body.style.backgroundColor = '#8e5a66'
     } else {
         //Boa noite
         img.src = 'foto_noite.png'
         document.body.style.backgroundColor = '#352a46'
     }

}
