function getListaIngredientes(Receita){
    ingred=Receita.Ingredientes.split(",")
    Texto="<ul>"
    for(i in ingred){Texto+=`<li>${ingred[i]}</li>`}
    return Texto+"</ul>"
}
function getCard(Receita){
    console.log("To aq")
    let Catalogo=document.getElementById("pnlCatalogo")
    Lista=getListaIngredientes(Receita)
    document.getElementById("pnlCatalogo").innerHTML+=
        `<div class="card" style="width: 250px;">\
            <img class="card-img-top" src="${Receita.Imagem}">\
            <div class="card-body">\
                <h2 class="card-title">${Receita.Titulo}</h2>
                ${Lista}
                <hr>\
                <label class="card-text">${Receita.Preparo}</label>\
            </div>\
        </div>`
}
function preencherCatalogo(){
    let Parse=JSON.parse(json)
    for(i in Parse){
        getCard(Parse[i])
    }
}