// Fichero que incluye la lógica del juego.

//*************************************************************************
//*                                                                       *
//*                              DATOS                                    *
//*                                                                       *
//*************************************************************************

var tipos=19;

// fichas
//Ojo entrada[0] es el tipo1, entrada[18] es el tipo19
var entrada=[
	//ciudad con caminos

	//3+1 madre
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		 //	 0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','f','r','f','f','f','f','f','r','f', 'r'],
	pdato: [1,1,1,1,1,2,2,2,2,2,1,1, 1],
	tipo: 1,
	cantidad:[4,0]
	},

	//3
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{dato: ['c','c','c','f','f','f','f','r','f','f','r','f', 'r'],
	pdato: [1,1,1,1,1,1,1,1,2,2,1,1, 1],
	tipo: 2,
	cantidad:[3,0]
	},
	//3
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','f','r','f','f','r','f','f','f','f', 'r'],
	pdato: [1,1,1,1,1,2,2,1,1,1,1,1, 1],
	tipo: 3,
	cantidad:[3,0]
	},
	//3
	//tipo problematico para el control de campo
	//ojo que tiene 3 caminos independientes y el centro pertenece al campo 1!! para que se pueda calcular que continúa el campo!!!!
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','f','r','f','f','r','f','f','r','f', 'x'],
	pdato: [1,1,1,1,1,2,2,2,3,3,3,1, 1],
	tipo: 4,
	cantidad:[3,0]
	},
	//3+2con escudo
	//el camino 4-7 está conectado
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','f','r','f','f','r','f','c','c','c', 'f'],
	pdato: [1,1,1,1,1,2,2,1,1,1,1,1, 1],
	tipo: 5,
	cantidad:[3,2]
	},
	//1+2con escudo
	//denotado centro como c, el camino se corta en la ciudad
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','c','c','c','f','r','f','c','c','c', 'c'],
	pdato: [1,1,1,1,1,1,1,1,2,1,1,1, 1],
	tipo: 6,
	cantidad:[1,2]
	},

//ciudad con campo
	//5
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','f','f','f','f','f','f','f','f','f', 'f'],
	pdato: [1,1,1,1,1,1,1,1,1,1,1,1, 1],
	tipo: 7,
	cantidad:[5,0]
	},
	//ojo!!! ficha con dos ciudades independientes

	//2
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','c','c','c','f','f','f','f','f','f', 'f'],
	pdato: [1,1,1,2,2,2,1,1,1,1,1,1, 1],
	tipo: 8,
	cantidad:[2,0]
	},
	//3
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','f','f','f','c','c','c','f','f','f', 'f'],
	pdato: [1,1,1,1,1,1,2,2,2,1,1,1, 1],
	tipo: 9,
	cantidad:[3,0]
	},
	//3+2con escudo
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','f','f','f','f','f','f','c','c','c', 'f'],
	pdato: [1,1,1,1,1,1,1,1,1,1,1,1, 1],
	tipo: 10,
	cantidad:[3,2]
	},
	//1+2con escudo
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['f','f','f','c','c','c','f','f','f','c','c','c','c'],
	pdato: [1,1,1,1,1,1,2,2,2,1,1,1,1],
	tipo: 11,
	cantidad:[1,2]
	},
	//3+1con escudo
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','c','c','c','f','f','f','c','c','c', 'c'],
	pdato: [1,1,1,1,1,1,1,1,1,1,1,1, 1],
	tipo: 12,
	cantidad:[3,1]
	},

//ciudad

	//1con escudo
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['c','c','c','c','c','c','c','c','c','c','c','c', 'c'],
	pdato: [1,1,1,1,1,1,1,1,1,1,1,1, 1],
	tipo: 13,
	cantidad:[0,1]
	},

//caminos

	//9
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['f','f','f','f','f','f','f','r','f','f','r','f', 'r'],
	pdato: [1,1,1,1,1,1,1,1,2,2,1,1, 1],
	tipo: 14,
	cantidad:[9,0]
	},
	//8
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['f','f','f','f','r','f','f','f','f','f','r','f', 'r'],
	pdato: [1,1,1,1,1,2,2,2,2,2,1,1, 1],
	tipo: 15,
	cantidad:[8,0]
	},
	//4
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['f','f','f','f','r','f','f','r','f','f','r','f', 'x'],
	pdato: [1,1,1,1,1,2,2,2,3,3,3,1, 1],
	tipo: 16,
	cantidad:[4,0]
	},
	//1
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['f','r','f','f','r','f','f','r','f','f','r','f', 'x'],
	pdato: [1,1,2,2,2,3,3,3,4,4,4,1, 1],
	tipo: 17,
	cantidad:[1,0]
	},
//monasterio

	//4
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['f','f','f','f','f','f','f','f','f','f','f','f', 'm'],
	pdato: [1,1,1,1,1,1,1,1,1,1,1,1, 1],
	tipo: 18,
	cantidad:[4,0]
	},
//monasterio con camino
	//4
	//c city(ciudad), r road(camino), f field(campo), m monastery(convento), x cruce de caminos
	//u up, d down, l left, r rigth, tipo (n de sprite), giro (0,1,2,3), escudo (t o f) default f 
	//para aplicar un giro: pos=[posori+(3*giro)]mod 12	
		//	ul 	u 	ur 	ru 	r 	rd 	dr 	d 	dl ld  	l 	lu 	c	tipo  cantidad[normal conEscudo]  
		//	0 	1 	2 	3	4 	5 	6 	7 	8	9	10	11	12
	{
	dato:  ['f','f','f','f','f','f','f','r','f','f','f','f', 'm'],
	pdato: [1,1,1,1,1,1,1,1,1,1,1,1, 1],
	tipo: 19,
	cantidad:[2,0]
	}

];


//*************************************************************************
//*                                                                       *
//*                              FICHA                                    *
//*                                                                       *
//*************************************************************************

function Ficha (tipo, numFicha, escudo, pdato){
	this.dato=entrada[tipo-1].dato || [];
	this.pdato=pdato;
	this.tipo=tipo;
	this.escudo=escudo ||false; //default false
	this.numFicha=numFicha; //no default porque sino la ficha madre no toma valor
	this.giroIU = 0;
	this.seguidor;
};

// girar

Ficha.prototype.aplicarGiro = function(giro){
	this.dato=girarDato(this.dato,giro);
	this.pdato=girarDato(this.pdato,giro);
	//this.seguidor.posSeguidor = (this.seguidor.posSeguidor(posant+(3*giro)) % 12);
}

Ficha.prototype.desaplicarGiro = function(giro){
	this.dato=girarDato(this.dato, ((4-giro) % 4) );
	this.pdato=girarDato(this.pdato, ((4-giro) % 4) );
}

Ficha.prototype.actualizarSeguidor = function(posSeguidor,IdPropietario){
	this.seguidor.posSeguidor = posSeguidor;
	this.seguidor.tipoSeguidor = this.dato[posSeguidor];
	this.seguidor.idJugSeguidor  = IdPropietario;
}

function girarDato(dato, giro){
	var nuevodato=[];
	var posact;
	//que no evalue el último elemento porque es la parte central
	for (posant=0; posant<dato.length-1; posant++){
		//console.log(i);
		posact=((posant+(3*giro)) % 12);
		nuevodato[posact]=dato[posant];
	}
	//ultimo elemento, parte central
	nuevodato[dato.length-1]=dato[dato.length-1];
	return nuevodato;
}


//******* seguidor *******
var Seguidor = function(pos, idJug, numFicha){
	this.posSeguidor = pos;
	this.idJugador = idJug;
	this.numFicha = numFicha;
	console.log("se va a crear un seguidor: pos: " + this.posSeguidor +  ", idJugador: " + this.idJugador + ", numficha: " + this.numFicha);
}

//******* celda *********
var Cell = function(ficha,pos){
		this.ficha = ficha;
		this.pos = pos;
};


//*************************************************************************
//*                                                                       *
//*                               MAZO                                    *
//*                                                                       *
//*************************************************************************

var Mazo = function(){
	this.data = []; //donde estan las fichas.
    this.generate();
}

Mazo.prototype.generate = function(){
	var cont=0;
	//genera mazo ordenado, de forma que la primera ficha es la ficha madre
	//recorremos los tipos
	var cgc=0; //contador de ciudades distintas
	var cgf=0; //contador de campos distintos
	var cgr=0; //contador de caminos distintos
	var cgm=0; //contador de monasterios distintos
	var cgx=0; //contador de cruces distintos
	var nuevaFicha;
	for (i=1; i<=tipos; i++){
		////console.log("----------------------------------------tipo "+i);
		//recojo el dato del tipo actual y el pdato
		datoaux=entrada[i-1].dato;
		pdatoaux=entrada[i-1].pdato;

		//inserto la ficha generada en el mazo
		//nos normal o escudo
		for(nos=0;nos<entrada[i-1].cantidad.length;nos++){
			for(cst=1; cst<=entrada[i-1].cantidad[nos];cst++){
	
				//evaluo todas las casillas dentro de una ficha
				//contadores locales a ficha
				var cfc=0; //contador de ciudades distintas
				var cff=0; //contador de campos distintos
				var cfr=0; //contador de caminos distintos
				var cfm=0; //contador de monasterios distintos
				var cfx=0; //contador de cruces distintos
				var pdato=[];
				for(contaux=0;contaux<pdatoaux.length;contaux++){

					switch (datoaux[contaux]){
					case "c": //ciudad
						cfc = (cfc > pdatoaux[contaux]) ? cfc : pdatoaux[contaux];
						//escribo el nuevo valor en la variable que se le pasará al constructor de Ficha
						pdato[contaux]=cgc+pdatoaux[contaux];
						break;
					//campo
					case "f":
						cff = (cff > pdatoaux[contaux]) ? cff : pdatoaux[contaux];
						pdato[contaux]=cgf+pdatoaux[contaux];
						break;
					//camino
					case "r":
						cfr = (cfr > pdatoaux[contaux]) ? cfr : pdatoaux[contaux];
						pdato[contaux]=cgr+pdatoaux[contaux];
						break;
					//monasterio
					case "m":
						cfm = (cfm > pdatoaux[contaux]) ? cfm : pdatoaux[contaux];
						pdato[contaux]=cgm+pdatoaux[contaux];
						break;
					//cruces
					case "x":
						cfx = (cfx > pdatoaux[contaux]) ? cfx : pdatoaux[contaux];
						pdato[contaux]=cgx+pdatoaux[contaux];
						break;
					}
				}
				//he terminado de evaluar una ficha
				//actualizo contadores globales

				cgc=cgc+cfc; //contador de ciudades distintas
				cgf=cgf+cff; //contador de campos distintos
				cgr=cgr+cfr; //contador de caminos distintos
				cgm=cgm+cfm; //contador de monasterios distintos
				cgx=cgx+cfx; //contador de cruces distintos

				var tieneEscudo=(nos==1);
				nuevaFicha=new Ficha(i, cont, tieneEscudo, pdato)
				this.data.push(nuevaFicha);
				cont++;

				////console.log("--------------------"+cont);
				////console.log(nuevaFicha.dato);
				////console.log(pdatoaux);
				////console.log(nuevaFicha.pdato);
				////console.log("cgc= "+cgc+" cgf= "+cgf+" cgr= "+cgr+" cgm= "+cgm+" cgx= "+cgx);
			}//contador cuantas fichas hay de cada sub tipo dentro del tipo
		}//nos
	}//tipo
	//console.log("generadas "+cont+" fichas." );
	//console.log( +cgc+" porciones de ciudad, "+cgf+" porciones de campo, "+cgr+" porciones de camino, "+cgm+" monasterios y "+cgx+" cruces.");
}

Mazo.prototype.dameFichaMadre = function(){
	var ficha;
	var numFicha = this.data[0].numFicha;
	//compruebo que es la ficha madre
	if(numFicha == 0){
		var ficha = this.data[numFicha];
		this.data.splice (0,1); //eliminamos la ficha madre.
	}
	return ficha;
};

Mazo.prototype.dameFichaMazo = function(){
	var num = Math.floor(Math.random()*this.data.length)
	var ficha = this.data [num];
	this.data.splice(num,1); //eliminamos la ficha del mazo.
	//devuelve una ficha aleatoria, y la guarda en fichaActual
	console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!    la ficha que vamos a poner (que ha salido del mazo): " + ficha.dato);
	return ficha;
};



//*************************************************************************
//*                                                                       *
//*                              TABLERO                                  *
//*                                                                       *
//*************************************************************************

//el tablero tendrá dim 100 x 100. La ficha madre estará en la posición (50,50). //esto se podrá cambiar.
var Tablero = function (partida){
	//el array estará formado por celdas en el que se almacena (ficha : {es necesario el tipo de la ficha}, pos: {x,y}).
    this.partida = partida; 
    this.fichaActual;
    this.mazo = new Mazo();
	this.cellSet = [];    
	this.maxDim = 100;
	//this.posCentral = {x: 49, y: 49};
	this.posCentral = {x: (this.maxDim /2),y: (this.maxDim /2)};
    this.generate();
	this.objetoResumen;
};


Tablero.prototype.generate = function(){
	//para inicializar
	//llamar a poner ficha madre
	this.posFree = [];
	this.posFull = [];
	var fichaMadre = this.mazo.dameFichaMadre();
	//creo que es mejor llamar a this.put(fichaMadre,this.posCentral) AsignarAreas no hara nada, 
	//pero generar y completar si.
	var cellFichaMadre = new Cell(fichaMadre,this.posCentral);
    this.cellSet.push(cellFichaMadre);
    this.updatePosFree(this.posCentral);
    this.posFull.push(this.posCentral);
    console.log("_____________ GENERAMOS AREAS __________________");
    this.generarAreas(fichaMadre);
    console.log("_____________ FIN GENERAR AREAS ________________");
    console.log("_____________ COMPLETAMOS AREAS __________________");
    this.completarAreas(fichaMadre,this.posCentral);
    console.log("_____________ FIN COMPLETAR AREAS ________________");
};

//coloca una ficha en una posicion.
Tablero.prototype.put = function (ficha,pos){
    console.log("se ha llamado a put y la ficha act es: " + ficha.numFicha);
    console.log("ficha act(tipo): " + ficha.tipo);
    console.log("ficha act (dato): " + ficha.dato);
    console.log("ficha act (pdato): " + ficha.pdato);
    if(this.encaja(ficha,pos)){
		if ( !_(this.partida.getJugadorActual().idJugador).isNumber() ){
		    console.log("es un jugador humano y creo un objetoResumen normal.");
			this.objetoResumen = new ObjetoResumen();
		}
    	console.log("la ficha encaja! y se añade al tablero");
		this.cellSet.push(new Cell(ficha,pos));
		this.updatePosFree(pos);
		this.posFull.push(pos);
		console.log(this.posFree);

		console.log("_____________ ASIGNAMOS AREAS __________________");
        this.asignarAreas(ficha,pos);
        console.log("_____________ FIN ASIGNAR AREAS __________________");

        console.log("_____________ GENERAMOS AREAS __________________");
        this.generarAreas(ficha,pos);
        console.log("_____________ FIN GENERAR AREAS ________________");

    	console.log("_____________ UNIFICAMOS AREAS __________________");
        this.unificarAreas();
        console.log("_____________ FIN UNIFICAR AREAS ________________");

		return true;

    }else{
        console.log("la ficha NO encaja!");
    	return false;
	}
}

//Este método genera las áreas libres de la ficha que se ha colocado en el tablero
//Areas libres: zonas de no unión entre fichas adyacentes a la dada. Zonas que no se han
//tenido aún en cuenta a la hora de asignar. 
//Nota: para todas las fichas a excepción de la madre.
Tablero.prototype.generarAreas = function(ficha,pos){
    
	var contieneCiudad = false;
    for(i = 0; i<13; i++){
        var auxData = ficha.dato[i]; 
        var auxPdata = ficha.pdato[i];          
        switch (auxData){
        	//comprobamos si el dato ya estaba propagado, es decir, ya formaba parte de algún área.
        	//si no, creamos un nuevo área.
            case 'f': 
                if (!_(this.partida.listaCampos).any(function(f){
                    return _(f.content).contains(auxPdata);
                })){
                    var nuevoCampo = new Campo(auxPdata);
                    nuevoCampo.add(auxPdata);
					nuevoCampo.partida = this.partida;
                    this.partida.listaCampos.push(nuevoCampo);  
                    console.log("nuevoCampos contenido: " + nuevoCampo.content);                  
                }
                break;
            case 'r':
               if (!_(this.partida.listaCaminos).any(function(r){
                    return _(r.content).contains(auxPdata);
                })){
                    var nuevoCamino = new Camino(auxPdata);
                    nuevoCamino.add(auxPdata); 
					nuevoCamino.partida = this.partida;
                    this.partida.listaCaminos.push(nuevoCamino);  
                    console.log("nuevoCamino contenido: " + nuevoCamino.content);
                    nuevoCamino.idFichas.push(ficha.numFicha);          
                }
                break;
            case 'c':
				contieneCiudad = true;
                if (!_(this.partida.listaCiudades).any(function(c){
                    return _(c.content).contains(auxPdata);
                })){
                    var nuevoCiudad = new Ciudad(auxPdata);
                    nuevoCiudad.add(auxPdata);
					nuevoCiudad.partida = this.partida;
                    this.partida.listaCiudades.push(nuevoCiudad);  
                    console.log("nuevoCiudad contenido: " + nuevoCiudad.content); 
                    nuevoCiudad.idFichas.push(ficha.numFicha);             
                }
                break;
			case 'm':
				var nuevoMonasterio = new Monasterio (auxPdata,pos);
				nuevoMonasterio.partida = this.partida;
				this.partida.listaMonasterios.push(nuevoMonasterio);
				var adyacentesFull = _(this.posFull).filter (function(p){  /////REVISAR!!!
					return _(nuevoMonasterio.posAdyacentes).any (function(pa){
						return pa.x == p.x && pa.y == p.y;
					});
				});
				console.log("estas son las posiciones adyacentes llenas del monasterio cuando se crea: " + adyacentesFull);
				_(adyacentesFull).each(function(pa){ 
					nuevoMonasterio.updateAdyacentes(pa);
				});
				console.log("nuevoMonasterio contenido: " + nuevoMonasterio.content);
				break;
		}   
    }
	if (contieneCiudad){
		console.log("se trata de una ficha con ciudad por lo que asignamos a la ciudad el/los campos que la rodean");
		this.asignarCampoACiudad(ficha);
	}
    console.log("el tamaño de listaCampos es: " + this.partida.listaCampos.length);
    console.log("el tamaño de listaCiudades es: " + this.partida.listaCiudades.length);
    console.log("el tamaño de listaCaminos es: " + this.partida.listaCaminos.length);
}

//Almacena en el content del campo correspondiente los pdatos que pasan a formar parte 
//de él.
Tablero.prototype.asignarCampoAFicha = function(pdatoady,pdatoficha){
    var campo = _(this.partida.listaCampos).find(function(elem){
        return _(elem.content).any (function(subCelda){
           return subCelda == pdatoady;
        });
    });

    if(!_(campo.content).contains(pdatoficha)){
    	console.log("Ahora si que se asigna el pdato a la ciudad.");
        campo.add(pdatoficha);
    }
}

//Almacena en el content del Camino correspondietne los pdatos que pasan a formar parte
//de él.
Tablero.prototype.asignarCaminoAFicha = function(idFicha,pdatoady,pdatoficha){
    var camino = _(this.partida.listaCaminos).find(function(elem){
        return _(elem.content).any (function(subCelda){
           return subCelda == pdatoady;
        });
    });
    console.log("el camino con id: " + camino.id);
    if(!_(camino.content).contains(pdatoficha)){
    	console.log("asignamos el pdato");
        camino.add(pdatoficha);
    }
    //           *****************                ******************                **********************
    //           *****************                ******************                **********************
    //           *****************                ******************                **********************
    //SI ENCONTRAMOS UN FALLO EN SEGUIDOR SABEMOS QUE ES PORQUE ESTA CONDICIÓN NO TIENE PORQUE HACER FALTA 
    //           *****************                ******************                **********************
    //           *****************                ******************                **********************
    //           *****************                ******************                **********************
	if(!_(camino.idFichas).contains(idFicha)){
    	console.log("9999999999999999999999999   el idFicha en camino: " + idFicha);
        camino.idFichas.push(idFicha);
    }
}

//Almacena en el content de la Cuidad correspondiente los pdatos que pasan a formar parte
//de ella.
Tablero.prototype.asignarCiudadAFicha = function(idFicha,pdatoady,pdatoficha){
    var ciudad = _(this.partida.listaCiudades).find(function(elem){
        return _(elem.content).any (function(subCelda){
           return subCelda == pdatoady;
        });
    });
    if(!_(ciudad.content).contains(pdatoficha)){
    	console.log("Ahora si que se asigna el pdato a la ciudad.");
        ciudad.add(pdatoficha);
    }
    //           *****************                ******************                **********************
    //           *****************                ******************                **********************
    //           *****************                ******************                **********************
    //SI ENCONTRAMOS UN FALLO EN SEGUIDOR SABEMOS QUE ES PORQUE ESTA CONDICIÓN NO TIENE PORQUE HACER FALTA 
    //           *****************                ******************                **********************
    //           *****************                ******************                **********************
    //           *****************                ******************                **********************
	if(!_(ciudad.idFichas).contains(idFicha)){
    	console.log("9999999999999999999999999   el idFicha en ciudad: " + idFicha);
        ciudad.idFichas.push(idFicha);
    }
}

//Se encarga de propagar las áreas hacia la ficha que hemos puesto.
Tablero.prototype.propagar = function(ficha, pdatosAdy, pdatosFicha, datosCell){
    console.log("******************      entramos a propagar");
    for (var i = 0; i< 3; i++){
        var pdatoAdy = pdatosAdy[i];
        var pdatoFicha = pdatosFicha [i];
        console.log("******************      entramos al case con :" + datosCell[i]);
        switch(datosCell[i]){
            case 'f':
                console.log("******************           propagamos un campo");
          	    console.log("asignamos a un campo");
                this.asignarCampoAFicha(pdatoAdy,pdatoFicha);
                break;
            case 'r':
            	console.log("asignamos a un camino");
                this.asignarCaminoAFicha(ficha.numFicha,pdatoAdy,pdatoFicha);
                break;
            case 'c':
            	console.log("asignamos a una ciudad");
                this.asignarCiudadAFicha(ficha.numFicha,pdatoAdy,pdatoFicha);
                break;
        }
    }
}

//Este método se encarga de asignar las áreas a la ficha que hemos puesto.
//Dependiendo de las fichas ya colocadas que tenga adyacentes y de su posicion con respecto
//a ellas asigna a las áreas los pdatos correspondientes de la ficha en cuestión.
Tablero.prototype.asignarAreas = function(ficha,pos){
	//cogemos las cellAdyacentes para tener las fichas con las que ha encajado la ficha que hemos puesto.
	//ahora necesitamos asignar los pdatos de la ficha a las areas ya creadas.
    console.log("******************entramos en    AsignarAreas  ");
    var cellAdyacentes = this.getCellAdyacentes(pos);
    console.log("******************   cellAdyacentes  "+ cellAdyacentes +"  pos  "+pos+"  ficha  "+ficha);
    cellAdyacentes.forEach(function(cell){
        var ub = this.conocerUb(cell.pos,pos);
        console.log(" ******************AsignarAreas    ub:   "+ub);
        var pdatosAdy; //los pdatos de la ficha adyacente correspondientes al lado de unión con la ficha.
        var pdatosFicha; //los pdatos de la ficha correspondietnes al lado de unión con la ficha adyacente.
        var datosCell; //los datos de la ficha adyacente correspondientes al lado de unión con la ficha.
        switch(ub){
            case 'r': //la ficha está a la derecha de la adyacente.
                pdatosAdy = [cell.ficha.pdato[3],
                             cell.ficha.pdato[4],
                             cell.ficha.pdato[5]];
                pdatosFicha = [ficha.pdato[11],
                               ficha.pdato[10],
                               ficha.pdato[9]];
                datosCell = [cell.ficha.dato[3],
                             cell.ficha.dato[4],
                             cell.ficha.dato[5]];
                
                break;
            case 'l': //la ficha está a la izq de la adyacente.
                pdatosAdy = [cell.ficha.pdato[11],
                             cell.ficha.pdato[10],
                             cell.ficha.pdato[9]];
                pdatosFicha = [ficha.pdato[3],
                               ficha.pdato[4],
                               ficha.pdato[5]];
                datosCell = [cell.ficha.dato[11],
                             cell.ficha.dato[10],
                             cell.ficha.dato[9]];
                break;
            case 'u': //la ficha está arriba de la adyacente.
                pdatosAdy = [cell.ficha.pdato[0],
                             cell.ficha.pdato[1],
                             cell.ficha.pdato[2]];
                pdatosFicha = [ficha.pdato[8],
                               ficha.pdato[7],
                               ficha.pdato[6]];
                datosCell = [cell.ficha.dato[0],
                             cell.ficha.dato[1],
                             cell.ficha.dato[2]];
                break;
            case 'd': //la ficha está abajo de la adyacente.
                pdatosAdy = [cell.ficha.pdato[8],
                             cell.ficha.pdato[7],
                             cell.ficha.pdato[6]];
                pdatosFicha = [ficha.pdato[0],
                               ficha.pdato[1],
                               ficha.pdato[2]];
                datosCell = [cell.ficha.dato[8],
                             cell.ficha.dato[7],
                             cell.ficha.dato[6]];
                break;
        }
        //propagamos los datos.
        console.log("propagamos los datos:   ficha,pdatosAdy: " + ficha,pdatosAdy + " pdatosFicha: " + pdatosFicha + "  datosCell: " + datosCell);
        this.propagar (ficha,pdatosAdy,pdatosFicha,datosCell);
    },this);
}

//se encarga de llamar a unificarArea para cada tipo de area (campo, camino, ciudad) a partir de las listas
//pertenecientes a la partida.
Tablero.prototype.unificarAreas = function(){
    this.unificarArea(this.partida.listaCampos);
    this.unificarArea(this.partida.listaCiudades);
    this.unificarArea(this.partida.listaCaminos);
}

Tablero.prototype.unificarArea = function(listaAreas){
	var listaAreasABorrar = [];
    _(listaAreas).each(function(a1){
    	//si el area no ha sido unificada en otra la considero.
    	if (!_(listaAreasABorrar).contains(a1)){
        	var listaAreasAUnir = [];
        	listaAreasAUnir =  _(listaAreas).filter(function(a2){
                    if ( (!_(listaAreasABorrar).contains(a2)) && (a2.id != a1.id)){
        	            return a1.isTheSame(a2);
                    }else{
                        return false;   
                    }
            });
        	if (listaAreasAUnir.length >0){
        		//llamo al método unificar del area y le paso el resto de areas que pasan a formar parte de ella.
        	    a1.unificar(listaAreasAUnir);
        	    //actualizamos la lista de las areas a borrar.
        	    listaAreasABorrar.push (listaAreasAUnir);
        	    //unificamos la lista en un array de areas.
                listaAreasABorrar = _(listaAreasABorrar).flatten();
                console.log("las areas a borrar: " + listaAreasABorrar.length);
        	}
       	}
    });
    //borramos las areas que han pasado a formar parte de otras.
    _(listaAreasABorrar).each (function(a){
    	listaAreas.splice(_(listaAreas).indexOf(a),1);
    })
}

//__________________________________________________
Tablero.prototype.completarAreas = function(ficha,pos){
    console.log("++++++++++ en completarareasla ficha: " + ficha + " y la pos: " + pos);
    var cogerUbicacion = function(i){
        var ub;
        if (i == 1){    
            ub = 'u';
		}else if (i == 4){
            ub = 'r';
		}else if (i == 7){
            ub = 'd';
		}else if (i == 10){
            ub = 'l';
		}else{
		    ;
		}
        return ub;
    }

    var terminar = function(ub,pdato,that,pos,area){
        console.log("->->->->->->->->     area:  " + area.id + "   pdato:  " + pdato + "  ub:  " + ub);
        var ady = that.getPosAdByUb(ub,pos);
        area.updateLibres(that.esPosFree(ady));
    }

    var i = 1;
    while(i<ficha.pdato.length-1){
    //for(i=1;i<ficha.pdato.length-1;i=i+3){
        console.log("(·)(·)(·)(·)(·)(·)(·)(·)(·)(·)  i:  " + i + "   ficha pdato:   " + ficha.pdato[i] + "    ficha dato" + ficha.dato[i]);
        switch(ficha.dato[i]){
            case 'r':
                var camino = _(this.partida.listaCaminos).find(function(r){
                    return _(r.content).contains(ficha.pdato[i]);                    
                })
                terminar(cogerUbicacion(i),ficha.pdato[i],this,pos,camino);
                //camino.recuentoPuntos();
                break;
            case 'c': 
                var ciudad = _(this.partida.listaCiudades).find(function(c){
                    return _(c.content).contains(ficha.pdato[i]);                    
                })
                terminar(cogerUbicacion(i),ficha.pdato[i],this,pos,ciudad);
                //ciudad.recuentoPuntos();
                break;
        }
        i = i+3;
    }

    //una vez que tenemos actualizados todos los lados libres de las ciudades y los campos. Cerramos solo aquellos que hayan quedado a 0.
    _(this.partida.listaCiudades).each(function(c){
    	if (c.ladosLibres == 0 && !c.isClosed){ 
    	    console.log("I0O0I0O0I0O0I0O0I0OI0O0I0O0I0O0I0O0I0O0I0O0I");        
    	    console.log("voy a cerrar la ciudad");
    	    c.close();
    	    console.log("I0O0I0O0I0O0I0O0I0OI0O0I0O0I0O0I0O0I0O0I0O0I");
    	}
    });
    _(this.partida.listaCaminos).each(function(r){
    	if (r.ladosLibres == 0 && !r.isClosed) r.close();
    });

    this.completarMonasterios (pos);
};

Tablero.prototype.completarMonasterios = function(pos){
	console.log("entro a completarMonasterios");
	_(this.partida.listaMonasterios).each(function(m){
		console.log("m.adyacentes: " + m.posAdyacentes.length);
		if (_(m.posAdyacentes).any(function(pA){
			return pos.x == pA.x && pos.y == pA.y;
		})){
			m.updateAdyacentes (pos);
			console.log("las posiciones adyacentes ahora son: " + m.posAdyacentes);
		}
	})

}

//devuelve la posición adyacente a un lado dado por ub.
Tablero.prototype.getPosAdByUb = function (ub,pos){
	var p;
	console.log("pos es: " + pos);
	console.log("pos es: x:" + pos.x + " y: " + pos.y);
	switch(ub){
		case 'u':
			p = {x: pos.x, y: pos.y - 1};
			break;
		case 'r':
			p = {x: pos.x + 1, y: pos.y};
			break;
		case 'd':
			p = {x: pos.x, y: pos.y + 1};
			break;
		case 'l':
			p= {x: pos.x - 1, y: pos.y};
	}
	return p;
};

//nos devuelve el array empezando por la de arriba en sentido horario
Tablero.prototype.getPosAdyacentes = function(pos){
	// ************* u,r,d,l ************* //
	//si pos == esquina ==> array long 2,
	//si pos == marco ==> array long 3,
	//otro caso ==> array long 4.
	//de momento solo se comprueba el ultimo caso.
	return [{x:pos.x,y: pos.y -1},
			{x: pos.x+1,y: pos.y}, 
			{x: pos.x , y: pos.y + 1}, 
			{x: pos.x -1,y: pos.y}];
}

Tablero.prototype.updatePosFree = function(pos){
	var pAd = this.getPosAdyacentes(pos);
	//buscamos las pos adyacentes y añadimos solo las que no estan llenas.
	_(pAd).each (function(pA){
		if (!_(this.posFull).any(function(pF){
			return pA.x == pF.x && pA.y == pF.y;
		})){
		    if(!_(this.posFree).any(function(pF){
			    return pA.x == pF.x && pA.y == pF.y;
		    })){
			    this.posFree.push(pA);
			}
		};
	},this);

	this.posFree = _(this.posFree).reject(function(pF){
		return pos.x == pF.x && pos.y == pF.y;
	});


}

Tablero.prototype.esPosFree = function(pos){
	return _(this.posFree).any(function(pF){
		return pos.x == pF.x && pos.y == pF.y;
	});
}
//_______________________________________________________________________
Tablero.prototype.getCellAdyacentes = function(pos){
	var posAd = this.getPosAdyacentes(pos);
	console.log("he sacado las posiciones adyacentes y son:");
	console.log(posAd);
	var cellAdyacentes = _(this.cellSet).filter (function(c){
		//esta función devolverá true si la ficha es la adyacente, es decir,
		//si su posición coincide con alguna de las posiciones adyacentes.
		return _(posAd).any(function(pAd){
			//compruebo si es su posicion.
			return pAd.x == c.pos.x && pAd.y == c.pos.y;
		});
	});
	return cellAdyacentes;
}
//Ubicacion del segundo arg en funcion de la posicion del primero. 
//p2 esta a la "ub" de p1
//de coordenadas se encuentra en la esquina superior izquierda).
Tablero.prototype.conocerUb = function(p1,p2){
	var ub;
	//la ficha adyacente está a la izq o derecha de la ficha a colocar.
	if (p1.y == p2.y){ //es vertical
		ub = (p1.x < p2.x && p1.y == p2.y) ? "r" : "l"; 
	}else{ //es horizontal
		ub = (p1.y < p2.y && p1.x == p2.x) ? "d" : "u";
	}
	return ub;
};

//este método permite saber si dos fichas coinciden o no.
Tablero.prototype.coinciden = function (f1,f2,p1,p2){
	//console.log("comparo con: " + f2.dato);
   //console.log(f1);
	var success = false; //no encajan por defecto.
	//esta funcion nos permite conocer la ubicación de p1 con respecto a p2, es decir, 
	//si p1 esta arriba, abajo, izq y derecha de p2. OJO (arriba y abajo cambian puesto que el origen 
	console.log("pos ficha a poner: " + p1 + ", pos fichaAdyacente: " + p2);

	var ub = this.conocerUb(p1,p2);
	console.log("miramos el lado: " + ub + " de la ficha a poner");
	
	//conocemos si encaja segun su ubicación. (si tienen las propiedades complementarias).
	switch (ub){
		case "r":
			//el lado derecho de la ficha a poner coincide con el lado izquierdo de la ficha a considerar?.
			success = f1.dato[3] == f2.dato[11] && f1.dato[4] == f2.dato[10] && f1.dato[5] == f2.dato[9];
			break;
		case "l":
			//el lado izq de la ficha a poner coincide con el lado derecho de la ficha a considerar?.
			success = f2.dato[3] == f1.dato[11] && f2.dato[4] == f1.dato[10] && f2.dato[5] == f1.dato[9];
			break;
		case "d":
			//el lado inferior de la ficha a poner coincide con el lado superior de la ficha a considerar?.
			success = f1.dato[8] == f2.dato[0] && f1.dato[7]  == f2.dato[1] && f1.dato[6] == f2.dato[2];
			break;
		case "u":
			//el lado superior de la ficha a poner coincide con el lado inferior de la ficha a considerar?.
			success = f2.dato[8] == f1.dato[0] && f2.dato[7]  == f1.dato[1] && f2.dato[6] == f1.dato[2];
			break;
	}
	console.log("coinciden: " + success);
	return success;
};

Tablero.prototype.encaja = function(ficha,pos){
	//busco las fichas que rodean a la posicion en la que quiero insertar la ficha.
	////console.log("ficha a encajar: " + ficha.dato);
    console.log("voy a llamar a getCellAdyacentes");
	var cellAdyacentes = this.getCellAdyacentes (pos);
    console.log("estas son las celdas adyacentes: " + cellAdyacentes + "long : " + cellAdyacentes.length);
    
	//devuelve si encaja con todas las fichas adyacentes.
	var that = this; //necesario para poder llamar a coinciden del tablero en la función del underscore.
	return _(cellAdyacentes).all(function(cAd){
        //console.log(cAd.ficha);
		return that.coinciden (ficha,cAd.ficha,pos,cAd.pos);
	});
}

Tablero.prototype.ponerFicha = function(pos, giro){
    console.log("Posicion en la que queremos poner la ficha: x: " + pos.x + ", y: " + pos.y);
	//this.fichaActual.giroIU = giro;
	console.log("!!!!!!!!!!!!!!!!!!! la ficha actual en poner ficha antes de aplicar el giro es: " + this.fichaActual.dato);
    this.fichaActual.aplicarGiro(giro);
	console.log("!!!!!!!!!!!!!!!!!!! la ficha actual en poner ficha despues de aplicar el giro es: " + this.fichaActual.dato);
    //console.log("ficha actual girada: ",this.fichaActual.dato);
    console.log("vamos a colocar la ficha");
    var posicionValida = _(this.posFree).any(function(pF){
            return pos.x == pF.x && pos.y == pF.y;
        }); 
    console.log("^^^^^^^^^^^^en ponerFicha: se puede ponerficha: " + posicionValida); 
	var success = (posicionValida) ? this.put(this.fichaActual,pos) : posicionValida;
	if(!success){
		this.fichaActual.desaplicarGiro(giro);
	}
	console.log("se ha puesto la ficha??----> " + success + " en {x:" + this.posFull[this.posFull.length-1].x + ", y: "+ this.posFull[this.posFull.length-1].y + "}");
	return success;
}
//_________________________________________________________________________________
Tablero.prototype.ponerSeguidorJugador = function(posSeguidor, IdPropietario){
	var success = true;
	console.log("-------------------- pos seguidor: " + posSeguidor + "idpropietarioes: " + IdPropietario);
	console.log("++++++++++++++++++++ la ficha actual es: " + this.fichaActual);
    if (posSeguidor != undefined && IdPropietario != undefined){ //se ha llamado a ponerSeguidor y se quiere poner un seguidor.
    	var jugadorAct = _(this.partida.jugs).find(function(j){
    			return j.idJugador == IdPropietario;
    	});
        console.log("***********************************************************************************************************************");
		success = false;
		if (jugadorAct.numSeguidores > 0){ //si al jugador le quedan seguidores puede poner. Ahora success es false.
			var  dato = this.fichaActual.dato[posSeguidor];
			var area;
			console.log("------------------pdato del area en el que se pone el seguidor: " + this.fichaActual.pdato[posSeguidor]);
			switch(dato){
				case 'r':
					area = _(this.partida.listaCaminos).find(function(r){
						return _(r.content).contains (this.fichaActual.pdato[posSeguidor]);
					},this);
        	    	break;
        	 	case 'c':
					area = _(this.partida.listaCiudades).find(function(c){
						return _(c.content).contains (this.fichaActual.pdato[posSeguidor]);
					},this);
					break;
        		case 'm':
					console.log("QUIERO PONER SEEEEEEEGUIIIIIIDOOOOOOORRRR EN UN MOOOONAAAASTERIOOOOO!!!!");
					
					area = _(this.partida.listaMonasterios).find(function(m){
						return m.id ==  this.fichaActual.pdato[posSeguidor];
					},this);
					console.log("ELMONASTERIOOOOOOOOO ENNNN ELLL QUE VOOOOOYYY A PONER SEGUIDOOOOOOORR!!!: " + area);
					break;
        		case 'f':
					area = _(this.partida.listaCampos).find(function(f){
						return _(f.content).contains (this.fichaActual.pdato[posSeguidor]);
					},this);
				break;
    		}
			if (area && area.propSeguidores.length == 0){ //para que no se pueda poner en un cruce.
			    console.log("area: " + area + "  cuantos seguidores hay en ese area: " + area.propSeguidores.length);
				success = true;
				console.log("en ponerSeguidor de tablero: esta es la ficha en la que se pone: " + this.fichaActual.numFicha);
				var seguidor = new Seguidor (posSeguidor,IdPropietario,this.fichaActual.numFicha);
				area.ponerSeguidor (seguidor);
				var jugad = _(this.partida.jugs).find(function(j){
    	            return j.idJugador == IdPropietario;			
				});
				jugad.numSeguidores--;
			}
		}
	}
	console.log("SE HA PUESTO SEGUIDOR?????????:       " + success);
	return success;
}

Tablero.prototype.ponerSeguidor = function(posSeguidor,IdPropietario){
	var objetoResumen = [];
	var success = this.ponerSeguidorJugador(posSeguidor,IdPropietario);
	if (success){
		this.completarAreas(this.fichaActual,this.posFull[this.posFull.length - 1]); //preguntar. Yo creo que esta condicion no es valida. Se debe llamar siempre.
			
		this.partida.pasarTurno();
		var siguienteJugador = this.partida.getJugadorActual();
		if(siguienteJugador){
		        _(this.partida.jugs).each(function(jug){ this.partida.tablero.objetoResumen.addJugPuntos(jug);},this);
			this.objetoResumen.cambiarIdJug(siguienteJugador.idJugador)
			console.log("Ahora es el fin del turno del jugador humano y el numero de seguidores a quitar es: " + this.objetoResumen.arraySeguidoresQuitar.length);
			objetoResumen.push(this.objetoResumen);
			while( _(siguienteJugador.idJugador).isNumber() ){
				var jugadorIA = this.partida.getJugadorActual();
				jugadorIA.playTurn();
				this.partida.pasarTurno();
				siguienteJugador = this.partida.getJugadorActual();
				if (!siguienteJugador){
					//no hay siguiente jugador porque la partida termina. El id del siguiente es null.
					this.objetoResumen.cambiarIdJug(siguienteJugador); //aqui siguienteJugador == null
				}else{
					//aqui el siguienteJugador es un objeto que tiene idJugador valido.
					this.objetoResumen.cambiarIdJug(siguienteJugador.idJugador);
				}
				_(this.partida.jugs).each(function(jug){ this.partida.tablero.objetoResumen.addJugPuntos(jug);},this);
				console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% AQUI TERMINA EL TURNO DE LA IA");
				console.log("el array de jugs es: " + this.objetoResumen.arrayResumenJugs.length);
				console.log("el array de seguidores a quitar es: " + this.objetoResumen.arraySeguidoresQuitar.length);
				console.log("el id del siguienteJugador es: " + this.objetoResumen.idSiguienteJug);
				objetoResumen.push(this.objetoResumen); //actualizamos el resumenTotal.
				if (!siguienteJugador) break; //si se acaba la partida salimos del bucle porque la condicion de entrada fallaria.
			}
		}else{ //aqui acaba la partida antes de que juegen las IAs. siguienteJugador = null;
		        _(this.partida.jugs).each(function(jug){ this.partida.tablero.objetoResumen.addJugPuntos(jug);},this);
			this.objetoResumen.cambiarIdJug(siguienteJugador);
			objetoResumen.push(this.objetoResumen);
		}
	}
	
	return [success, objetoResumen];
}


Tablero.prototype.dameFicha = function(){
	this.fichaActual = this.mazo.dameFichaMazo();
    //console.log("la ficha actual en tablero.dameficha es: "+ this.fichaActual.numFicha);
    console.log("!!!!!!!!!!!!!!!!!!!!!!!         la ficha actual que vamos a devolver en dameFicha tablero: " + this.fichaActual.dato);
	return this.fichaActual;
}
//______________________________________________________________________
Tablero.prototype.asignarCampoACiudad = function(ficha){
	var esquinas = [{prev: 11, next: 0}, 
				   {prev: 2 , next: 3}, 
				   {prev: 5 , next: 6}, 
				   {prev: 8 , next: 9}];
	var ciudadesDistintas = 0;
	var ultCiudad;
	var ciudadPdato;
	var campoPdato;

	_(esquinas).each(function(e){
		if (ficha.dato[e.prev] == 'c' && ficha.dato[e.next] == 'f'){
			ciudadPdato = ficha.pdato[e.prev];
			campoPdato = ficha.pdato[e.next];
		}else if (ficha.dato[e.next] == 'c' && ficha.dato[e.prev] == 'f'){
			ciudadPdato = ficha.pdato[e.next];
			campoPdato = ficha.pdato[e.prev];
		}
		if (ciudadPdato && ciudadPdato != ultCiudad){
			ultCiudad = ciudadPdato;
			ciudadesDistintas ++;
			console.log("*************{[]}{[]}****************LA PARTIDA ES: " + this.partida.listaCiudades);
			console.log("*************{[]}{[]}****************LA ciudadPdato ES: " + ciudadPdato);
			var city = _(this.partida.listaCiudades).find (function(c){
				return _(c.content).contains (ciudadPdato);			
			});
			city.camposAdyacentes.push(campoPdato);
		}

	},this);
}

Tablero.prototype.recuentoPuntosCampos = function(){	
	_(this.partida.jugs).each(function(j){
	console.log("{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]} id jugador: " + j.idJugador);
		_(this.partida.listaCampos).each(function(f){
	console.log("{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]} pts por el campo de pdato: " + f.id + " a los jugadores: " + f.jugsConPuntos);
			if (_(f.jugsConPuntos).contains (j.idJugador)){
				j.ciudadesIncluidas.push(f.ciudadesIncluidas);
	console.log("{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]}{[]} id jugador: " + j.idJugador + " y tiene ciudades: " + f.ciudadesIncluidas);
			}
		});
	},this);
	_(this.partida.jugs).each(function(j){
		if (j.ciudadesIncluidas.length != 0){
			console.log("{[]}{[]}{[]}{[]}{[]}¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?{[]}{[]}{[]}{[]}{[]} antes de flatten  "+ j.ciudadesIncluidas + "longitud  "+ j.ciudadesIncluidas.length);
			j.ciudadesIncluidas = _(j.ciudadesIncluidas).flatten();
		    console.log("{[]}{[]}{[]}{[]}{[]}¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?{[]}{[]}{[]}{[]}{[]} pos-flatten y pre-uniq  "+ j.ciudadesIncluidas + "longitud  "+ j.ciudadesIncluidas.length);
			j.ciudadesIncluidas = _(j.ciudadesIncluidas).uniq();
			console.log("{[]}{[]}{[]}{[]}{[]}¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?{[]}{[]}{[]}{[]}{[]} pos-uniq  "+ j.ciudadesIncluidas + "longitud  "+ j.ciudadesIncluidas.length);
			var puntos = 3 * j.ciudadesIncluidas.length;
			console.log("{[]}{[]}{[]}{[]}{[]}¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?{[]}{[]}{[]}{[]}{[]} los  puntos son  "+ puntos);
			j.puntos += puntos;
			console.log("{[]}{[]}{[]}{[]}{[]}¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?¿?{[]}{[]}{[]}{[]}{[]} los  puntos son  "+ j.puntos);
		}
	});
}

//*************************************************************************
//*                                                                       *
//*                              PARTIDA                                  *
//*                                                                       *
//*************************************************************************


var Partida = function(idPartida,jugs,numJugs){
    //ahora jugs es un array de objetos jugador...(lo que hablamos con PL) hay que parsear
    this.idPartida = idPartida;
    addPartida(this);
    console.log("he añadido la partida");
    console.log("num partidas: " + partidas.length);
    this.initialize(jugs,numJugs);
}

Partida.prototype.initialize = function(jugadores,numJugs){
    //iran las cosas de jugadores y ia etcetc
    this.listaCampos = [];
    this.listaCiudades = [];
    this.listaCaminos = [];
    this.listaMonasterios = [];
    this.tablero = new Tablero(this);   
    this.jugs = [];
    
    var idIA = 0;
    for (var i = 0; i<numJugs; i++){
        if (i>= jugadores.length){
            var jug = new IAPlayer (idIA);
            jug.partida = this;
            this.jugs [i] = jug;
            idIA ++;
        }else{
            var jug = new Jugador (jugadores[i].idJugador, jugadores[i].nombreJugador);
            jug.partida = this;
            this.jugs[i] = jug;
        }
    }
    //el turno es el indice del array jugs
    this.turno = 0;
    this.startCallIU();
}

Partida.prototype.startCallIU = function(){
        var arrayJugs = [];
        
        _(this.jugs).each(function(j){
                var obj = {};
                obj.nombre = j.nombre;
                obj.puntos = j.puntos;
                obj.numSeguidores = 7;
                arrayJugs.push(obj);
        });
		console.log("EN IA.JS this.idPartida es: " +this.idPartida);
		console.log("el turno es: " + this.turno);
		console.log("el jugador act es: " + this.getJugadorActual());
		console.log("el id del jugador es: " + this.getJugadorActual().idJugador);
		//
		//
		//
		//DESCOMENTAR ESTA LINEA PARA LLAMAR A IU!!!!!!!!!!!!!!!!!!!!
		//
		//
		//
		//
        empezarPartida (this.idPartida,arrayJugs,this.getJugadorActual().idJugador);
}

//aqui devuelvo el jugador que tiene el turno
Partida.prototype.getJugadorActual = function(){
    return (this.turno != null) ? this.jugs[this.turno] : this.turno;
}

Partida.prototype.pasarTurno = function(){
    if(this.tablero.mazo.data.length == 0){
        this.turno = null;
        return false;
    }else{
        this.turno = (this.turno + 1 > this.jugs.length -1) ? 0 : this.turno +1;
        return true;
    }
}

Partida.prototype.finalizarPartida = function(){
    //actualizar en la base de datos los puntos de los jugadores
    //borrar la partida actual
    //hablar con plataforma
    this.recuentoPuntosFinal();
	
	var objFinal = this.crearObjetoFinal();
    
	//this.resumenPartida()
    console.log("partidas antes de finalizar: "+partidas.length);
    //var p = partidas.splice(this.idPartida,1);
    borrarPartida(this.idPartida);
    //console.log("la partida que se ha borrado es: " + p.idPartida);
    //console.log("partidas despues de finalizar: "+partidas.length);
    //return this.getPuntos();
    //llamar a plataforma y a IU
	return objFinal;
}

//_______________________________________________________________________________________

Partida.prototype.recuentoPuntosFinal = function(){
    var ciudadesNoCerradas = _(this.listaCiudades).filter(function(c){
        return !c.isClosed;
    });
    var caminosNoCerrados = _(this.listaCaminos).filter(function(r){
        return !r.isClosed;
    });
    var monasteriosNoCerrados = _(this.listaMonasterios).filter(function(m){
        return !m.isClosed;
    });

    //tenemos que hacer el metodo en partida para contar los puntos para acceder a los jugadores
	_(this.listaCampos).each(function(f){
		f.close();
	});

    this.tablero.recuentoPuntosCampos();

    _(ciudadesNoCerradas).each(function(c){
        c.close();
        console.log("%%%%%%%%%%%se ha cerrado la ciudad con pdato: " + c.id);
    });
    _(caminosNoCerrados).each(function(r){
        r.close();
        console.log("%%%%%%%%%%%se ha cerrado el camino con pdato: " + r.id);
    });
    _(monasteriosNoCerrados).each(function(m){
        m.close();
        console.log("%%%%%%%%%%%se ha cerrado el monasterio con pdato: " + m.id);
    });
}
//__________________________
Partida.prototype.crearObjetoFinal = function(){
	var objFinal = [];
	_(this.jugs).each(function(j){
		objFinal.push({nombre: j.nombre, puntos: j.puntos});
	});
	return objFinal;
}

//*************************************************************************
//*                                                                       *
//*                              CAMPO                                    *
//*                                                                       *
//*************************************************************************

var Campo = function(idCampo){
    this.id = idCampo;
    this.content = []; //contiene los componentes de pdata de las fichas que lo forman
    this.propietarios = [];
    this.ciudadesIncluidas = [];
	this.seguidores = [];
	this.propSeguidores = [];
	this.isClosed = false;
	this.jugsConPuntos = [];
}

Campo.prototype.add = function(numSubcelda){
    this.content.push(numSubcelda);
}
//************************************************************************
//NOTA: ESTOS DOS METODOS DEBERAN FORMAR PARTE DE TODOS LOS TIPOS DE AREAS.
//devuelve si un campo tiene algun pdato igual que el campo en cuestion, 
//por lo que pasarian a formar parte del mismo campo.
Campo.prototype.isTheSame = function(c2){
    var is = false;
    var i = 0;
    while (!is && i <= this.content.length){
        var d1 = this.content[i];
        is = _(c2.content).any(function(d2){
            return d2 == d1;
        });
        i++;
    };
    return is;
}

//Metodo para unificar los contents de otros campos con el campo en cuestion.
Campo.prototype.unificar = function (camposAIntegrar){
    console.log("!!!!!!!!!!**************se ha llamado a unificar de campo y  los campos a integrar son: " + camposAIntegrar );
	var contenido = [];
	var ciudades = [];
	var seg = [];
	contenido.push (this.content);
	ciudades.push (this.ciudadesIncluidas);
	seg.push (this.seguidores);
    console.log("contenido es: "+this.content);
	_(camposAIntegrar).each(function(c){
        console.log("el content en campos a integrar es"+c.content);
		contenido.push(c.content);
		ciudades.push(c.ciudadesIncluidas);
		seg.push(c.seguidores);
	},this);
	//en content tenemos los contents de todos los campos, los unimos en un solo array y eliminamos los duplicados.
	this.content = _(contenido).flatten();
    console.log("el content antes de hacer el uniq: "+this.content);
    this.content = _(this.content).uniq();
    console.log("el content despues de hacer el uniq: "+this.content);
	this.ciudadesIncluidas = _(ciudades).flatten();
	console.log("el ciudadesIncluidas antes de hacer el uniq: "+this.ciudadesIncluidas);
	this.ciudadesIncluidas = _(this.ciudadesIncluidas).uniq();
	console.log("el ciudadesIncluidas despues de hacer el uniq: "+this.ciudadesIncluidas);
	this.seguidores = _(seg).flatten();
	this.seguidores = _(this.seguidores).uniq();
}
//___________________________________________________________________

Campo.prototype.ponerSeguidor = function (seguidor){
    this.propSeguidores.push(seguidor.idJugador);
	this.seguidores.push(seguidor);
}

//esto no creo que nos haga falta
Campo.prototype.close = function(){
 	if(this.propSeguidores.length != 0){
		var dicNumSeg = _(this.propSeguidores).countBy (function(idJug){
			for (i = 0; i<this.partida.jugs.length; i++){
				if (idJug == this.partida.jugs[i].idJugador){
				console.log("------------------------BBBBBBBBBBBBBBBBBBB    idjug " + idJug + "   this.partida.jugs[i].idJugador    " + this.partida.jugs[i].idJugador);
					return ("#"+idJug);
				}
			}
		},this);
		
		console.log("22222222222222222 los seguidores de la ciudad son: " + this.seguidores);
		console.log("3333333333333333333333 el propietrario de lso seguidores es "+ this.propSeguidores)
		var seguidoresJug = [];
		
		_(this.partida.jugs).each(function(jug){
			var obj={};
			console.log("rrrrrrrrrrrrrrrrrrrrrrr      diccionario con los seguidores es: " + dicNumSeg.toString());
			var numSeg = dicNumSeg ["#"+jug.idJugador];
			console.log("eeeeeeeeeee el numSeg es: " + numSeg)
			if(numSeg && !_(seguidoresJug).any(function(j){ return j.id == jug.idJugador;}) ){
				obj.id = jug.idJugador;
				obj.cont = numSeg;
				console.log("oooooooooooooooooooooooooooo   EXISTE obj??: "+ obj);
				seguidoresJug.push(obj);
			}
		});
		console.log("111111111111111111111111111111111111111       SeguidoresJug es: " + seguidoresJug);
		var maxim = _(seguidoresJug).max(function(s){ 
                                            return s.cont;
                                        });
        console.log("00000000000000000000000          MAXIM ES: " + maxim);
		seguidoresJug = _(seguidoresJug).filter(function(s){
			return s.cont == maxim.cont;
		});
		//almacenamos en jugsConPUntos los ids de los jugadores que se van a llevar puntos.
		_(seguidoresJug).each(function(s){
			this.jugsConPuntos.push(s.id);
		},this);
    }
}


//Campo.prototype.quitarSeguidor = function(idJugador){
//    this.seguidores.splice (_(this.seguidores).indexOf(idJugador),1);
//}

//*************************************************************************
//*                                                                       *
//*                              CIUDAD                                   *
//*                                                                       *
//*************************************************************************

var Ciudad = function(idCiudad){
    this.id = idCiudad;
    this.content = []; //contiene los componentes de pdata de las fichas que lo forman
    this.idFichas = [];
    this.isClosed = false;
    this.seguidores = [];
	this.propSeguidores = [];
	this.numEscudos = 0;
    this.ladosLibres = 0;
	this.camposAdyacentes = [];
}

Ciudad.prototype.add = function(numSubcelda){
    this.content.push(numSubcelda);
}

Ciudad.prototype.isTheSame = function(c2){
    var is = false;
    var i = 0;
    while (!is && i <= this.content.length){
        var d1 = this.content[i];
        is = _(c2.content).any(function(d2){
            return d2 == d1;
        });
        i++;
    };
    return is;
}

//Metodo para unificar los contents de otras ciudades con la ciudad en cuestion.
Ciudad.prototype.unificar = function (ciudadesAIntegrar){
	var contenido = [];
	var fichas = [];
	contenido.push (this.content);
	fichas.push (this.idFichas);
	var campos = [];
	var seguidores = [];
	var seg = [];
	seguidores.push (this.propSeguidores);
	campos.push (this.camposAdyacentes);
	seg.push (this.seguidores);
	console.log("o0o0o0o0o0o0o0o0o0o0o+++++++++++o0o0o0o0o0o0o0o0o0o");
	_(ciudadesAIntegrar).each(function(c){
		contenido.push(c.content);
		console.log("contenido de ciudad: " + contenido);
		campos.push (c.camposAdyacentes);
		console.log("camposAdyacentes: " + campos);
		fichas.push (c.idFichas);
		console.log("id_fichas: " + fichas);
		seguidores.push(c.propSeguidores);
		console.log("idsJugadoresSeguidores: " + seguidores);
		seg.push(c.seguidores);
		console.log("numeroSeguidores: " + seg.length);
		this.ladosLibres += c.ladosLibres;
		console.log("ladosLibres: " + this.ladosLibres);
	},this);
	console.log("o0o0o0o0o0o0o0o0o0o0o+++++++++++o0o0o0o0o0o0o0o0o0o");
	//en content tenemos los contents de todos las ciudades, los unimos en un solo array y eliminamos los duplicados.
	this.content = _(contenido).flatten();
    console.log("el content antes de hacer el uniq: "+this.content);
    this.content = _(this.content).uniq();
    console.log("el content despues de hacer el uniq: "+this.content);
	this.camposAdyacentes = _(campos).flatten();
	this.camposAdyacentes = _(this.camposAdyacentes).uniq();
	this.idFichas = _(fichas).flatten();
	this.idFichas = _(this.idFichas).uniq();
	this.propSeguidores = _(seguidores).flatten();
	this.seguidores = _(seg).flatten();
	this.seguidores = _(this.seguidores).uniq();
}

Ciudad.prototype.ponerSeguidor = function (seguidor){
    this.propSeguidores.push(seguidor.idJugador);
	this.seguidores.push(seguidor);
}

Ciudad.prototype.quitarSeguidor = function(idJugador){
    this.seguidores.splice (_(this.seguidores).indexOf(idJugador),1);
}

Ciudad.prototype.calcularPuntos = function(){
	var puntos;
	_(this.idFichas).each(function(idf){
	    var cell = _(this.partida.tablero.cellSet).find(function(c){
	        return c.ficha.numFicha == idf;
	    });
	    if(cell.ficha.escudo){
	        this.numEscudos++;
	    }
	},this);
	if ( (this.idFichas.length > 2) && (this.partida.turno != null) ){
		puntos = ((this.idFichas.length + this.numEscudos) * 2);
	}else{
	    puntos = this.idFichas.length + this.numEscudos;
	}
	return puntos; 
}


Ciudad.prototype.close = function(){
    this.isClosed = true;
	//devolver los seguidores a los jugadores correspondientes (¡***Y*AVISAR*A*IU***!)
	_(this.camposAdyacentes).each (function(cA){
		var campo = _(this.partida.listaCampos).find(function(c){
				return _(c.content).contains(cA);
			});
		campo.ciudadesIncluidas.push(this.id);
		campo.ciudadesIncluidas = _(campo.ciudadesIncluidas).uniq();
	},this);
	if(this.propSeguidores.length != 0){
		var puntos = this.calcularPuntos();
		var dicNumSeg = _(this.propSeguidores).countBy (function(idJug){
			for (i = 0; i<this.partida.jugs.length; i++){
				if (idJug == this.partida.jugs[i].idJugador){
				console.log("------------------------BBBBBBBBBBBBBBBBBBB    idjug " + idJug + "   this.partida.jugs[i].idJugador    " + this.partida.jugs[i].idJugador);
					return ("#"+idJug);
				}
			}
		},this);
		
		console.log("22222222222222222 los seguidores de la ciudad son: " + this.seguidores);
		console.log("3333333333333333333333 el propietrario de lso seguidores es "+ this.propSeguidores)
		var seguidoresJug = [];
		console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm la partida es: " + this.partida);
		_(this.partida.jugs).each(function(jug){
			var obj={};
			console.log("rrrrrrrrrrrrrrrrrrrrrrr      diccionario con los seguidores es: " + dicNumSeg.toString());
			var numSeg = dicNumSeg ["#"+jug.idJugador];
			console.log("eeeeeeeeeee el numSeg es: " + numSeg)
			if(numSeg && !_(seguidoresJug).any(function(j){ return j.id == jug.idJugador;})){
				obj.id = jug.idJugador;
				obj.cont = numSeg;
				console.log("oooooooooooooooooooooooooooo   EXISTE obj??: "+ obj);
				seguidoresJug.push(obj);
			}
		});
		console.log("111111111111111111111111111111111111111       SeguidoresJug es: " + seguidoresJug);
		var maxim = _(seguidoresJug).max(function(s){ return s.cont;});
        console.log("00000000000000000000000          MAXIM ES: " + maxim);
		seguidoresJug = _(seguidoresJug).filter(function(s){
			return s.cont == maxim.cont;
		});
        console.log("------------------LOS PUNTOS SON: " + puntos)
		_(seguidoresJug).each(function(s){
			var jug = _(this.partida.jugs).find(function(j){
				return j.idJugador == s.id;
			});
			console.log("=================================== le sumamos los puntos al jugador: " + jug.idJugador);
			jug.puntos += puntos;
			jug.numSeguidores += s.cont;
		},this);
		_(this.partida.jugs).each(function(j){
		    console.log("$$$$$$$$$$$$$$$$      jugador: " + j.idJugador + " puntos: " + j.puntos );
		})
		_(this.seguidores).each(function(seg){
			var cell = _(this.partida.tablero.cellSet).find(function(c){
				return c.ficha.numFicha == seg.numFicha;
			});
			console.log("voy a quitar seguidor: ");
			console.log("long de seguidores en la ciudad: " + this.seguidores.length);
			console.log("pos del seguidor a quitar: {x:" + cell.pos.x + ", y: " + cell.pos.y + "}");
			this.partida.tablero.objetoResumen.addSeguidorQuitar(cell.pos);
		},this);
	}
}
	

Ciudad.prototype.updateLibres = function(bool){
    console.log("I0O0I0O0I0O0I0O0I-------I0O0I0O0I0O0I0O0I0O0I0O0I")
	console.log("antes de updateLibres: ladoslibres es: " + this.ladosLibres);
	if (bool){
		this.ladosLibres++;
	}else{
		this.ladosLibres--;
	} 
	console.log("despues de updateLibres: ladoslibres es: " + this.ladosLibres);
    console.log("I0O0I0O0I0O0I0O0-------I0O0I0O0I0O0I0O0I0O0I0O0I")
	/*if (this.ladosLibres == 0){
		this.close();
	}*/
}

//*************************************************************************
//*                                                                       *
//*                              CAMINO                                   *
//*                                                                       *
//*************************************************************************

var Camino = function(idCamino){
    this.id = idCamino;
    this.content = []; //contiene los componentes de pdato de las fichas que lo forman
	this.idFichas = [];
    this.ladosLibres = 0;
    this.isClosed = false;
    this.seguidores = []; 
	this.propSeguidores = [];
}

Camino.prototype.add = function(numSubcelda){
    this.content.push(numSubcelda);
}


Camino.prototype.isTheSame = function(c2){
    var is = false;
    var i = 0;
    while (!is && i <= this.content.length){
        var d1 = this.content[i];
        is = _(c2.content).any(function(d2){
            return d2 == d1;
        });
        i++;
    };
    return is;
}

//Metodo para unificar los contents de otras caminos con el camino en cuestion.
Camino.prototype.unificar = function (caminosAIntegrar){
	var contenido = [];
	var fichas = [];
	var seg = [];
	var seguidores = [];
	contenido.push (this.content);
	seguidores.push(this.propSeguidores);
	seg.push(this.seguidores);
	fichas.push (this.idFichas);
	_(caminosAIntegrar).each(function(c){
		contenido.push(c.content);
		fichas.push(c.idFichas);
		seg.push(c.seguidores);
		seguidores.push(c.propSeguidores);
		this.ladosLibres += c.ladosLibres;
	},this);
	//en content tenemos los contents de todos los caminos, los unimos en un solo array y eliminamos los duplicados.
	this.content = _(contenido).flatten();
    console.log("el content antes de hacer el uniq: "+this.content);
    this.content = _(this.content).uniq();
    console.log("el content despues de hacer el uniq: "+this.content);
	this.idFichas = _(fichas).flatten();
	this.idFichas = _(this.idFichas).uniq();
	this.seguidores = _(seg).flatten();
	this.seguidores = _(this.seguidores).uniq();
	this.propSeguidores = _(seguidores).flatten();
	this.propSeguidores = _(this.propSeguidores).uniq();
}

Camino.prototype.ponerSeguidor = function (seguidor){
    this.propSeguidores.push(seguidor.idJugador);
	this.seguidores.push(seguidor);
}

//Camino.prototype.quitarSeguidor = function(idJugador){
//    this.seguidores.splice (_(this.seguidores).indexOf(idJugador),1);
//}

Camino.prototype.calcularPuntos = function(){
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkk       el idfichas es: " + this.idFichas);
	return this.idFichas.length; 
}

Camino.prototype.close = function(){
    this.isClosed = true;
	if(this.propSeguidores.length != 0){
		var puntos = this.calcularPuntos();
		var dicNumSeg = _(this.propSeguidores).countBy (function(idJug){
			for (i = 0; i<this.partida.jugs.length; i++){
				if (idJug == this.partida.jugs[i].idJugador){
					return "'" + idJug + "'";
				}
			}
		},this);
		var seguidoresJug = [];
		_(this.partida.jugs).each(function(jug){
			var obj = {};
			var numSeg = dicNumSeg ["'" + jug.idJugador + "'"];
			if(numSeg && !_(seguidoresJug).any(function(j){ return j.id == jug.idJugador;})){
				obj.id = jug.idJugador;
				obj.cont = numSeg;
				seguidoresJug.push(obj);
			}
		});
		var maxim = _(seguidoresJug).max(function(s){ return s.cont;});
		seguidoresJug = _(seguidoresJug).filter(function(s){
			return s.cont == maxim.cont;
		});

		_(seguidoresJug).each(function(s){
		    console.log("*******idJugador seguidor: " + s.id);
		    
			var jug = _(this.partida.jugs).find(function(j){
			    console.log("************ idJugador: " + j.idJugador);
				return j.idJugador == s.id;			
			});
			jug.puntos += puntos;
			jug.numSeguidores += s.cont;
		},this);
		_(this.seguidores).each(function(seg){
	        console.log("---------------numero de la ficha en la que se quiere poner seguidor: " + seg.numFicha)
			var cell = _(this.partida.tablero.cellSet).find(function(c){
				return c.ficha.numFicha == seg.numFicha;
			});
			console.log("----------la celda en la que se pone el seguidor es: " + cell);
			this.partida.tablero.objetoResumen.addSeguidorQuitar(cell.pos);
		},this);
	}
		
	
}


Camino.prototype.updateLibres = function(bool){
	if (bool){
		this.ladosLibres++;
	}else{
		this.ladosLibres--;
	}
	/*if (this.ladosLibres == 0){
		this.close();
	}*/
}


//*************************************************************************
//*                                                                       *
//*                              MONASTERIO                               *
//*                                                                       *
//*************************************************************************

//solo crear el monasterio cuando se ponga monigote en el monasterio
var Monasterio = function(idMonasterio,pos){
    this.id = idMonasterio;
    this.isClosed = false;
    this.setPosAdyacentes(pos);
	this.seguidores = [];
	this.propSeguidores = [];
	this.numFichas = 1;
}

Monasterio.prototype.setPosAdyacentes = function(pos){
	this.posAdyacentes = [{x: pos.x -1 ,y: pos.y -1},
						  {x: pos.x,y: pos.y -1},
						  {x: pos.x +1,y: pos.y-1},
						  {x:pos.x +1,y: pos.y},
						  {x:pos.x -1,y: pos.y},
						  {x:pos.x -1,y:pos.y+1},
						  {x:pos.x ,y: pos.y +1},
				       	  {x:pos.x+1,y: pos.y +1}];
}

Monasterio.prototype.updateAdyacentes = function(pos){
	var posquecoincide = _(this.posAdyacentes).filter(function(p){
		return _(pos).isEqual(p);
	})
	console.log("he encontrado pos que coincide: " + posquecoincide.length);
	this.posAdyacentes = _(this.posAdyacentes).reject (function(p){
		return _(pos).isEqual(p);
	});
	console.log("las pos adyacentes al monasterio son: " + this.posAdyacentes);
	
	if (this.posAdyacentes.length == 0){
		this.close();
	} 
}


Monasterio.prototype.calcularPuntos = function(){
    return 9 - this.posAdyacentes.length;
};

Monasterio.prototype.close = function(){
	//aqui se hará el recuento de puntos.
	this.isClosed = true;
	if (this.propSeguidores.length > 0){ //si hay alguien a quien dar puntos.
		//var puntos = 9;
		var puntos = this.calcularPuntos();
		var jugador = _(this.partida.jugs).find(function(jug){
			return jug.idJugador == this.propSeguidores[0];
		},this);
		jugador.puntos += puntos;
		jugador.numSeguidores++;
		var cell = _(this.partida.tablero.cellSet).find(function(c){
			return c.ficha.numFicha == this.seguidores[0].numFicha;
		},this);
		this.partida.tablero.objetoResumen.addSeguidorQuitar(cell.pos);
	}
		
	//this.quitarSeguidor(jugador.idJugador);
}

Monasterio.prototype.ponerSeguidor = function (seguidor){
    this.propSeguidores.push(seguidor.idJugador);
	this.seguidores.push(seguidor);
	//Este caso es valido sólo cuando: 
	//cuando se genera el monasterio, es decir, cuando se coloca la ficha todas sus posiciones adyacentes estan llenas. 
	//Por lo que al generarse se cerraria automaticamente y despues al poner el seguidor, el jugador no se llevaria puntos. 
	//esta condicion es para que se lleve puntos el jugador en el caso de poner el seguidor en el monasterio que se cierra automaticamente.
	if (this.posAdyacentes.length == 0){
		this.close();
	}
}

//Monasterio.prototype.quitarSeguidor = function(idJugador){
//    this.seguidores.splice (_(this.seguidores).indexOf(idJugador),1);
//}


//*************************************************************************
//*                                                                       *
//*                             OBJETO RESUMEN                            *
//*                                                                       *
//*************************************************************************

var ObjetoResumen = function(){
	this.arrayResumenJugs = [];
	this.idSiguienteJug;
	this.arraySeguidoresQuitar = [];
}



ObjetoResumen.prototype.addJugPuntos = function(jugador){
	//aqui jugador.nombre no esta definido por lo que en un principio estará undefined. (Despues de la integracion con plataforma existira)
	console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% EL JUGADOR TIENE NUMSEGUIDORES: " + jugador.numSeguidores);
	var res = {nombre: jugador.nombre, puntos: jugador.puntos, numSeguidores: jugador.numSeguidores};
	this.arrayResumenJugs.push(res);
}

ObjetoResumen.prototype.addSeguidorQuitar = function(pos){
	console.log("entro en addSeguidorQuitar");
	this.arraySeguidoresQuitar.push(pos);
	console.log(this.arraySeguidoresQuitar.length);
}

ObjetoResumen.prototype.cambiarIdJug = function(id){
	this.idSiguienteJug = id;
}

//*************************************************************************
//*                                                                       *
//*                             OBJETO RESUMEN IA                         *
//*                                                                       *
//*************************************************************************

var ObjetoResumenIA = function(){
	this.fichaPuesta = [];
	this.initialize();
}

ObjetoResumen.prototype.initialize = function(){
	this.arraySeguidoresQuitar = [];
	this.arrayResumenJugs = [];
}

ObjetoResumenIA.prototype = new ObjetoResumen();

ObjetoResumenIA.prototype.addFicha = function(ficha, pos, giro){
	this.fichaPuesta.push({tipo: ficha.tipo, escudo: ficha.escudo, numFicha: ficha.numFicha, giro: giro});
	this.fichaPuesta.push(pos);
}

ObjetoResumenIA.prototype.addSeguidor = function(cuadrante){
	this.fichaPuesta.push(cuadrante);	
}

//*************************************************************************
//*                                                                       *
//*                              JUGADORES                                *
//*                                                                       *
//*************************************************************************

//el jugador real.
var Jugador = function(idJugador, nombreJugador){
    this.idJugador = idJugador;
    this.campos = [];
    this.ciudades = [];
    this.caminos = [];
    this.monasterios = [];
    this.puntos = 0;
    this.numSeguidores = 7;
	this.nombre = nombreJugador;
	this.ciudadesIncluidas = [];
}




//*************************************************************************
//*                                                                       *
//*                                 IA                                    *
//*                                                                       *
//*************************************************************************


//el jugador IA hereda del jugador real. Puesto que debe tener los mismos métodos que se 
//deberán llamar desde partida y las mismas colecciones.
//Este jugador tendrá la habilidad de tomar decisiones de forma automata.
//será llamado para jugar su turno desde partida.
//partida tendrá una forma de saber que ya ha terminado. 
//Por ejemplo puede la IA llamar al pasarTurno de partida.
//esto es código secuencial por lo que cuando la partida llame a playTurn de la IA, el 
//server sigue escuchando peticiones y llamadas a metodos remotos de los demás clientes, 
//a los que bloquea puesto que no es su turno.

var IAPlayer = function(idIA){
	this.base = Jugador;
	this.base (idIA,"IA" + idIA);
	this.finish = false;
}

IAPlayer.prototype = new Jugador();

IAPlayer.prototype.playTurn = function(){
    var a = new ObjetoResumenIA();
    console.log("me he creado un objetoResumenIA para ver si se crea bien: " + a);
    console.log(_(a).functions());
    console.log("HOLA CARACOLA")
	this.partida.tablero.objetoResumen = new ObjetoResumenIA();
	console.log("El objeto resumen VALIDO es: " + this.partida.tablero.objetoResumen);
	console.log(_(this.partida.tablero.objetoResumen).functions());
	console.log("ADIOS CARACOLA")
	//Aquí jugara su turno la IA. Se la llamará desde partida.
	var ficha = this.partida.tablero.dameFicha(); //se almacena en tablero.fichaActual.
	var posFree = this.partida.tablero.posFree;
	var giro = 0;
	
	var success = false;
	//va probando en las posiciones libres con un giro inicial de 0, si no ha encajado en ninguna, se cambia el giro
	//y se vuelve a probar en todas hasta que encaje. Esto es hasta que se hagan 3 giros. 
	
	while(!success && giro<4){
	    var auxPosFree = [];
	    _(posFree).each(function(pF){
	        auxPosFree.push(pF);
	    });
	    
	    while(!success && (auxPosFree.length > 0) ){
	        var i = Math.floor (Math.random() * (auxPosFree.length) );
	        success = this.partida.tablero.ponerFicha(auxPosFree[i],giro);
	        if (success){ 
	        	this.partida.tablero.objetoResumen.addFicha(ficha, auxPosFree[i], giro);
	        	console.log("Posicion que devolvemos a IU en el objetoResumenIA: x: " + auxPosFree[i].x + ", y: " + auxPosFree[i].y);
	        }
	        auxPosFree.splice(i,1);
	    }
	    giro++;
	}
	
	
	
	
	//
	//
	//CONTROLAR QUE PASA SI NO PUEDE PONER SEGUIDOR EN NINGUN CUADRANTE
	//
	//
	
	
	
	
	
	
	/*while (!success && giro<4){
		var i = Math.floor (Math.random() * (posFree.length-1) );
		var i_next = i;
		do{
			p = posFree[i_next];
			success = this.partida.tablero.ponerFicha(p,giro);
			var i_next = (i_next == posFree.length -1)?  0 : i_next ++;
		}while(!success && i_next != i);
		giro ++;
	}*/
	console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx this.partida.tablero.objetoResumen " + this.partida.tablero.objetoResumen);
	console.log("El objeto resumen VALIDO es: " + this.partida.tablero.objetoResumen);
	console.log(_(this.partida.tablero.objetoResumen).functions());
	// aqui se ve si se quiere poner seguidor o no, y se hacen los intentos para ponerlo
	var probPonerS = this.numSeguidores*(1/7);
	if(Math.random() < probPonerS){
		success = false;
		var i = 13;
		var posAProbar = _.range(0,12);
		while (!success && i > 0){
			var aux = ( Math.floor ( Math.random() * (posAProbar.length) ) );
			success = this.partida.tablero.ponerSeguidorJugador(posAProbar[aux],this.idJugador);
			if (success) this.partida.tablero.objetoResumen.addSeguidor(posAProbar[aux]);
			posAProbar.splice(aux,1);
			i--;
		}
		if (!success){
		    this.partida.tablero.ponerSeguidorJugador();
		    this.partida.tablero.objetoResumen.addSeguidor(-1);
		}
	}else{
		this.partida.tablero.ponerSeguidorJugador();
		this.partida.tablero.objetoResumen.addSeguidor(-1); //si no se pone seguidor se le pasa un -1 a IU.
	}

	//LLamamos a completarAreas al fin de cada turno de la IA.
	this.partida.tablero.completarAreas(this.partida.tablero.fichaActual,this.partida.tablero.posFull[this.partida.tablero.posFull.length - 1]);

	//Ahora partida habrá cambiado el turno y le tocará al jugador correspondiente que podría 
	//ser otra IA perfectamente.
	_(this.partida.listaCampos).each(function(c){
            console.log("campo" + c.id + ":" + c.content + " CIUDADES IIIIIIIIIIIIIIIIIIIIINCLUIDAS: " + c.ciudadesIncluidas);
    });
    _(this.partida.listaCiudades).each(function(c){
            console.log("ciudad" + c.id + ":" + c.content + " id fichas: " + c.idFichas);
    });
    _(this.partida.listaCaminos).each(function(c){
            console.log("camino" + c.id + ":" + c.content + " id fichas: " + c.idFichas);
    }) 
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    console.log("VOYYYYY AAAAA PITAR EL RESUMEN IA");
    var resumenIA = this.partida.tablero.objetoResumen;
    console.log("estos son los atributos del objetoResumenIA: " + _(resumenIA).keys());
    console.log("la posicion en la que IA coloca la ficha es: x:" + resumenIA.fichaPuesta[1].x + ", y: " + resumenIA.fichaPuesta[1].y);
    console.log("el cuadrante en el que la IA coloca el seguidor es: " + resumenIA.fichaPuesta[2]);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
}





//*************************************************************************
//*                                                                       *
//*                                EXTRAS                                 *
//*                                                                       *
//*************************************************************************



//******* para todas las partidas *********
partidas = [];
addPartida  = function(partida){
    partidas.push(partida);
}

getTodasLasPartidas = function(){
    return partidas;
}



//******* para meteor *********

generarPartida = function(id,jugs,num){
	console.log("IA: he llamado a generar partida");
    return new Partida(id,jugs,num);
}

generarTablero = function(){
    return new Tablero();
}

generarMazo = function(){
    return new Mazo();
}

getPartida = function(id_partida){
	return _(partidas).find(function (partida){
		return partida.idPartida == id_partida;
	});
}

borrarPartida = function(idPartida){
    partidas = _(partidas).reject(function(p){
        return p.idPartida == idPartida;
    })
}







