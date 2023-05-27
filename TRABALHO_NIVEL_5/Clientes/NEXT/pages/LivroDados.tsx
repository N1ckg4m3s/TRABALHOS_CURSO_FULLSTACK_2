import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Livro from '../classe/modelo/Livro';
import { Menu } from '../components/Menu';
import { controleEditora } from './api/editoras/index';
import ControleLivro from '../classe/controle/ControleLivros';

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState<number>(0);
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));
  const Router = useRouter().push;
  const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    setCodEditora(value);
  };
  const incluir = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (codEditora != 0) {
      const Lvr = new Livro(
        '',
        codEditora,
        titulo,
        resumo,
        controleEditora.getNomeEditora(codEditora),
        autores.split('\n'),
      );
      if (new ControleLivro().incluir(Lvr)) {
        Router('/LivroLista');
      }
    }
  };
  return (
    <div>
      <Head>
        <title>LivroDados</title>
        <meta name="description" content="Dados do Livro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <h1>LivroDados</h1>
        <form onSubmit={incluir}>
          <div className="form-group">
            <label className="MgnLeft">
              Título:
              <input
                required
                type="text"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="MgnLeft">
              Resumo:
              <textarea
                required
                value={resumo}
                onChange={(event) => setResumo(event.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <div className="form-group">
            <label className="MgnLeft">
              Editora:
              <select required value={codEditora} onChange={tratarCombo} className="form-control">
                <option key={-1} value={-1}>
                  ===========
                </option>
                {opcoes.map((opcao) => (
                  <option key={opcao.value} value={opcao.value}>
                    {opcao.text}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label className="MgnLeft">
              Autores:
              <textarea
                required
                value={autores}
                onChange={(event) => setAutores(event.target.value)}
                className="form-control"
              />
            </label>
          </div>
          <button type="submit" className="form-control btn btn-primary MgnLeft">
            Salvar Dados
          </button>
        </form>
      </main>
      <style jsx>{`
        .MgnLeft {
          margin-left: 5%;
          width: 90%;
        }
      `}</style>
    </div>
  );
};

export default LivroDados;
