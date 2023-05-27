import { NextApiRequest, NextApiResponse } from 'next';
import ControleEditora from '../../../classe/controle/ControleEditora';
export const controleEditora = new ControleEditora();
export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === 'GET') {
      const editoras = controleEditora.getEditoras();
      console.log(editoras);
      res.status(200).json(editoras);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    res.status(500).end();
  }
};
