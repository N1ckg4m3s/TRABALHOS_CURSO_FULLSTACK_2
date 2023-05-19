import Editora from '../modelo/Editora';
import ControleLivro from './ControleLivros';
var editoras: Array<Editora> = [
  new Editora(620, 'Editora 1'),
  new Editora(625, 'Editora 2'),
  new Editora(630, 'Editora 3'),
];
export default class ControleEditoras {
  getNomeEditora(codEditora: number) {
    var EdtNome = editoras.filter((Edit) => {
      return Edit.codEditora == codEditora;
    });
    if (EdtNome.length > 0) {
      return EdtNome[0].nome;
    }
    return 'Não achei uma editora com o codigo ' + codEditora;
  }
  getEditoras() {
    return editoras;
  }
}
export const ContEditCalled = new ControleEditoras();
