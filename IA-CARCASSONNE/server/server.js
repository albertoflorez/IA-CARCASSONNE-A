var mazo;
var tablero;
var partidaPrueba;

//generamos una partida para que el cliente pueda probar la interfaz sin problemas de sincronía
generarPartida(0,[1,2,3],3);

/*
authenticate = function (partida){
    return Meteor.userId() == partida.jugs[partida.turno];
}
*/

//nosotros no podemos comprobar si el usuario que ha hecho la llamada es el que está jugando así que devolvemos 
authenticate = function (partida){
    return true;
}


Meteor.methods ({    
    
	crearPartida: function(id,jugs,num){
		partidaPrueba = generarPartida(id,jugs,num);
        console.log("se ha generado la partida");
        console.log(partidas);
	},
	/*
    generarMazo: function(){
    	//aqui se ha puesto la ficha madre al generar el Mazo.
        mazo = generarMazo();
    },

	dameFichaMadre: function(){
		return mazo.dameFichaMadre();
	},

    generarTablero: function(){
        tablero = generarTablero();
    },*/

    //********************************************************************//
    //                      Interfaz con IU                               //
    //********************************************************************//

    

    dimeTurno: function(id_partida){
        var partida = getPartida (id_partida);
        return partida.getTurno();
    }, 

    buscaPartida: function(id_partida){
        console.log("han llamado a buscar partida.");
        var partida = getPartida(id_partida);
        console.log("partida: "+ partida);
        return partida;
    },
    //pre: id_partida, id_jugador; post: fichaIU (tipo, escudo y numFicha)
    dameFicha: function(id_partida){
        var partida = getPartida (id_partida);
        console.log(partida);
        var fichaIU;
        if (authenticate(partida)){
             var ficha = partida.tablero.dameFicha();
             fichaIU = {
                tipo: ficha.tipo,
                escudo: ficha.escudo,
                numFicha: ficha.numFicha
             };
        }
        return fichaIU;
    },
   
    ponerFicha: function(id_partida,giro,posFicha){
        var success = false;
        var partida = getPartida(id_partida);
        if (authenticate(partida)){
            success = partida.tablero.ponerFicha(posFicha,giro);
        };
        return success;
    },

    ponerSeguidor: function(id_partida,posSeguidor){
        var success = false;
        var partida = getPartida(id_partida);
        if(authenticate(partida)){
            //success = ponerSeguidor (posSeguidor,Meteor.userId().id);
            success = partida.tablero.ponerSeguidor (posSeguidor,1);
        };
        return success;
    },

    //este metodo es para probarlo
    pasarTurno: function(id_partida){
        var partida = getPartida(id_partida);
        console.log(partida.jugs);
        console.log("el turno es de: " + partida.getJugadorActual());
        var result = partida.pasarTurno();
        console.log("despues de pasar turno, el turno es de: " + partida.getJugadorActual()); 
        return result;       
    },


    finalizarPartida: function(id_partida){ 
        var partida = getPartida(id_partida);
        partida.finalizarPartida();
        //var partidas = getTodasLasPartidas();
        console.log("tiene que dar 0 porque se ha borrado la partida: " + partidas.length);
    },

});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});
