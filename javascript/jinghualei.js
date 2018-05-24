// 刘向明
function animation(obj,opation,sudu,fn){
	clearInterval(obj.time);
	var speed=0;
	var stop=false;				
	obj.time = setInterval(function(){
		var stopall=true;
		for(attr in opation){
			var dqz=parseFloat(getComputedStyle(obj,true)[attr]);
			if(attr == 'opacity'){
				dqz=dqz*100;
			}
			if (sudu) {
				if(dqz<=opation[attr]){
					speed= 10;
				}else{
					speed= -10;
				}
				if (Math.abs(opation[attr]-dqz)<Math.abs(speed)) {
					stop=true;								
				}else{
					stopall=false;
				}
			}else{
				speed=(opation[attr]-dqz)/20;
				speed=speed>0 ? Math.ceil(speed) : Math.floor(speed);
				if (!speed) {
					stop=true;
				}else{
					stopall=false;
				}
			}					
			if(stop){							
				if(attr == 'opacity'){
					obj.style[attr]=opation[attr]/100;
				}else{
					obj.style[attr] = opation[attr]+'px';
				}
			}else{
				if(attr == 'opacity'){
					obj.style[attr]=(dqz+speed)/100;
				}else{
					obj.style[attr] = dqz+speed+'px';
				}
			}
		}
		if (stopall) {
			clearInterval(obj.time);
			if(fn){
				fn();
			}
		}
	},30)
}
window.onscroll = window.onload = function(){
	var oBox = document.getElementById('shouJ');
	var oBtn = document.getElementById('xian');
	var time=null;
	clearInterval(time);
	oBtn.onmouseover = function(){
		clearTimeout(time);
		oBox.style.display = 'block';
	}
	oBtn.onmouseout = function(){
		time=setTimeout(function(){
			oBox.style.display = 'none';
		},500)
	}
	oBox.onmouseover = function(){
		clearTimeout(time);
		oBox.style.display = 'block';
	}
	oBox.onmouseout = function(){
		time=setTimeout(function(){
			oBox.style.display = 'none';
		},500)
	}
	var oTop=document.getElementById('jstop');
	var gHeight=document.body.scrollTop || document.documentElement.scrollTop;
	if(gHeight>100){
		animation(oTop,{'gHeight':90});
		oTop.style.top = gHeight+'px';
	}else{
		animation(oTop,{'gHeight':0});
	}
}