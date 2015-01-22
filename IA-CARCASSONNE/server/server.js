var mazo;
var tablero;
var partidaPrueba;

//generamos una partida para que el cliente pueda probar la interfaz sin problemas de sincronía
console.log("server: voy a generar una partida");
generarPartida(0,[{idJugador:"A",nombreJugador:'a'},
				  {idJugador:"B",nombreJugador:'b'}
				  ,{idJugador:"C",nombreJugador:'c'},
				  //{idJugador:"D",nombreJugador:'d'}
				],3);
console.log("server: he generado la partida");

//nosotros no podemos comprobar si el usuario que ha hecho la llamada es el que está jugando así que devolvemos 
authenticate = function (partida){
    return true;
}

Meteor.methods ({    
    
    probarPropagacionDePdato: function(idPartida){
        console.log("se van a generar las fichas.");
        var ficha1 = {
                        dato: ['c','c','c','f','f','f','f','r','f','f','r','f', 'r'],
	                    pdato: [2 , 2 , 2 , 3 , 3 , 3 , 3 , 2 , 4 , 4 , 2 , 3 ,  2 ],
                        aplicarGiro: function(){},
                        numFicha: 1
                     }
        var ficha2 = {
                        dato: ['f','f','f','f','r','f','f','f','f','f','r','f', 'r'],
	                    pdato: [5 , 5 , 5 , 5 , 3 , 6 , 6 , 6 , 6 , 6 , 3 , 5 ,  3 ],
                        aplicarGiro: function(){},
                        numFicha: 2
                     }
        var ficha3 = {
                        dato: ['f','f','f','f','f','f','f','f','f','f','f','f', 'm'],
	                    pdato: [7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 , 7 ,  1 ],
                        aplicarGiro: function(){},
                        numFicha: 3,
                     }
        /*var ficha4 = {
                        dato: ['f','f','f','c','c','c','c','c','c','f','f','f', 'f'],
	                    pdato: [8 , 8 , 8 , 4 , 4 , 4 , 4 , 4 , 4 , 8 , 8 , 8 ,  8 ],
                        aplicarGiro: function(){},
                        numFicha: 4
                     }
        var ficha5 = {
                        dato: ['f','f','f','f','f','f','c','c','c','c','c','c', 'f'],
	                    pdato: [9 , 9 , 9 , 9 , 9 , 9 , 5 , 5 , 5 , 6 , 6 , 6 ,  9 ],
                        aplicarGiro: function(){},
                        numFicha: 5
                     }
		var fichaIA0 = {
                        dato: ['f','f','f','f','f','f','f','r','f','f','f','f', 'm'],
	                    pdato: [ 7, 7,  7,  7,  7,  7,  7,  4,  7,  7,  7,  7,  1],
                        aplicarGiro: function(){},
                        numFicha: 3
                     }
		var fichaIA1 = {
                        dato: ['c','c','c','f','r','f','f','r','f','c','c','c', 'f'],
	                    pdato: [3,  3,  3,  8,  5,  8,  8,  5,  8,  3,  3,  3,   8],
                        aplicarGiro: function(){},
                        numFicha: 4
                     }*/
        console.log("se han generado las fichas.");
        var partida = getPartida(idPartida);
        if (authenticate(partida)){
            partida.tablero.fichaActual = ficha1;
            console.log("se va a poner la ficha1");
            success = partida.tablero.ponerFicha({x:51,y:50},0);
            console.log("se ha puesto la ficha1");
            
            partida.tablero.ponerSeguidor(1,"A");
            console.log("se ha puesto seguidor en a ficha 1");
        console.log("\n\n\n\n"); 
        _(partida.listaCampos).each(function(c){
            console.log("campo" + c.id + ":" + c.content + " CIUDADES IIIIIIIIIIIIIIIIIIIIINCLUIDAS: " + c.ciudadesIncluidas);
        });
        _(partida.listaCiudades).each(function(c){
            console.log("ciudad" + c.id + ":" + c.content + " id fichas: " + c.idFichas);
        });
        _(partida.listaCaminos).each(function(c){
            console.log("camino" + c.id + ":" + c.content + " id fichas: " + c.idFichas);
        }) 
        
        console.log("##################### RESUMEN DE PUNTOS ######################");
        _(partida.jugs).each(function(j){
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Jugador: " + j.idJugador + ": " + j.puntos);
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% tiene " + j.numSeguidores +" seguidores:")
            }) 
        
            partida.tablero.fichaActual = ficha2;
            console.log("se va a poner la ficha2");
            success = partida.tablero.ponerFicha({x:49,y:50},0);
            console.log("se ha puesto la ficha2");
            
            partida.tablero.ponerSeguidor(1,"B");
            console.log("se ha puesto seguidor en a ficha 2");
            
        console.log("\n\n\n\n"); 
        _(partida.listaCampos).each(function(c){
            console.log("campo" + c.id + ":" + c.content  + " CIUDADES IIIIIIIIIIIIIIIIIIIIINCLUIDAS: " + c.ciudadesIncluidas);
        });
        _(partida.listaCiudades).each(function(c){
            console.log("ciudad" + c.id + ":" + c.content);
        });
        _(partida.listaCaminos).each(function(c){
            console.log("camino" + c.id + ":" + c.content + "idFichas: " + c.idFichas);
        }) 
        console.log("\n\n\n\n"); 
         console.log("##################### RESUMEN DE PUNTOS ######################");
        _(partida.jugs).each(function(j){
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Jugador: " + j.idJugador + ": " + j.puntos);
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% tiene " + j.numSeguidores +" seguidores:")
            }) 
            
   
            partida.tablero.fichaActual = ficha3;
            console.log("se va a poner la ficha3");
            success = partida.tablero.ponerFicha({x:49,y:51},0);
            console.log("se ha puesto la ficha3");
            
            partida.tablero.ponerSeguidor(12,"C");
            
        console.log("\n\n\n\n"); 
        _(partida.listaCampos).each(function(c){
            console.log("campo" + c.id + ":" + c.content + " CIUDADES IIIIIIIIIIIIIIIIIIIIINCLUIDAS: " + c.ciudadesIncluidas);
        });
        _(partida.listaCiudades).each(function(c){
            console.log("ciudad" + c.id + ":" + c.content);
        });
        _(partida.listaCaminos).each(function(c){
            console.log("camino" + c.id + ":" + c.content + "idFichas: " + c.idFichas);
        }) 
        console.log("\n\n\n\n"); 
         console.log("##################### RESUMEN DE PUNTOS ######################");
        _(partida.jugs).each(function(j){
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Jugador: " + j.idJugador + ": " + j.puntos);
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% tiene " + j.numSeguidores +" seguidores:")
            }) 
   /*
            partida.tablero.fichaActual = fichaIA1;
            console.log("se va a poner la ficha4");
            success = partida.tablero.ponerFicha({x:48,y:50},0);
            console.log("se ha puesto la ficha4");
            
            partida.tablero.ponerSeguidor(4,"D");
            console.log("no se ha puesto seguidor en a ficha 4");
            
        console.log("\n\n\n\n"); 
        _(partida.listaCampos).each(function(c){
            console.log("campo" + c.id + ":" + c.content + " CIUDADES IIIIIIIIIIIIIIIIIIIIINCLUIDAS: " + c.ciudadesIncluidas);
        });
        _(partida.listaCiudades).each(function(c){
            console.log("ciudad" + c.id + ":" + c.content);
        });
        _(partida.listaCaminos).each(function(c){
            console.log("camino" + c.id + ":" + c.content + "idFichas: " + c.idFichas);
        }) 
        console.log("\n\n\n\n"); 
         console.log("##################### RESUMEN DE PUNTOS ######################");
        _(partida.jugs).each(function(j){
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Jugador: " + j.idJugador + ": " + j.puntos);
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% tiene " + j.numSeguidores +" seguidores:")
            }) 
        /*
            partida.tablero.fichaActual = ficha5;
            console.log("se va a poner la ficha5");
            success = partida.tablero.ponerFicha({x:50,y:49},0);
            console.log("se ha puesto la ficha5");
            
            partida.tablero.ponerSeguidor(3,"J");
            console.log("se ha puesto seguidor en a ficha 5");
            
        console.log("\n\n\n\n"); 
        _(partida.listaCampos).each(function(c){
            console.log("campo" + c.id + ":" + c.content + "CIUDADES IIIIIIIIIIIIIIIIIIIIINCLUIDAS: " + c.ciudadesIncluidas);
        });
        _(partida.listaCiudades).each(function(c){
            console.log("ciudad" + c.id + ":" + c.content + "ladoslibres: " + c.ladosLibres + " CAMPOS DE CIUDAD: " + c.camposAdyacentes);
        });
        _(partida.listaCaminos).each(function(c){
            console.log("camino" + c.id + ":" + c.content  + "ladoslibres: " + c.ladosLibres + "idFichas: " + c.idFichas);
        })  
        
        */
        
        console.log("\n\n\n\n"); 
         console.log("##################### RESUMEN DE PUNTOS ######################");
        _(partida.jugs).each(function(j){
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Jugador: " + j.idJugador + ": " + j.puntos);
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% tiene " + j.numSeguidores +" seguidores:")
            }) 
      
        console.log("\n\n\n\n");
            
        partida.finalizarPartida();
        console.log("##################### RESUMEN FINAL!!!!!! DE PUNTOS ######################");
        _(partida.jugs).each(function(j){
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   Jugador: " + j.idJugador + ": " + j.puntos);
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% tiene " + j.numSeguidores +" seguidores:")
            })
        };
        
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

    generarPartidaPL: function(objetoPartidaPL){
        generarPartida(objetoPartidaPL.idPartida, objetoPartidaPL.arrayJugadores, objetoPartidaPL.numJugadores);
    },


    finalizarPartida: function(id_partida){ 
        var partida = getPartida(id_partida);
        var objFinal = partida.finalizarPartida();
        //var partidas = getTodasLasPartidas();
        console.log("tiene que dar 0 porque se ha borrado la partida: " + partidas.length);
		return objFinal;
    },
    

});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});
