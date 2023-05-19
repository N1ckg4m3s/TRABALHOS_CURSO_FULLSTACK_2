import Livro from '../modelo/Livro';
var livros: Array<Livro> = [];
var CodigoMaior: number;
let i: number;
class ControleLivro {
  obterLivros() {
    return livros;
  }
  incluir(LivroCall: Livro) {
    console.log('Incluir()');
    CodigoMaior = 0;
    for (i = 0; i < livros.length; i++) {
      if (livros[i].codigo >= CodigoMaior) {
        CodigoMaior = livros[i].codigo;
      }
    }
    try {
      LivroCall['codigo'] = CodigoMaior + 1;
      livros.push(LivroCall);
      return true;
    } catch (err) {
      console.log(err);
    }
  }
  excluir(codigo: number) {
    console.log('excluir o livro', codigo);
    const Ind = livros.findIndex((Liv) => {
      console.log(Liv.codigo, codigo, Liv.codigo == codigo);
      return Liv.codigo == codigo;
    });
    console.log('Achei esse Index:', Ind);
    livros.splice(Ind, 1);
    return true;
  }
}
export default ControleLivro;
export const ContLivCalled = new ControleLivro();
