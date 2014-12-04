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
        mazo = generarMazo();
    },

	dameFichaMadre: function(){
		return mazo.dameFichaMadre();
	},

	dameFicha: function(){
		return partida.tablero.mazo.dameFicha();
	},

    generarTablero: function(){
        tablero = generarTablero();
    }

});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});
