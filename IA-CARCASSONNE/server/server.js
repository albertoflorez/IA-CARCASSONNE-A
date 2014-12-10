var mazo;
var tablero;
var partida;

authenticate = function (partida){
    return Meteor.userId() == partida.jugs[partida.turno];
}

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

    generarTablero: function(){
        tablero = generarTablero();
    },

    //********************************************************************//
    //                      Interfaz con IU                               //
    //********************************************************************//

    dimeTurno: function(id_partida){
        var partida = getPartida (id_partida);
        return partida.getTurno();
    }, 

    //pre: id_partida, id_jugador; post: fichaIU (tipo, escudo y numFicha)
    dameFicha: function(id_partida){
        var partida = getPartida (id_partida);
        var fichaIU;
        if (authenticate(partida){
             var ficha = partida.tablero.mazo.dameFicha();
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
            success = partida.ponerFicha(pos,giro);
        };
        return success;
    },

    ponerSeguidor: function(id_partida,posSeguidor){
        var success = false;
        var partida = getPartida(id_partida);
        if(authenticate(partida)){
            success = ponerSeguidor (posSeguidor,Meteor.userId().id);
        };
        return success;
    }


});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});
