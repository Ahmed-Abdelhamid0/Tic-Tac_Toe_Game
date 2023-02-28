var turn=true;
var turn3=true;
var turn4=true;
var turn2=true;
var Squares=[];
var w = true;
var z = true;
var b = true;
var s= true;
function regame(id){
	/*setTimeout(function(){location.reload()},1000);*/
	location.reload();
}
function reset(A,B,C){
	document.getElementById('game3d'+A).style.color="red";
	document.getElementById('game3d'+B).style.color="red";
	document.getElementById('game3d'+C).style.color="red";
	
} 
function reset2(A,B,C){
	document.getElementById('gamed'+A).style.color="red";
	document.getElementById('gamed'+B).style.color="red";
	document.getElementById('gamed'+C).style.color="red";
	
} 
function reset3(A,B,C,D){
	document.getElementById('game4d'+A).style.color="red";
	document.getElementById('game4d'+B).style.color="red";
	document.getElementById('game4d'+C).style.color="red";
	document.getElementById('game4d'+D).style.color="red";
	
} 
function reset4(A,B,C,D){
	document.getElementById('game44d'+A).style.color="red";
	document.getElementById('game44d'+B).style.color="red";
	document.getElementById('game44d'+C).style.color="red";
	document.getElementById('game44d'+D).style.color="red";
	
} 
function checkwinner(){
	for(var i=1; i<=9; i++){
		Squares[i]=document.getElementById('game3d'+i).innerHTML;
	}
	if(Squares[1]==Squares[2]&&Squares[2]==Squares[3]&&Squares[2]!="" && w)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset(1,2,3);
			document.getElementById("k3").innerHTML="";
			w=!w;
		}
	else if(Squares[1]==Squares[4]&&Squares[4]==Squares[7]&&Squares[1]!="" && w)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset(1,4,7);
			document.getElementById("k3").innerHTML="";
			w=!w;
		}
	else if(Squares[1]==Squares[5]&&Squares[5]==Squares[9]&&Squares[1]!="" && w)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset(1,5,9);
			document.getElementById("k3").innerHTML="";
			w=!w;
		}
	else if(Squares[4]==Squares[5]&&Squares[5]==Squares[6]&&Squares[4]!="" && w)
		{
			document.getElementById("win").innerHTML='player '+Squares[4]+' win'
			reset(4,5,6);
			document.getElementById("k3").innerHTML="";
			w=!w;
		}
	else if(Squares[7]==Squares[8]&&Squares[8]==Squares[9]&&Squares[7]!="" && w)
		{
			document.getElementById("win").innerHTML='player '+Squares[7]+' win'
			reset(7,8,9);
			document.getElementById("k3").innerHTML="";
		w=!w;
		}
	else if(Squares[3]==Squares[6]&&Squares[6]==Squares[9]&&Squares[6]!="" && w)
		{
			document.getElementById("win").innerHTML='player '+Squares[3]+' win'
			reset(3,6,9);
			document.getElementById("k3").innerHTML="";
			w=!w;
		}
	else if(Squares[2]==Squares[5]&&Squares[8]==Squares[5]&&Squares[5]!="" && w)
		{
			document.getElementById("win").innerHTML='player '+Squares[2]+' win'
			reset(2,8,5);
			document.getElementById("k3").innerHTML="";
			w=!w;
		}
	else if(Squares[3]==Squares[5]&&Squares[5]==Squares[7]&&Squares[5]!="" && w)
		{
			document.getElementById("win").innerHTML='player '+Squares[3]+' win'
			reset(3,5,7);
			document.getElementById("k3").innerHTML="";
			w=!w;
		}
}
function checkwinner3(){
	for(var i=1; i<=9; i++){
		Squares[i]=document.getElementById('gamed'+i).innerHTML;
	}
	if(Squares[1]==Squares[2]&&Squares[2]==Squares[3]&&Squares[2]!="" && b)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset2(1,2,3);
			document.getElementById("k3").innerHTML="";
			b=!b;
		}
	else if(Squares[1]==Squares[4]&&Squares[4]==Squares[7]&&Squares[1]!="" && b)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset2(1,4,7);
			document.getElementById("k3").innerHTML="";
			b=!b;
		}
	else if(Squares[1]==Squares[5]&&Squares[5]==Squares[9]&&Squares[1]!="" && b)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset2(1,5,9);
			document.getElementById("k3").innerHTML="";
			b=!b;
		}
	else if(Squares[4]==Squares[5]&&Squares[5]==Squares[6]&&Squares[4]!="" && b)
		{
			document.getElementById("win").innerHTML='player '+Squares[4]+' win'
			reset2(4,5,6);
			document.getElementById("k3").innerHTML="";
			b=!b;
		}
	else if(Squares[7]==Squares[8]&&Squares[8]==Squares[9]&&Squares[7]!="" && b)
		{
			document.getElementById("win").innerHTML='player '+Squares[7]+' win'
			reset2(7,8,9);
			document.getElementById("k3").innerHTML="";
		b=!b;
		}
	else if(Squares[3]==Squares[6]&&Squares[6]==Squares[9]&&Squares[6]!="" && b)
		{
			document.getElementById("win").innerHTML='player '+Squares[3]+' win'
			reset2(3,6,9);
			document.getElementById("k3").innerHTML="";
			b=!b;
		}
	else if(Squares[2]==Squares[5]&&Squares[8]==Squares[5]&&Squares[5]!="" && b)
		{
			document.getElementById("win").innerHTML='player '+Squares[2]+' win'
			reset2(2,8,5);
			document.getElementById("k3").innerHTML="";
			b=!b;
		}
	else if(Squares[3]==Squares[5]&&Squares[5]==Squares[7]&&Squares[5]!="" && b)
		{
			document.getElementById("win").innerHTML='player '+Squares[3]+' win'
			reset2(3,5,7);
			document.getElementById("k3").innerHTML="";
			b=!b;
		}
}

/*check for 4*/
function checkwinner2(){
	for(var i=1; i<=16; i++){
		Squares[i]=document.getElementById('game4d'+i).innerHTML;
	}
	if(Squares[1]==Squares[2]&&Squares[2]==Squares[3] &&Squares[3]==Squares[4] && Squares[1]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win';
			reset3(1,2,3,4);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[5]==Squares[6]&&Squares[6]==Squares[7] &&Squares[7]==Squares[8] && Squares[5]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[5]+' win'
			reset3(5,6,7,8);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[9]==Squares[10]&&Squares[10]==Squares[11] &&Squares[11]==Squares[12] && Squares[9]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[9]+' win'
			reset3(9,10,11,12);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[13]==Squares[14]&&Squares[14]==Squares[15] &&Squares[15]==Squares[16] && Squares[13]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[5]+' win'
			reset3(13,14,15,16);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[1]==Squares[5]&&Squares[5]==Squares[9] &&Squares[9]==Squares[13] && Squares[1]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset3(1,5,9,13);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[2]==Squares[6]&&Squares[6]==Squares[10] &&Squares[10]==Squares[14] && Squares[2]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[2]+' win'
			reset3(2,6,10,14);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[3]==Squares[7]&&Squares[7]==Squares[11] &&Squares[11]==Squares[15] && Squares[3]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[3]+' win'
			reset3(3,7,11,15);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[4]==Squares[8]&&Squares[8]==Squares[12] &&Squares[12]==Squares[16] && Squares[4]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[4]+' win'
			reset3(4,8,12,16);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[1]==Squares[6]&&Squares[6]==Squares[11] &&Squares[11]==Squares[16] && Squares[1]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset3(1,6,11,16);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	if(Squares[4]==Squares[7]&&Squares[7]==Squares[10] &&Squares[10]==Squares[13] && Squares[4]!="" && s)
		{
			document.getElementById("win").innerHTML='player '+Squares[4]+' win'
			reset3(4,7,10,13);
			document.getElementById("k3").innerHTML="";
			s=!s;
		}
	}
function checkwinner4(){
	for(var i=1; i<=16; i++){
		Squares[i]=document.getElementById('game44d'+i).innerHTML;
	}
	if(Squares[1]==Squares[2]&&Squares[2]==Squares[3] &&Squares[3]==Squares[4] && Squares[1]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win';
			reset4(1,2,3,4);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[5]==Squares[6]&&Squares[6]==Squares[7] &&Squares[7]==Squares[8] && Squares[5]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[5]+' win'
			reset4(5,6,7,8);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[9]==Squares[10]&&Squares[10]==Squares[11] &&Squares[11]==Squares[12] && Squares[9]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[9]+' win'
			reset4(9,10,11,12);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[13]==Squares[14]&&Squares[14]==Squares[15] &&Squares[15]==Squares[16] && Squares[13]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[5]+' win'
			reset4(13,14,15,16);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[1]==Squares[5]&&Squares[5]==Squares[9] &&Squares[9]==Squares[13] && Squares[1]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset4(1,5,9,13);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[2]==Squares[6]&&Squares[6]==Squares[10] &&Squares[10]==Squares[14] && Squares[2]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[2]+' win'
			reset4(2,6,10,14);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[3]==Squares[7]&&Squares[7]==Squares[11] &&Squares[11]==Squares[15] && Squares[3]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[3]+' win'
			reset4(3,7,11,15);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[4]==Squares[8]&&Squares[8]==Squares[12] &&Squares[12]==Squares[16] && Squares[4]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[4]+' win'
			reset4(4,8,12,16);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[1]==Squares[6]&&Squares[6]==Squares[11] &&Squares[11]==Squares[16] && Squares[1]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[1]+' win'
			reset4(1,6,11,16);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	if(Squares[4]==Squares[7]&&Squares[7]==Squares[10] &&Squares[10]==Squares[13] && Squares[4]!="" && z)
		{
			document.getElementById("win").innerHTML='player '+Squares[4]+' win'
			reset4(4,7,10,13);
			document.getElementById("k3").innerHTML="";
			z=!z;
		}
	}
function insrt(id){
	var M = document.getElementById(id);
	if(turn && M.innerHTML=="" && w){	
	document.getElementById(id).innerHTML="X";
	document.getElementById("k3").innerHTML="O turn now";	
	document.getElementById(id).style.color="black";
	  turn= !turn;
	} 
	else if(!turn && M.innerHTML=="" && w){
	   document.getElementById(id).innerHTML="O";
		document.getElementById("k3").innerHTML="X turn now";	
		document.getElementById(id).style.color="white";
	   turn=!turn;
	}
	checkwinner();
}
function insrtx2(id){
	var M = document.getElementById(id);
	if(turn3 && M.innerHTML=="" && b){
	 document.getElementById(id).innerHTML="X";
	document.getElementById("k3").innerHTML="O turn now";
	document.getElementById(id).style.color="white";
	  turn3= !turn3;
	} 
	else if(!turn3 && M.innerHTML=="" && b){
	   document.getElementById(id).innerHTML="O";
		document.getElementById("k3").innerHTML="X turn now";	
		document.getElementById(id).style.Color="black";
		
	   turn3=!turn3;
	}
	checkwinner3();
}


/*for play 4*/
function insrt2(id){
	var M = document.getElementById(id);
	if(turn2 && M.innerHTML=="" && s){
	 document.getElementById(id).innerHTML="X";
		document.getElementById("k3").innerHTML="O turn now";
		document.getElementById(id).style.Color="black";
		
	  turn2= !turn2;
	} 
	else if(!turn2 && M.innerHTML=="" && s){
	   document.getElementById(id).innerHTML="O";
		document.getElementById("k3").innerHTML="X turn now";	
		document.getElementById(id).style.color="white";
	   turn2=!turn2;
	}
	checkwinner2();
}
function insrt4(id){
	var M = document.getElementById(id);
	if(turn4 && M.innerHTML=="" && z){
	 document.getElementById(id).innerHTML="X";
		document.getElementById("k3").innerHTML="O turn now";
	document.getElementById(id).style.color="white";
	  turn4= !turn4;
	} 
	else if(!turn4 && M.innerHTML=="" && z){
	   document.getElementById(id).innerHTML="O";
		document.getElementById("k3").innerHTML="X turn now";
		document.getElementById(id).style.color="black";
	   turn4=!turn4;
	}
	checkwinner4();
}