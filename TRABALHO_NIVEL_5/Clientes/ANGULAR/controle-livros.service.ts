import {Livro} from "./livro"
import { Injectable } from '@angular/core';
var baseURL="http://localhost:3030/livros"
@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  async obterLivros(){
    return await fetch(baseURL,{method:"GET"})
  };
  async incluir(Livro:Livro){
    console.log("Livro pra incluir", Livro)
    const Resp=await fetch(baseURL,{
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(Livro),
    })
    return Resp
};
async excluir(codigo:string){
    console.log(codigo)
    const Resp=await fetch(baseURL+"/"+codigo,{method:'DELETE',})
    return Resp
};
  constructor() { }
}