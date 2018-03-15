var data = "%data%";

var imagens = [
    {
      titulo : "8 de março.",
      nomeArquivo : "Mulher.png",
      alt : "Homenagem ao dia das mulheres."
    }
];

imagens.display = function(){
  var parte1 = '';
  var parte2 = '';
  var parte3 = '';
  var total = '';

  if(imagens.length > 0){
    for(var i = 0; i < imagens.length; i++){
      parte1 = GaleriaParte1.replace(data,imagens[i].nomeArquivo);
      parte2 = GaleriaParte2.replace(data,imagens[i].alt);
      parte3 = GaleriaParte3.replace(data,imagens[i].titulo);
      total = parte1 + parte2 + parte3;
      $("#gal").append(total);
    }
  }
};

imagens.display();
