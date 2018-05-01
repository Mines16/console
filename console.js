//A função seguinte cria uma lista e substitui os itens desta com as propriedades dos objetos
function Init() { 
	//Lista que foi criada com os itens que vão ser respondidos
    function série(nome, genero, terminada, avaliacao){
		this.nome = nome;
		this.genero  = genero;
		this.terminada = terminada;
		this.avaliacao = avaliacao;
		
		this.dados = function() {
			document.body.innerHTML += "Nome: " + this.nome + "<br>";
			document.body.innerHTML += "Género: " + this.genero + "<br>";
			document.body.innerHTML += this.terminada? "Está terminada?: Sim<br>" : "Está terminada?: Não<br>";
			document.body.innerHTML += "Avaliação:" + this.avaliacao + "<br><br>";
		}
	}
      
    //O objecto aqui é a série "Friends"
    var friends = new série("Friends", "Comédia", true, "9/10");
	friends.dados();
	
	//O objecto seguinte é a série "Black Mirror"
	var blackmirror = new série("Black Mirror", "Ficção Científica", false, "7/10");
	blackmirror.dados();
	
	//O objecto seguinte é a série "Prison Break"
	var prisonbreak = new série("Prison Break", "Drama", false, "10/10");
	prisonbreak.dados();

}