import {Editora} from "../modelo/Editora"
var editoras:Array<Editora>=[
    new Editora(0,"EDIT 1"),
    new Editora(1,"EDIT 2"),
    new Editora(2,"EDIT 3"),
    new Editora(3,"EDIT 4"),
]
export default class ControleEditoras{
    getNomeEditora(codEditora:number){
        var EdtNome=(editoras.filter((Edit)=>{
            return Edit.codEditora===Number(codEditora)
        }))
        return EdtNome[0].nome
    };
    getEditoras(){
        return editoras
    };
}