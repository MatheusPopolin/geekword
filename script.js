const itens = [
{
    image: "animewoman.jpg",
    itemName: "Anime Woman",
    price: 49.99,
    type: "actions"
},
{
    image: "dragonballpersonagem.jpg",
    itemName: "Goku",
    price: 49.99,
    type: "actions"
},
{
    image: "starwarspersonagem.jpg",
    itemName: "Yoda",
    price: 49.99,
    type: "actions"
},
{
    image: "animewoman.jpg",
    itemName: "Anime Woman",
    price: 49.99,
    type: "actions"
},
{
    image: "dragonballpersonagem.jpg",
    itemName: "Goku",
    price: 49.99,
    type: "actions"
},
{
    image: "starwarspersonagem.jpg",
    itemName: "Yoda",
    price: 49.99,
    type: "actions"
},
{
    image: "clock.jpg",
    itemName: "Relógio",
    price: 39.99,
    type: "painting"
},
{
    image: "gamepad.jpg",
    itemName: "Gamepad",
    price: 39.99,
    type: "painting"
},
{
    image: "personagem.jpg",
    itemName: "Personagem",
    price: 39.99,
    type: "painting"
},
{
    image: "clock.jpg",
    itemName: "Relógio",
    price: 39.99,
    type: "painting"
},
{
    image: "gamepad.jpg",
    itemName: "Gamepad",
    price: 39.99,
    type: "painting"
},
{
    image: "personagem.jpg",
    itemName: "Personagem",
    price: 39.99,
    type: "painting"
}
]

let listFigures = [];
let listFrames = [];

function separateItens(lista){
    for(let i=0; i<lista.length; i++){
        if(lista[i].type=="actions"){
            listFigures.push(lista[i]);
        } else if(lista[i].type=="painting"){
            listFrames.push(lista[i]);
        }
    }
}

separateItens(itens);

function listaItens(lista){
    for(let i=0; i<lista.length; i++){
        //CRIANDO E ALIMENTANDO LI 
        let tagLi    = document.createElement("li");
        let tagImg   = document.createElement("img");
        let tagH3    = document.createElement("h3");
        let tagP     = document.createElement("p");
        
        tagImg.src      = `assets/img/${lista[i].type}/${lista[i].image}`
        tagH3.innerText = lista[i].itemName;
        tagP.innerText  = `R$ ${lista[i].price}`;
        
        tagLi.append(tagImg, tagH3, tagP);
        
        //SELECIONANDO UL E ADD LI 
        let tagUl = document.querySelector(`.${lista[i].type}`);
        tagUl.appendChild(tagLi);
    }
}

listaItens(listFigures);
listaItens(listFrames);