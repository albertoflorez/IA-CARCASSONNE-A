var mazo;

Meteor.methods ({
	generarMazo: function(){
		mazo = generarMazo();
	},
	
	dameFichaMadre: function(){
		return mazo.dameFichaMadre();
	},

	dameFicha: function(){
		return mazo.dameFicha();
	}

});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});