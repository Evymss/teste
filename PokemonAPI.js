
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.pokemontcg.io/v1/cards');
		
xhr.addEventListener("load", function(){
	var response = xhr.responseText;
	arrayDePokemons = JSON.parse(response).cards;

	let $containerCartas = document.getElementById('container')
	
	
	for(let i=0; i<arrayDePokemons.length; i++){

		
	       var $nome= document.createTextNode("Nome:"+ arrayDePokemons[i].name);	  
               var $li = document.createElement('li');
                  $li.appendChild($nome);
                var $artist= document.createTextNode("Artista:"+ arrayDePokemons[i].artist);
                $li.appendChild($artist);
                var $types = document.createTextNode("Tipo:"+arrayDePokemons[i].types);
                $li.appendChild($types);
                var $text = document.createTextNode("Texto:"+arrayDePokemons[i].text);
                $li.appendChild($text);
                $containerCartas.appendChild($li);



	}
	
});

xhr.send();
		
