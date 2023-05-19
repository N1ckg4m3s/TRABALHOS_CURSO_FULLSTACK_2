import Livro from "../modelo/Livro"
var livros:Array<Livro>=[]
var CodigoMaior:number;
let i:number
class ControleLivro{
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
        livros.splice(codigo,1)
    };
}
export default ControleLivro