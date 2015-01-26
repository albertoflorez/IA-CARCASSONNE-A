var mazo;
var tablero;
var partidaPrueba;

//generamos una partida para que el cliente pueda probar la interfaz sin problemas de sincronía
console.log("server: voy a generar una partida");
generarPartida(0,[{idJugador:"EkNAbvaTMCyDmGqXT",nombreJugador:'Jorge'},
				  {idJugador:"bLK48ekXwCcmMiXbT",nombreJugador:'Alberto'}
				  //{idJugador:"C",nombreJugador:'c'},
				  //{idJugador:"D",nombreJugador:'d'},
                    //{idJugador:"E",nombreJugador:'e'}
				],3); 
console.log("server: he generado la partida");


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
        /*var ficha3 = {
                        dato: ['f','f','f','c','c','c','f','f','f','f','f','f', 'f'],
	                    pdato: [7 , 7 , 7 , 3 , 3 , 3 , 7 , 7 , 7 , 7 , 7 , 7 ,  7 ],
                        aplicarGiro: function(){},
                        numFicha: 3,
                     }
        var ficha4 = {
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
                     }*/
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
                     }
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
            
   /*
            partida.tablero.fichaActual = fichaIA0;
            console.log("se va a poner la ficha3");
            success = partida.tablero.ponerFicha({x:49,y:51},0);
            console.log("se ha puesto la ficha3");
            
            partida.tablero.ponerSeguidor(1,"C");
            console.log("no se ha puesto seguidor en a ficha 3");
            
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
             var ficha = partida.tablero.dameFicha();
             fichaIU = {
                tipo: ficha.tipo,
                escudo: ficha.escudo,
                numFicha: ficha.numFicha
             };
        return fichaIU;
    },
   
    ponerFicha: function(id_partida,giro,posFicha){
        console.log("pos que nos dice IU: " + posFicha);
        var success = false;
        var partida = getPartida(id_partida);
        success = partida.tablero.ponerFicha(posFicha,giro);
        return success;
    },

    ponerSeguidor: function(id_partida,posSeguidor,id_usuario){
       
        var partida = getPartida(id_partida);
        
        var resumenTurno = partida.tablero.ponerSeguidor (posSeguidor,id_usuario);
	
        /*console.log("poner seguidor con exito: " + resumenTurno[0]);
        console.log("ha habido numero turnos: " + resumenTurno[1].length);
        console.log("voy a pintar los resumenes de los turnos: sólo los puntos de los jugadores: ");
        console.log("el primer turno: ");
        _(resumenTurno[1][0].arrayResumenJugs).each(function(jug){
            console.log(jug.nombre);
            console.log(jug.puntos);
            console.log(jug.numSeguidores);
        });
        console.log("siguiente turno: " + resumenTurno[1][0].idSiguienteJug);
        console.log("hay que quitar seguidor????: " + resumenTurno[1][0].arraySeguidoresQuitar.length);
        console.log("arraySeguidoresQuitar: " + resumenTurno[1][0].arraySeguidoresQuitar);
        //aqui pinto los resumenes de puntos del turno de la IA.
        if (resumenTurno[1].length > 1){
            console.log("estas son las keys del objetoResumenIA: " + _(resumenTurno[1][0]));
            console.log("voy a pintar los turnos de las IAs y los seguidores: ");
            for (i = 1; i < resumenTurno[1].length; i++){
                console.log("estas son las keys del objetoResumenIA: " + _(resumenTurno[1][i]).keys());
                _(_(resumenTurno[1][i].fichaPuesta).keys()).each(function(key){
                    console.log(key + ": " + resumenTurno[1][i].fichaPuesta[key]);
                });
                _(resumenTurno[1][i].arrayResumenJugs).each(function(jug){
                    console.log(jug.nombre);
                    console.log(jug.puntos);
                    console.log(jug.numSeguidores);
                });
                console.log("siguiente turno: " + resumenTurno[1][i].idSiguienteJug);
                _(resumenTurno[1][i].arraySeguidoresQuitar).each(function(pos){
                    console.log("sequidor a quitar que se encontraba en la pos: " + pos);
                });
                console.log("hay que quitar seguidor????: " + resumenTurno[1][i].arraySeguidoresQuitar.length);
                console.log("arraySeguidoresQuitar: " + resumenTurno[1][i].arraySeguidoresQuitar);
            }
            
        }*/
	
        return resumenTurno;
        
	/*
        ObjetoResumen = {arrayResumenJugs: [{nombre: "Kevin", puntos: 10, numSeguidores: 6}, {nombre: "Victor", puntos: 0, numSeguidores: 7}],
                         idSiguienteJug: "90", 
                         arraySeguidoresQuitar: []
                         }
         
       
        ObjetoResumenIA = {arrayResumenJugs: [{nombre: "Kevin", puntos: 10, numSeguidores: 6}, {nombre: "Victor", puntos: 0, numSeguidores: 3}],
                         idSiguienteJug: "sa", 
                         arraySeguidoresQuitar: [{x:51,y:50}],
                         fichaPuesta: [{tipo:16, escudo:false, numFicha:4, giro:2}, {x:51, y:50}, 7]
                         }
                         
        ObjetoResumenIA2 = {arrayResumenJugs: [{nombre: "Kevin", puntos: 10, numSeguidores: 6}, {nombre: "Victor", puntos: 0, numSeguidores: 2}],
                         idSiguienteJug: "vxWGtB9R9uD7h8P2g", 
                         arraySeguidoresQuitar: [{x:50,y:51}],
                         fichaPuesta: [{tipo:16, escudo:false, numFicha:4, giro:2}, {x:52, y:50}, 5]
                         }
        ObjetoResumenIA3 = {arrayResumenJugs: [{nombre: "Kevin", puntos: 10, numSeguidores: 6}, {nombre: "Victor", puntos: 0, numSeguidores: 2}],
                         idSiguienteJug: "vpYfGvzEAZGvCPppT", 
                         arraySeguidoresQuitar: [{x:50,y:52}],
                         fichaPuesta: [{tipo:17, escudo:false, numFicha:4, giro:2}, {x:53, y:50}, 6]
                         }
                        
                    
                        
        arrayRespuesta = [true, [ObjetoResumen, ObjetoResumenIA, ObjetoResumenIA2]];//,ObjetoResumenIA3]];
       
        return arrayRespuesta;
	*/
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
