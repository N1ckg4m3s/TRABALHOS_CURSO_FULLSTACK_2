import { Component,OnInit } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
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
  async ngOnInit(){
    this.editora=new this.servEditora().getEditoras()
    new this.servLivro().obterLivros()
    .then((A)=>A.json())
    .then((A)=>{
      this.livros=A
    })
  }
  ApagarLvr(Liv:any){
    new this.servLivro().excluir(Liv._id)
    .then(()=>{
      new this.servLivro().obterLivros()
      .then((A)=>A.json())
      .then((A)=>{
        this.livros=A
      })
    })
  }
}
