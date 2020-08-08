 
class Cliente {
	constructor(busca){
		this.busca = busca
	}
}
function pesquisaBtn(){
$('#pesquisaModal').modal('show')
}

function usuarioPesquisa(){
	
	let busca = document.getElementById('busca')
	let cliente = new Cliente(busca.value)


	console.log(cliente)

	if (busca.value == undefined || busca.value == '' || busca.value == null) {
		alert('Olá o campo de Busca deve ser preenchido!')
		return false
	}

} 
/**
*tenho que ajustar os nomes
**/

