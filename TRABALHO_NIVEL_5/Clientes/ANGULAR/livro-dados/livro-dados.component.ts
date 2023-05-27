import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
//import GerarDadosTeste from "../GerarDadosTeste"
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {
  router: Router;
  public editora: Editora[]=[]
  public livros: Livro[]=[]
  private servEditora=ControleEditoraService
  private servLivro=ControleLivrosService
  public titulo!:string; resumo!:string; editoraCod!:string
  public autores!: string[]
  constructor(rout:Router){this.router=rout}
  ngOnInit(){
    // OBTER DADOS DO ARQUIVO JSON
    this.livros=new this.servLivro().obterLivros()
    this.editora=new this.servEditora().getEditoras()
  }
  IncluirDados(form:any):void {
    form=form.value
    new this.servLivro().incluir(new Livro(
      0,Number(form.editoraForm),
      form.titulo,form.resumo,
      new this.servEditora().getNomeEditora(form.editoraForm),
      form.autores.split("\n")
    ))
    this.router.navigateByUrl("/")
    console.log(new this.servLivro().obterLivros())
  }
}
