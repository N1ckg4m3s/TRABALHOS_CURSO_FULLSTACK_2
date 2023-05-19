import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivro } from '.';
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method == 'DELETE') {
      const codigo = Number(req.query.codigo) as number;
      ControleLivro.excluir(codigo);
      res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).end();
  }
};
