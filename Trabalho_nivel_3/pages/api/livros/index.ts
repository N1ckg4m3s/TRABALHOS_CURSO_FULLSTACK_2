import { NextApiRequest, NextApiResponse } from 'next';
import { ContLivCalled } from '../../../classe/controle/ControleLivros';
import Livro from '../../../classe/modelo/Livro';
export const ControleLivro = ContLivCalled;
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method == 'POST') {
      const Lvr = req.body;
      const novoLivro = new Livro(
        Lvr.codigo,
        Lvr.codEditora,
        Lvr.titulo,
        Lvr.resumo,
        Lvr.Editora,
        Lvr.autores,
      );
      ControleLivro.incluir(novoLivro);
      res.status(200).json({ mensagem: 'Livro adicionado com sucesso.' });
    } else if (req.method == 'GET') {
      const livros = ControleLivro.obterLivros();
      res.status(200).json(livros);
    } else {
      res.status(400).end();
    }
  } catch (error) {
    res.status(500).end();
  }
};
