var mazo;
var tablero;
var partida;


Meteor.methods ({    
    
	crearPartida: function(id,jugs,num){
		partida = generarPartida(id,jugs,num);
        console.log("se ha generado la partida");
        console.log(partidas);
	},
	
    generarMazo: function(){
    	//aqui se ha puesto la ficha madre al generar el Mazo.
        mazo = generarMazo();
    },

	dameFichaMadre: function(){
		return mazo.dameFichaMadre();
	},

	dameFicha: function(){
		//antes estaba esta sentencia: 
		//return partida.tablero.mazo.dameFicha();
		//funcionaba a veces. LO EXPLICO:
		//debido a que en el cliente se llama antes a crear Partida pero el servidor atiende las llamadas del cliente
		//de forma asíncrona, hay veces en las que haces partida.tablero ... y partida ya no es undefined, pero hay 
		//otras ocasiones en las que sí es undefined y por tanto no se puede acceder a tablero.
		//esto se solucionará de alguna manera en un futuro.
		//solución tipo que el cliente siga insistiendo si hay error o algo.
		return mazo.dameFicha();
	},

    generarTablero: function(){
        tablero = generarTablero();
    },

    //este método es sólo para probar que el método de encajar fichas del objeto tablero
    //funciona o no. Más adelante este método se refactorizará.
    ponerFicha: function(){
    	//aqui se va a comprobar si encaja la ficha que nos dicen que quieren poner.
    	//lo vamos a llamar de forma que una ficha encaje y otra no encaje con la ficha madre.
    	//para ello nos creamos un objeto dummy ficha que solo tenga el data que nosotros queremos:
    	//desde el cliente se llama a este método vacío.
    	// dato: ['c','c','c','f','r','f','f','f','f','f','r','f', 'r'], (ficha madre) en pos (49,49)
    	//las fichas que nos inventamos no tienen porque existir explicitamente es solo para probar.
    	
    	//esta ficha se colocará a la derecha de la madre. (encaja su lado izqierdo?)
    	var fichaEncaja = {
    		dato: ['','','','','','','','','','f','r','f',''] //debe encajar
    	};
    	//esta ficha se colocará a la derecha de la madre. (encaja su lado izquierdo?)
    	var fichaNoEncaja = {
    		dato: ['','','','','','','','','','f','f','f',''] //no debe encajar
    	};
    	
    	var pos = {x: 50,y: 49};
    	//las fichas no se meteran en el tablero. Solo se comprueba si encajan.
    	//var success = tablero.encaja (fichaEncaja,pos);
    	//console.log("la ficha que tiene que encajar ¿encaja?: " + success);
    	//success = tablero.encaja (fichaNoEncaja,pos);
    	//console.log("la ficha que no tiene que encajar ¿encaja?: " + success);

    	//primero probamos los métodos por separado.
    	var posAd = tablero.getPosAdyacentes (pos); //una de esas posiciones debe ser la de la madre.
    	var cellAd = tablero.getCellAdyacentes (pos); //debe devolver la celda que contiene a la ficha madre.

    	//AHORA SI COMPROBAMOS EL ENCAJA.
    	//las fichas no se meteran en el tablero. Solo se comprueba si encajan.
    	var success = tablero.encaja (fichaEncaja,pos);
    	console.log("la ficha que tiene que encajar ¿encaja?: " + success); //true.
    	success = tablero.encaja (fichaNoEncaja,pos);
    	console.log("la ficha que no tiene que encajar ¿encaja?: " + success); //false.

    	//AHORA VAMOS A PROBAR SI UNA FICHA ENCAJA RODEADA DE CUATRO FICHAS (EL CASO PEOR).
    	//necesario utilizar put puesto que si no debo crearme una funcion de generar cell en IA.js
    	//o acerme un objeto cell aqui para poder hacer tablero.cellSet.push(ficha).
    	tablero.put ({dato:['','','','','','','f','f','f','','','','']},{x: 48,y: 48});
    	tablero.put ({dato:['','','','f','f','f','','','','','','','']},{x: 47,y: 49});
    	tablero.put ({dato:['f','f','f','','','','','','','','','','']},{x: 48,y: 50});
    	//todas las fichas anteriores deben de haber creado un hueco en la posicion (48,49).

    	console.log("el tablero debe tener 4 fichas: " + tablero.cellSet.length);
    	var fichaRodeadaEncaja = {dato:['f','f','f','f','r','f','f','f','f','f','f','f','']};
    	success = tablero.encaja (fichaRodeadaEncaja,{x: 48, y: 49});
    	console.log("la ficha deberá encajar en el hueco (¿encaja?): " + success);
    	var fichaRodeadaNoEncaja = {dato:['','','','f','','','','','','','','','']};
    	success = tablero.encaja (fichaRodeadaNoEncaja,{x: 48, y: 49});
    	console.log("la ficha no deberá encajar en el hueco (¿encaja?): " + success);
    }

});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});
