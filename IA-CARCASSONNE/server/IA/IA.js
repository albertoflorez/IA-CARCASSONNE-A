// Fichero que incluye la lógica del juego.





//******************************* datos ******************************************
var tipos=19;

// fichas
//Ojo entrada[0] es el tipo1, entrada[18] es el tipo19
var entrada=[
	//ciudad con caminos

	//3+1 madre
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato: ['c','c','c','f','r','f','f','f','f','f','r','f', 'r'],
	tipo: 1,
	cantidad:[4,0]
	},

	//3
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato: ['c','c','c','f','f','f','f','r','f','f','r','f', 'r'],
	tipo: 2,
	cantidad:[3,0]
	},
	//3
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato: ['c','c','c','f','r','f','f','r','f','f','f','f', 'r'],
	tipo: 3,
	cantidad:[3,0]
	},
	//3
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','f','r','f','f','r','f','f','r','f', 'x'],
	tipo: 4,
	cantidad:[3,0]
	},
	//3+2con escudo
	//el camino 4-7 está conectado
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','f','r','f','f','r','f','c','c','c', 'f'],
	tipo: 5,
	cantidad:[3,2]
	},
	//1+2con escudo
	//denotado centro como c, el camino se corta en la ciudad
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','c','c','c','f','r','f','c','c','c', 'c'],
	tipo: 6,
	cantidad:[1,2]
	},

//ciudad con campo
	//5
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','f','f','f','f','f','f','f','f','f', 'f'],
	tipo: 7,
	cantidad:[5,0]
	},
	//ojo!!! ficha con dos ciudades independientes

	//2
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','c','c','c','f','f','f','f','f','f', 'f'],
	tipo: 8,
	cantidad:[2,0]
	},
	//3
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','f','f','f','c','c','c','f','f','f', 'f'],
	tipo: 9,
	cantidad:[3,0]
	},
	//3+2con escudo
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','f','f','f','f','f','f','c','c','c', 'f'],
	tipo: 10,
	cantidad:[3,2]
	},
	//1+2con escudo
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['f','f','f','c','c','c','f','f','f','c','c','c','c'],
	tipo: 11,
	cantidad:[1,2]
	},
	//3+1con escudo
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','c','c','c','f','f','f','c','c','c', 'c'],
	tipo: 12,
	cantidad:[3,1]
	},

//ciudad

	//1con escudo
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','c','c','c','c','c','c','c','c','c', 'c'],
	tipo: 13,
	cantidad:[0,1]
	},

//caminos

	//9
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','f','r','f','f','f','f','f','r','f', 'r'],
	tipo: 14,
	cantidad:[9,0]
	},
	//8
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['f','f','f','f','r','f','f','f','f','f','r','f', 'r'],
	tipo: 15,
	cantidad:[8,0]
	},
	//4
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['f','f','f','f','r','f','f','r','f','f','r','f', 'x'],
	tipo: 16,
	cantidad:[4,0]
	},
	//1
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['f','r','f','f','r','f','f','r','f','f','r','f', 'x'],
	tipo: 17,
	cantidad:[1,0]
	},
//monasterio

	//4
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['f','f','f','f','f','f','f','f','f','f','f','f', 'm'],
	tipo: 18,
	cantidad:[4,0]
	},
//monasterio con camino
	//4
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f, elegible (t o f) default t (puede sacarse del mazo)
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo giro escudo elegible
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['f','f','f','f','f','f','f','r','f','f','f','f', 'm'],
	tipo: 19,
	cantidad:[2,0]
	}

];

//**************************** variables *******************************************

var mazo =[];


//************************ funciones generadoras ***********************************

var Ficha = function(tipo, numFicha, elegible, escudo){
	this.dato=entrada[tipo-1] || [];
	this.tipo=tipo;
	this.elegible=elegible || true; //default true;
	this.escudo=escudo ||false; //default false
	this.numFicha=numFicha; //no default porque sino la ficha madre no toma valor
};
//prototype

generarMazo = function (){
	cont=0
	//genera mazo ordenado, de forma que la primera ficha es la ficha madre
	//recorremos los tipos
	for (i=1; i<=tipos; i++){
		//nomales
		console.log("fichas normales tipo "+i+" : "+entrada[i-1].cantidad[0])
		for(cn=1; cn<=entrada[i-1].cantidad[0];cn++){
			mazo.push(new Ficha(i, cont, true, false));
			cont++;
		}
		//con escudo
		for(ce=1; ce<=entrada[i-1].cantidad[1];ce++){
			mazo.push(new Ficha(i, cont, true, true));
			cont++
		}
	}
	console.log("generadas "+cont+" fichas." )
};


//***************************** funciones no generadoras ***************************

dameFichaMadre = function(){
	console.log("devuelta ficha madre")
	//almaceno ficha en aux antes de sacarla para no perderla
	fichaaux=mazo[0];
	//compruebo que es la ficha madre
	if(fichaaux.numFicha==0){
		//saco la ficha del mazo splice(indice a borrar, numero de elementos a borrar) 
		mazo.splice(0, 1);
		return fichaaux;
	}else{
		return "La ficha madre no se encuentra en el mazo";
	}

};

dameFicha = function(){
	//devuelve una ficha aleatoria, no la inserta en el tablero!! eso lo hará otro método
	continuar=true;
	while(continuar){
		console.log("el mazo tiene "+ mazo.length +" fichas");
		numeroFicha=Math.floor(Math.random()*mazo.length);
		console.log("generado "+numeroFicha);
		fichaaux=mazo[numeroFicha];
		//compruebo que la ficha es elegible
		if(fichaaux.elegible){
			console.log("devuelta ficha numero"+fichaaux.numFicha);
			//ya está elegida, por lo que no se la puede elegir
			fichaaux.elegible=false; 
			continuar=false;
			//saco la ficha del mazo splice(indice a borrar, numero de elementos a borrar)
			mazo.splice(numeroFicha,1); //la ficha deberia de borrarse del mazo cuando esté puesta en el tablero.
			return fichaaux;
		}
	}
};

//******* tablero *********
//el tablero tendrá dim 41 x 41. La ficha madre estará en la posición (21,21). //esto se podrá cambiar.
var Tablero = function(){
	//el array estará formado por celdas en el que se almacena (ficha : {es necesario el tipo de la ficha}, pos: {x,y}).
	var cellSet = [];
	var freePos = [];
	var posiblePos = [];
	var posOcupadas = [];

	var Cell = function(ficha,pos){
		this.ficha = ficha;
		this.pos = pos;
	};

	//coloca una ficha en una posicion.
	this.put = function (ficha,pos){
		if (posiblePos && posiblePos.indexOf(pos)){
			ficha.pos = pos; //añadimos la posicion a la ficha a colocar.
			//añadimos la posición de la ficha para saber que esa posicion ha sido ocupada.
			posOcUpdate (pos);
			//ahora actualizamos las las posiciones libres.
			posFreeUpdate (ficha,pos);
			//añadimos la ficha a fichas colocadas.

			fichas.push(new Cell (ficha,pos));
			//borramos ahora la ficha del Mazo.
		};
	};

	this.posOcUpdate = function(pos){
		posOcupadas.push (pos);
	};

	this.posFreeUpdate = function(ficha,pos){
		//conocemos las posiciones adyacentes a la posicion en la que se va a colocar la ficha.
		var posAd = getPosAd (pos);
		//conocemos las nuevas posiciones libres a añadir.
		var fP = _(posAd).filter(function(pA){
				_(posOcupadas).all(function(pO){ //como mucho son 71 fichas puestas.
					return pO.x != pA.x && pO.y != pA.y;
				});
		});
		//las añadimos.
		_(fP).each (function(p){freePos.push(p)});
	};

	//devuelve las posiciones en las que se puede poner una ficha.
	this.getPosiblePositions = function(ficha){
		//se recorre las posiciones libres y comprueba para cada una si la ficha encaja.
		//si encaja arriba, abajo, izq y derecha encaja.
		//a partir de sus posiciones adyacentes referentes a una posicion libre.
		var posiblePositions = _(freePos).filter (function(pos){
			var posAd = getAd(pos);
			//sacamos las posiciones adyacentes que sí están ocupadas.
			var posMatched = _(posAd).filter (function(pA){
				return _(posOcupadas).any (function(pO){
					return pO.x == pA.x && pO.y == pA.y;
				});
			});
 			//encontramos las fichas correspondientes a las coincidencias.
 			var fichasMatched = _(cellSet).filter (function(c){
 				return _(posMatched).any (function(pm){
 					return pm == c.pos;
 				});
 			});

 			//devuelve true si encaja con todas las fichas puestas que rodean a la posicion indicada.
 			return _(fichasMatched).all(function(f){
 				return encajan(ficha,f,pos,f.pos)
 			});
		});


		var encajan = function(f1,f2,p1,p2){
			var success = false; //no encajan por defecto.
			var conocerUb = function(p1,p2){
				var ub;
				ub = (p1.x < p2.x) ? "r" : "l";
				if (ub == undefined){ //no es horizontal.
					ub = (p1.y < p2.y) ? "d" : "u";
				}
				return ub;
			};
			var ub = conocerUb(p1,p2);

			//conocemos si encaja segun su ubicación. (si tienen las propiedades complementarias).
			switch (ub){
				case "r":
				//el lado derecho de la ficha a poner coincide con el lado izquierdo de la ficha a considerar?.
					success = f1.ru == f2.lu && f1.r == f2.l && f1.rd == f2.ld;
					break;
				case "l":
				//el lado izq de la ficha a poner coincide con el lado derecho de la ficha a considerar?.
					success = f2.ru == f1.lu && f2.r == f1.l && f2.rd == f1.ld;
					break;
				case "d":
				//el lado inferior de la ficha a poner coincide con el lado superior de la ficha a considerar?.
					success = f1.dl == f2.ul && f1.d  == f2.u && f1.dr == f2.ur;
					break;
				case "u":
				//el lado superior de la ficha a poner coincide con el lado inferior de la ficha a considerar?.
					success = f2.dl == f1.ul && f2.d  == f1.u && f2.dr == f1.ur;;
					break;
			}
			return success;
		};

		return posiblePositions;
	};
	var getAd = function(pos){
		//da igual el orden. [u,r,d,l] (en relacion con las coordenadas del canvas, arriba y abajo estan invertidos OJO)
		return [{x: pos.x, y: pos.y-1},
				{x: pos.x+1 ,y: pos.y},
				{x: pos.x ,y: pos.y+1},
				{x: pos.x-1 , y: pos.y}];

	};
	this.getStatus = function(){
		//devuelve una copia del tablero en un momento dado.
		return cellSet;
	}

}


