$(document).ready(function () {
	$("body").queryLoader2({'percentage':true, 'backgroundColor':'#0073c5','barColor':'#FFFFFF'});

	var topo = document.getElementById('topo');
	var rodape = document.getElementById('rodape');
	var h1Titulo = document.getElementById('h1Titulo');
	var h2Titulo = document.getElementById('h2Titulo');
	var fonteRodape = document.getElementById('fonte');
	var arteRodape = document.getElementById('arte');
	var conteudoGeral = document.getElementById('container');
	var conteudoInfo = document.getElementById('conteudoInfo');
	if(!temTopo) topo.style.display="none";
	if(!temRodape) rodape.style.display="none";
	h1Titulo.innerHTML = titulo;
	h2Titulo.innerHTML = linhafina;
	conteudoGeral.style.width = Largura + 'px';
	conteudoInfo.style.width = Largura + 'px';

	conteudoInfo.style.border= espessuraBorda + 'px solid ' + corBorda;

	fonteRodape.innerHTML = fonte;
	arteRodape.innerHTML = design;
	if(estatico) conteudoInfo.innerHTML = '<img src="' + imagem + '" alt="" />'
	/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-53772514-1', 'auto');
      ga('send', 'pageview');*/
});