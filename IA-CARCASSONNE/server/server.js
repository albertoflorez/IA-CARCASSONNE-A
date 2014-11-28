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

function Ficha(tipo, numFicha, elegible, escudo){
	this.dato=entrada[tipo-1] || [];
	this.tipo=tipo;
	this.elegible=elegible || true; //default true;
	this.escudo=escudo ||false; //default false
	this.numFicha=numFicha; //no default porque sino la ficha madre no toma valor
};
//prototype

function generarMazo(){
	cont=0
	//genera mazo ordenado, de forma que la primera ficha es la ficha madre
	//recorremos los tipos
	for (i=1; i<=tipos; i++){
		//nomales
		console.log("fichas normales tipo "+i+" : "+entrada[i-1].cantidad[0])
		for(cn=1; cn<=entrada[i-1].cantidad[0];cn++){
			var nuevaFicha=new Ficha(i, cont, true, false);
			mazo.push(nuevaFicha);
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

function dameFichaMadre(){
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

function dameFicha(){
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
			mazo.splice(numeroFicha,1);
			return fichaaux;
		}
	}
};



