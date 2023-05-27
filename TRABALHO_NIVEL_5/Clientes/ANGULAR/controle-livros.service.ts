import {Livro} from "./livro"
import { Injectable } from '@angular/core';
var livros:Array<Livro>=[]
var CodigoMaior:number;
let i:number
@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  obterLivros(){
    return(livros)
  };
  incluir(Livro:Livro){
      CodigoMaior=0;
      for(i=0;i<livros.length;i++){
          if (livros[i].codigo>=CodigoMaior){
              CodigoMaior=livros[i].codigo
          }
      }
      Livro.codigo=CodigoMaior+1
      livros.push(Livro)
  };
  excluir(codigo:number){
    livros.splice(livros.findIndex((A)=>{
      return A.codigo==codigo
    }),1)
  };
  constructor() { }
}
