
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.pokemontcg.io/v1/cards');
		
xhr.addEventListener("load", function(){
	var response = xhr.responseText;
	arrayDePokemons = JSON.parse(response).cards;

	let $containerCartas = document.getElementById('container')
	
	for(let i=0; i<arrayDePokemons.length; i++){

			   var $image = document.createElement('img');
               var $li = document.createElement('li');
               image.value = .push(arrayDePokemons[i].imageUrl);
                  $li.appendChild($image);

         /*           // vai criar um atributo com o método createAttribute
            var $src = document.createAttribute("src"); 

            // vai pegar um elemento do array, sendo que o index é o numero randomico
            $src.value = links[numRandom];
            
            // O método createElement vai criar um elemento <img>
            var $img = document.createElement('img');
            
            // O atributo vai ser setado na imagem com setAttributeNode
            $img.setAttributeNode($src);

            // Novamente o appendChild. Agora vai add o <img> dentro do <span>
            $container.appendChild($img);
        });

        // Um listener é adicionando no botão, esse método recebe dois parametros. O primeiro é o tipo do evento
        // que no caso é click (não tem On, apenas click) e o segundo é uma função anonima.
        $botao.addEventListener('click',function(){

            links.push($URL.value); */


				 var $nome= document.createTextNode("Nome:"+ arrayDePokemons[i].name);
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
		
