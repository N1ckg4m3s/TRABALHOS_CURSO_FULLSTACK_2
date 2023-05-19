import { NextApiRequest, NextApiResponse } from 'next';
import { ContEditCalled } from '../../../classe/controle/ControleEditora';
export const controleEditora = ContEditCalled;
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
