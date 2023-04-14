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
        let areaFeed=document.createElement('div')
        areaFeed.classList.add('areafeed')
        feed.appendChild(areaFeed)
        
        let imgFeed= document.createElement('img')
        imgFeed.src='./imagens-leandro/itens/x-tudo.png'
        areaFeed.appendChild(imgFeed)

        let titulosFeed= document.createElement('p')
        areaFeed.appendChild(titulosFeed)

        let titulosText= document.createTextNode(todo)
        titulosFeed.appendChild(titulosText)
        
       
        
    })   
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