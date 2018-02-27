window.onload=ventana;

	function ventana(){

	var C=document.getElementById("lienzo")
	C.width=500
	C.height=500
	contexto=C.getContext('2d')
	C.color="#121212"
	contexto.fillStyle=("rgb(10,10,10)")
	contexto.fillRect(0,0,C.width,C.height)
	document.addEventListener("keydown",keyPush)
	

	Nceldas=20
	long=C.width/Nceldas

	function cabeza(x,y){
		contexto.fillStyle=("rgb(10,240,10)")
		contexto.fillRect(x*long,y*long,long-1,long-1)
	}

	function cola(x,y){
		contexto.fillStyle=("rgb(10,10,10)")
		contexto.fillRect(x*long,y*long,long,long)
	}


	function fruta(x,y){
		contexto.fillStyle=("rgb(200,10,10)")
		contexto.fillRect(x*long,y*long,long,long)
	}


	function puntaje(puntos){

	var cuadro_puntos=document.getElementById("puntaje")
	cuadro_puntos.height=30
	cuadro_puntos.width=500
	contexto2=cuadro_puntos.getContext('2d')
	contexto2.fillStyle="rgb(5,5,5)"
	contexto2.fillRect(0,0,cuadro_puntos.width,30)
	contexto2.fillStyle="rgb(20,250,50)"
	contexto2.font="15px arial";
	contexto2.fillText("score: "+ puntos,4/5*cuadro_puntos.width,20)
	}


	//función que le cambia el sentido a la culebrita cuando se hunden las flechitas del teclado
	function keyPush(evt){
		switch (evt.keyCode){

		case 39:
			if (dx!=-1){
				dx=1;dy=0}
		break;

		case 37:
			if(dx!=1){
				dx=-1,dy=0}
		break;

		case 38:
			if (dy!=1){
				dx=0;dy=-1}
		break;
		case 40:
			if(dy!=-1){
				dx=0;dy=1}
		break;
		}

	}

		//se inicia en esta posición
		function empezar(){
			
			for (var i=0;i<camino.length-1;i++){

				cola(camino[i][0],camino[i][1])
				cola(Pfruta[0],Pfruta[1])

			}

			cabeza(0,1)
			cabeza(1,1)
			cabeza(2,1)
			cabeza(3,1)
			cabeza(4,1)
			cabeza(5,1)
			puntos=(0)
			cabezax=6
			cabezay=1
			dx=1	
			dy=0
			camino=[[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1]]
			Pfruta=[Math.floor(Math.random()*Nceldas),Math.floor(Math.random()*Nceldas)]
			fruta(Pfruta[0],Pfruta[1])	
		}
		

	cabeza(0,1)
	cabeza(1,1)
	cabeza(2,1)
	cabeza(3,1)
	cabeza(4,1)
	cabeza(5,1)

	puntos=(0)
	cabezax=6
	cabezay=1
	dx=1	
	dy=0
	var camino=[[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1]]
	var Pfruta=[Math.floor(Math.random()*Nceldas),Math.floor(Math.random()*Nceldas)]
	fruta(Pfruta[0],Pfruta[1])	

	function juego(){

		//mover la cabeza y la cola en la siguiente posición
		cabeza(camino[camino.length-1][0],camino[camino.length-1][1])
		cola(camino[0][0],camino[0][1])



		
		
		for (var i=0;i<camino.length-1;i++){
			camino[i]=camino[i+1];
				}

		cabezax=cabezax+dx
		cabezay=cabezay+dy

		//hacer que aparezca al otro lado de la pantalla cuando termine
		//-----------------------------------------------------------
			if (cabezax>=Nceldas){
				cabezax=0;
				}
			if (cabezax<0){
				cabezax=Nceldas;
							}
			if (cabezay>=Nceldas){
				cabezay=0;
			}
			if (cabezay<0){
				cabezay=Nceldas;
			}
		//---------------------------------------------------------



		//hacer que busque si la posición de la cabeza es la misma de algo del cuerpo
		for (var i=0;i<camino.length-1;i++){
			if (camino[i][0]==cabezax && camino[i][1]==cabezay){
				confirm("¡perdiste!")
				empezar()
				console.log(camino)
			}
				


		// si la culebra se come una fruta aparce una nueva en un luga aleatorio y se le pone otro cuadrio a la culebra
			else if (( camino[i][0]==Pfruta[0] && camino[i][1]==Pfruta[1] ) || (cabezax==Pfruta[0] && cabezay==Pfruta[1])){
				Pfruta=[Math.floor(Math.random()*Nceldas),Math.floor(Math.random()*Nceldas)];
				fruta(Pfruta[0],Pfruta[1]);
				puntos++

				camino.push([cabezax+dx,cabezay+dy])
			}

			
			// si no se come una fruta ni se choca, sigue su camino normalmente.	
			else {camino[camino.length-1]=[cabezax,cabezay]}


			}
			
		puntaje(puntos)

		}

	


setInterval(juego,120)

 
	
	}
	
function derecha(){
		if (dx!=-1){
			dx=1;dy=0
		}
	}

	function izquierda(){
		if(dx!=1){
			dx=-1,dy=0
		}
	}
	

	function arriba(){
		if (dy!=1){
			dx=0;dy=-1
		}
	}
	
	function abajo(){
		if(dy!=-1){
			dx=0;dy=1


		}
	}


