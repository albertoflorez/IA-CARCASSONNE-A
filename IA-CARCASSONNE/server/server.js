Meteor.methods ({
	generarMazo: function(){
		generarMazo();
	},
	
	dameFichaMadre: function(){
		return dameFichaMadre();
	},

	dameFicha: function(){
		return dameFicha();
	}

});

Meteor.startup(function(){
	console.log("Arrancado servidor");
});