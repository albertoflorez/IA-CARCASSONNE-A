var mazo;
var tablero;
var partidaPrueba;

//generamos una partida para que el cliente pueda probar la interfaz sin problemas de sincronía
console.log("server: voy a generar una partida");
generarPartida(0,[1,2,3],3);
console.log("server: he generado la partida");

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
    
    probarPropagacionDePdato: function(idPartida){
        var ficha1 = {
                        dato: ['f','f','f','f','r','f','f','f','f','f','r','f', 'r'],
	                    pdato: [3,3,3,3,2,4,4,4,4,4,2,3, 2],
                        aplicarGiro: function(){}
                     }
        var ficha2 = {
                        dato: ['f','f','f','f','r','f','f','r','f','f','f','f', 'r'],
	                    pdato: [5,5,5,5,3,6,6,3,5,5,5,5, 3],
                        aplicarGiro: function(){}
                     }
        var ficha3 = {
                        dato: ['f','r','f','f','r','f','c','c','c','f','r','f', 'x'],
	                    pdato: [7,4,8,8,5,9,2,2,2,9,6,7, 1],
                        aplicarGiro: function(){}
                     }
        var ficha4 = {
                        dato: ['f','r','f','f','r','f','f','r','f','f','r','f', 'x'],
	                    pdato: [10,7,11,11,8,12,12,9,13,13,10,10, 2],
                        aplicarGiro: function(){}
                     }
        var ficha5 = {
                        dato: ['f','f','f','f','f','f','f','f','f','f','r','f', 'm'],
	                    pdato: [14,14,14,14,14,14,14,14,14,14,11,14, 1],
                        aplicarGiro: function(){}
                     }
        var ficha6 = {
                        dato:  ['c','c','c','f','f','f','f','f','f','c','c','c', 'f'],
	                    pdato: [3,3,3,15,15,15,15,15,15,3,3,3, 15],
                        aplicarGiro: function(){}
                     }
        var fichaPoner = {
                        dato:  ['f','f','f','c','c','c','f','r','f','f','r','f', 'r'],
	                    pdato: [16,16,16,4,4,4,16,12,17,17,12,16, 12],
                        aplicarGiro: function(){}
                     }
        var partida = getPartida(idPartida);
        if (authenticate(partida)){
            partida.tablero.fichaActual = ficha1;
            success = partida.tablero.ponerFicha({x:48,y:49},0);
            partida.tablero.fichaActual = ficha2;
            success = partida.tablero.ponerFicha({x:48,y:50},0);
            partida.tablero.fichaActual = ficha3;
            success = partida.tablero.ponerFicha({x:48,y:51},0);
            partida.tablero.fichaActual = ficha4;
            success = partida.tablero.ponerFicha({x:49,y:51},0);
            partida.tablero.fichaActual = ficha5;
            success = partida.tablero.ponerFicha({x:50,y:51},0);
            partida.tablero.fichaActual = ficha6;
            success = partida.tablero.ponerFicha({x:50,y:50},0);
            partida.tablero.fichaActual = fichaPoner;
            success = partida.tablero.ponerFicha({x:49,y:50},0);
        };
        _(partida.listaCampos).each(function(c){
            console.log("campo" + c.idCampo + ":" + c.content);
        });
        _(partida.listaCiudades).each(function(c){
            console.log("ciudad" + c.idCiudad + ":" + c.content);
        });
        _(partida.listaCaminos).each(function(c){
            console.log("camino" + c.idCamino + ":" + c.content);
        })    
    },
    
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

    /* Comneto este método porque no funcionaba.
    No funcionaba puesto que devolviamos un objeto que tiene dependencia circular. 
    Puesto que este método no lo vamos a utilizar... Se borrará en un futuro.
    buscaPartida: function(id_partida){
        console.log("han llamado a buscar partida.");
        var partida = getPartida(id_partida);
        console.log("partida: "+ partida.idPartida);
        //return partida;
    },
    */
    //pre: id_partida, id_jugador; post: fichaIU (tipo, escudo y numFicha)
    dameFicha: function(id_partida){
        var partida = getPartida (id_partida);
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
