let swap=(Vetor,Pos1,Pos2)=>{ // Trocar o valor entre as posiçoes
    S=Vetor[Pos2].innerHTML
    Vetor[Pos2].innerHTML=Vetor[Pos1].innerHTML
    Vetor[Pos1].innerHTML=S
}
let shuffle=(Vetor,trocas)=>{ // Embaralhar os itens
    Lista=document.getElementById("Valores_ID")
    for(i=0;i<=Lista.children.length;i++){
        Lista.append(Lista.children[Math.floor(Math.random()*Lista.children.length)])
    }
}
let bubble_sort=(Vetor)=>{ // Executar o metodo com o valor de entrada
    for(i1=0;i1<Vetor.length;i1++){
        for(i2=0;i2<Vetor.length;i2++){
            if(Vetor[i2]!=undefined&Vetor[i2+1]!=undefined){
                if(Number(Vetor[i2].innerHTML)>Number(Vetor[i2+1].innerHTML)){
                    swap(Vetor,i2,i2+1)
                }
            }
        }
    }
}
let selection_sort=(Vetor)=>{ // Executar o metodo com o valor de entrada
    for(i1=0;i1<Vetor.length;i1++){
        for(i2=0;i2<Vetor.length;i2++){
            if(Vetor[i1]!=undefined&Vetor[i2+1]!=undefined){
                if(Number(Vetor[i1].innerHTML)<Number(Vetor[i2].innerHTML)){
                    swap(Vetor,i1,i2)
                }
            }
        }
    }
}
let quick_sort=(Vetor,Inic,Fim)=>{ // Executar o metodo com o valor de entrada
    Pvt=Vetor[Inic].innerHTML
    L=Inic
    R=Fim
    while(L<=R){
        while(Vetor[L].innerHTML<Pvt){L+=1}
        while(Vetor[R].innerHTML>Pvt){R-=1}
        if(L<=R){
            swap(Vetor,L,R)
            L+=1
            R-=1
        }
    }
    if(Inic<R){quick_sort(Vetor,Inic,R)}
    if(L<Fim){quick_sort(Vetor,L,Fim)}
    return Vetor
}
function add(){
    Input=document.getElementById("Valor_ID")
    Lista=document.getElementById("Valores_ID")
    if(Input.value!=""){
        NewLi=document.createElement("li")
        NewLi.innerHTML=Input.value
        Lista.append(NewLi)
    }
    Input.value=""
}
function ordenar(){
    opcaoSort=document.getElementById("Selection_ID")
    // Gerar Array
    Lista=document.getElementById("Valores_ID")
    eval(opcaoSort.value)(Lista.children,0,Lista.children.length)
}
// DADOS TESTE
