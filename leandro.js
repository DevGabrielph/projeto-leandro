let por=[
    { nome:' Batata Frita 200g',descriçao:'Batata frita , ketchup, maionese temperada,queijo ralado e orégano.',valor:7.00,imagem:'',obs:'',valorF:''},
    
    { nome:'Batata Frita 400g',descriçao:'Batata frita , calabresa, ketchup, maionese temperada,queijo ralado e orégano.',valor:14.00,imagem:'',obs:'',valorF:''}
]
let Hamb=[
    { nome:'Hambúrguer',descriçao:' Pão, carne, alface, ketchup ,maionese temperada , e batata palha.',valor:5.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
    
    { nome:'X-Búrguer',descriçao:'  Pão, carne, queijo, alface, ketchup ,maionese temperada , e batata palha.',valor:6.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
    
        { nome:'Duplo X-Búrguer ',descriçao:' Pão, 2 carnes, 2 queijos, alface, ketchup ,maionese temperada , e batata palha.',valor:10.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},

        { nome:'Duplo Cheddar',descriçao:'Pão, 2 carnes, 2 cheddar, alface, ketchup ,maionese temperada , e batata palha.',valor:10.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
        
        { nome:'X-Egg ',descriçao:' Pão, carne, queijo , alface, ketchup ,maionese temperada , e batata palha.',valor:9.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},

        { nome:'X-Tudo',descriçao:' Pão, carne, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:9.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},

        { nome:'X-Trovão',descriçao:'   Pão, 2 carnes, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:14.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},

        { nome:'X-Tudão',descriçao:'  Pão, 2 carnes, 2 queijos, 2 presuntos, bacon, 2 ovos, alface, ketchup ,maionese temperada , e batata palha.',valor:16.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
        
        { nome:'X-Calabresa',descriçao:'Pão, carne, queijo, presunto, calabresa, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:13.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''},
        
        { nome:'X-Picanha',descriçao:' Pão, carne de picanha 120g, queijo, presunto, bacon, ovo, alface, ketchup ,maionese temperada , e batata palha.',valor:16.00,imagem:'imagens/x-tudo.png',obs:'',valorF:''}
] 


let todosItens= [...por,...Hamb]

console.log(todosItens)
let header=document.querySelector('.header')

let imgLogo= document.createElement('img')
imgLogo.src='./imagens-leandro/img-logo/android-chrome-187x66.png'
header.appendChild(imgLogo)

let caixaCarrinho=document.createElement('div')
header.appendChild(caixaCarrinho)

let numberItenscar=document.createElement('p')
numberItenscar.innerHTML='0'
caixaCarrinho.appendChild(numberItenscar)

let imgCarrinho= document.createElement('ion-icon')
imgCarrinho.setAttribute('name','cart-outline')
caixaCarrinho.appendChild(imgCarrinho)
imgCarrinho.classList.add('imgCarrinho')
imgCarrinho.setAttribute('onclick','Carrinho()')

let main=document.querySelector('.main')

let titulosP= [ 'Combos','Porções','Hambúrgueres','Cachorro Quente','Bebidas']

rendePaginaP()

function rendePaginaP(){
    let feed= document.createElement('div')
    feed.classList.add('feed')
    main.appendChild(feed)
    
    titulosP.map((todo)=>{

        let posicaoFeed= titulosP.indexOf(todo)

        let areaFeed=document.createElement('div')
        areaFeed.classList.add('areafeed')
        feed.appendChild(areaFeed)
        
        let imgFeed= document.createElement('img')
        imgFeed.src='./imagens-leandro/itens/x-tudo.png'
        areaFeed.appendChild(imgFeed)
        imgFeed.setAttribute('onclick',`clickTitulos(${posicaoFeed})`)

        let titulosFeed= document.createElement('p')
        areaFeed.appendChild(titulosFeed)

        let titulosText= document.createTextNode(todo)
        titulosFeed.appendChild(titulosText)
        
       
        
    }) 
    
    
}

function clickTitulos(posicaoFeed){
    alert(posicaoFeed)
}

function Carrinho(){
    main.innerHTML=''
    renderCarrinho()

}
function renderCarrinho(){

    let carrinho= document.createElement('div')
    main.appendChild(carrinho)
    carrinho.classList.add('carrinho')

    let cabecalhoCarrinho= document.createElement('div')
    carrinho.appendChild(cabecalhoCarrinho)
    cabecalhoCarrinho.classList.add('voltarCar')

    let btnVoltarCar=document.createElement('ion-icon')
    btnVoltarCar.setAttribute('name','return-up-back')
    btnVoltarCar.setAttribute('onclick','voltarCar()')
    cabecalhoCarrinho.appendChild(btnVoltarCar)

 
    let titulo=document.createElement('p')
    titulo.innerHTML='Carrinho'
    cabecalhoCarrinho.appendChild(titulo)

    
}

function voltarCar(){
    main.innerHTML=''
}