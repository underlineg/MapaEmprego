function main(){

	// If NS -- that is, !IE -- then set up for mouse capture
	var IE = document.all?true:false

	var tooltip = document.getElementById('tooltip');
	var containerSeta = document.getElementById('ConteinerSeta');
	var vagasABCContainer = document.getElementById('vagasABC');
	var vagasDeficientesContainer = document.getElementById('vagasDeficiente');
	var totalVagasContainer = document.getElementById('totalVagas');
	var recuadorTooltip = 90
	for(var i=0, lim = arrItens.length; i < lim; i++){
		var obj = document.getElementById(arrItens[i]._id);
		obj._pos = i;
		obj.onclick = function(){
			AbreLink(this._pos);
			return false;
		}

		obj.onmouseover = function(){
			MoveTooltip(this._pos);
			if(this.id != "estadoSP"){
				
				for(var i=0, lim = arrItens.length-1; i < lim; i++){
					var obj = document.getElementById(arrItens[i]._target);
					TweenLite.to(obj, .3, {css:{alpha:0.5}})
				}
				TweenLite.to("#" + arrItens[this._pos]._target, .3, {css:{alpha:1}})
			}

		}
		obj.onmouseout = function(){
			ParaTooltip();
			if(this._id != "estadoSP"){
				for(var i=0, lim = arrItens.length-1; i < lim; i++){
					var obj = document.getElementById(arrItens[i]._target);
					TweenLite.to(obj, .3, {css:{alpha:1}})
				}
			}
		}
	}

	
	if (!IE) document.captureEvents(Event.MOUSEMOVE);
	document.onmousemove=getMouseCoordinates;

	function AbreLink(n)
	{
		window.open(arrItens[n]._pdf,"_blank");
	};

	function getMouseCoordinates(event)
	{
		ev = event || window.event;
		if(IE)
		{
			tooltip.style.left = ev.clientX -(tooltip.offsetWidth/2)+'px';
			tooltip.style.top = ev.clientY  - (tooltip.offsetHeight) - recuadorTooltip +'px';
			
			containerSeta.style.left=ev.clientX - (containerSeta.offsetWidth/2) +'px';
			containerSeta.style.top=ev.clientY  - recuadorTooltip +'px';
			
		}else
		{
			tooltip.style.left = ev.pageX -(tooltip.offsetWidth/2)+'px';
			tooltip.style.top = ev.pageY - (tooltip.offsetHeight) - recuadorTooltip +'px';
			
			containerSeta.style.left=ev.pageX - (containerSeta.offsetWidth/2) +'px';
			containerSeta.style.top=ev.pageY - recuadorTooltip +'px';
		};	
	};

	function MoveTooltip(n)
	{
		tooltip.innerHTML = arrItens[n]._vagas;
		tooltip.style.display='block';
		containerSeta.style.display='block';
	};

	function ParaTooltip()
	{
		tooltip.style.display='none';
		containerSeta.style.display='none';
	}			

	//recuperar depois
	vagasABCContainer.innerHTML = VagasABC;
	vagasDeficientesContainer.innerHTML = vagasDeficientes;
	totalVagasContainer.innerHTML = totalVagas

	
}

window.onload = main;