var play = function (){
	Meteor.call("generarMazo",function(error){
		if(error){
			console.log("error al generar el mazo");
		}else{
			console.log("se ha generado el mazo");
		}
	})
	Meteor.call("dameFichaMadre",function(error,ficha){
		if (error){
			console.log("error en el servidor al devolver la ficha madre");
		}else{
			console.log(ficha);
		}
	});
	for (i=1; i<72; i++){
		Meteor.call("dameFicha",function(error,ficha){
			if(error){
				console.log("error en el servidor al devolver una ficha al azar");
			}else{
				console.log(ficha);
			}
		});
	};
}

$(play());