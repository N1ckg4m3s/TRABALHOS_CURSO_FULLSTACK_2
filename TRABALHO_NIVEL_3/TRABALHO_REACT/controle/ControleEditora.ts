import {Editora} from "../modelo/Editora"
import ControleLivro from "./ControleLivros"
var editoras:Array<Editora>=[]
export default class ControleEditoras{
    getNomeEditora(codEditora:number){
        var EdtNome=(editoras.filter((Edit)=>{
            return Edit.codEditora==Number(codEditora)
        }))
        return EdtNome[0].nome
    };
    getEditoras(){
        new ControleLivro().obterLivros().forEach((Lvr)=>{
            editoras[Lvr.codEditora]=new Editora(Lvr.codEditora,Lvr.Editora)
        })
        return editoras
    };
}