import { Component,OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
//import GerarDadosTeste from "../GerarDadosTeste"
@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent {
  public editora!:Editora[]
  public livros!:Livro[]
  private servEditora=ControleEditoraService
  private servLivro=ControleLivrosService
  constructor(){}
  ngOnInit(){
    this.editora=new this.servEditora().getEditoras()
    this.livros=new this.servLivro().obterLivros()
  }
  ApagarLvr(Code:number){
    new this.servLivro().excluir(Code)
  }
}
