//página atual
var actualPage = 1
//inicializando array de produtos
var products = []
//url da api que vai ser chamada
const URL_TO_FETCH = 'https://frontend-intern-challenge-api.iurykrieger.now.sh';

function getProducts(){
    //url da api que vai ser chamada passando a pagina que deverá ser chamada
    const getProducts = `${URL_TO_FETCH}/products?page=${actualPage}`;
    //faz a requisição get para a api que foi definida acima
    fetch(getProducts, { 
        method: 'get'
      })
      // caso a requisição ocorra com sucesso
      .then(function(response) { 
        //aguarda a resposta do servidor
        response.text()
        .then(function(result){
          //passa para a proxima página
          actualPage += 1
          //transforma o resultado da requisicao de JSON para objeto
          let resultObj = JSON.parse(result).products
          //passa por todos os produtos e adiciona no array de produtos

          resultObj.forEach(el => {
              products.push(el)
          })
          //chama a função que carrega os cards na página
          loadProducts(resultObj)
        })
      })
      //caso a requisição retorne erro
      .catch(function(err) { console.error(err) })
}

//função para carregar os produtos nos cards na página html
function loadProducts(products){
  //caso receba produtos
  if(products){
    //cria uma referencia ao elemento cards
    let cards = document.getElementsByClassName('cards');
    
    //passa por todos os elementos
    products.forEach(el => {
      //cria um elemento html
      let card = document.createElement('div')
      //adiciona a classe card no elemento criado acima
      card.setAttribute('class', 'card')
      //adiciona elemento html no elemento
      card.innerHTML = `
      <div class="card-image">
        <img src="${el.image}" />
      </div>
        <div class="card-body">
          <p class="name">${el.name}</p>
          <p class="description">${el.description}</p>
          <p class="price-1">De: R$${el.oldPrice}</p>
          <p class="price-2 bold">Por: R$${el.price}</p>
          <p class="price-3">ou ${el.installments.count}x de R$${el.installments.value}</p>
        <button>Comprar</button>
      </div>
      `
      //adiciona o elemento criado no elemento cards
      cards[0].append(card);
    })
  }
}