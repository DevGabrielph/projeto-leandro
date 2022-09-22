//-------Variaveis

var folhaPrincipal= document.querySelector('.listap')
var folhaItens=document.querySelector('#lista-folha-itens')
var tituloCabeçalhoItens=document.querySelector('#titulo-cabeçalho-itens')
var voltar=document.querySelector('#voltar')
var carrinho=document.querySelector('#carrinho-ext')

//------arrays

var listaInicial= {
    promoçoes:document.querySelector('#promoçoes'),
    porçoes:document.querySelector('#porçoes'),
    hamburgueres : document.querySelector('#hamb'),
    cachorroquente : document.querySelector('#cachorro'),
    bebidas : document.querySelector('#bebidas'),
    sucos : document.querySelector('#sucos'),
    vitaminas : document.querySelector('#vitaminas')

}
var tituloItens=['Promoções','Porções','Hambúrgueres','Cachorro Quente','Bebidas','Sucos','Vitaminas']


//------------ EVENTOSSS--- 

listaInicial.promoçoes.addEventListener('click',promoçoes)
listaInicial.porçoes.addEventListener('click',porçoes)
listaInicial.hamburgueres.addEventListener('click',burguer)
listaInicial.cachorroquente.addEventListener('click',cachorro)
listaInicial.bebidas.addEventListener('click',bebidas)
listaInicial.sucos.addEventListener('click',sucos)
listaInicial.vitaminas.addEventListener('click',vitaminas)

voltar.addEventListener('click',voltarInicio)
carrinho.addEventListener('click',interiorCarrinho)



function promoçoes(){
    folhaPrincipal.style.display='none'
    folhaItens.style.display='block'
    tituloCabeçalhoItens.innerHTML=tituloItens[0]

    var promo =[
        { nome:'2 X-tudos',descriçao:'<strong>Descrição:</strong> Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup, maionese temperada, e batata palha.',valor:'R$ 19,99',imagem:"imagens/x-tudo.png"},

        { nome:'Combo X-burguer',descriçao:'<strong>Descrição:</strong> lanche + batata frita + guaravita ou guaracamp.',valor:'R$ 12,00',imagem:"imagens/x-tudo.png"},

        { nome:'Combo Duplo cheddar',descriçao:' <strong>Descrição:</strong> lanche + batata frita + guaravita ou guaracamp.',valor:'R$ 16,00',imagem:"imagens/x-tudo.png"},

        { nome:'Combo X-Tudo ',descriçao:'<strong>Descrição:</strong> lanche + batata frita + guaravita ou guaracamp.',valor:'R$ 16,00',imagem:"imagens/x-tudo.png"},

        { nome:'Combo X-Picanha',descriçao:'<strong>Descrição:</strong>  lanche + batata frita + refrigerante lata.',valor:'R$ 25,00',imagem:"imagens/x-tudo.png"},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''},

        { nome:'',descriçao:'',valor:'',imagem:''}

    ]
   
}

function porçoes(){
    folhaPrincipal.style.display='none'
    folhaItens.style.display='block'
    tituloCabeçalhoItens.innerHTML=tituloItens[1]
}
function burguer(){
    folhaPrincipal.style.display='none'
    folhaItens.style.display='block'
    tituloCabeçalhoItens.innerHTML=tituloItens[2]
}
function cachorro(){
    folhaPrincipal.style.display='none'
    folhaItens.style.display='block'
    tituloCabeçalhoItens.innerHTML=tituloItens[3]
}
function bebidas(){
    folhaPrincipal.style.display='none'
    folhaItens.style.display='block'
    tituloCabeçalhoItens.innerHTML=tituloItens[4]
}
function sucos(){
    folhaPrincipal.style.display='none'
    folhaItens.style.display='block'
    tituloCabeçalhoItens.innerHTML=tituloItens[5]
}
function vitaminas(){
    folhaPrincipal.style.display='none'
    folhaItens.style.display='block'
    tituloCabeçalhoItens.innerHTML=tituloItens[6]
}

//------BOTÃO CARRINHO------
function interiorCarrinho(){
    let interiorCar ={ 
        voltarCar:document.querySelector('#voltar-carrinho'),
        interior:document.querySelector('#interior-carrinho')
}
    
    interiorCar.voltarCar.addEventListener('click',voltarCarrinho)

    interiorCar.interior.style.display='block'

    function voltarCarrinho(){
        interiorCar.interior.style.display='none'
    
    }
    

}




//------------ BOTÃO VOLTAR-------------------

function voltarInicio(){

    folhaPrincipal.style.display='grid'
    folhaItens.style.display='none'

}




