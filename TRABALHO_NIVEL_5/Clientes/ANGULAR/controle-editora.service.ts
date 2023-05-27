import {Editora} from "./editora"
import { Injectable } from '@angular/core';
import { ControleLivrosService } from "./controle-livros.service";
var editoras:Array<Editora>=[]
@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  getNomeEditora(codEditora:Number){
    console.log(codEditora)
    var EdtNome=(editoras.filter((Edit)=>{
        return Edit.codEditora==Number(codEditora)
    }))
    return EdtNome[0].nome
  };
  getEditoras(){
    new ControleLivrosService().obterLivros().forEach((Lvr)=>{
      if (editoras.find(Edt=>Edt.codEditora===Lvr.codEditora)==undefined){
        //console.log(editoras.find(Edt=>Edt.codEditora===Lvr.codEditora))
        editoras.push(new Editora(Lvr.codEditora,Lvr.Editora))
      }
    })
    return editoras
  };
  constructor() { }
}
