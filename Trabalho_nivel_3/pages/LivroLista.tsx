import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../components/Menu';
import LinhaLivro from '../components/LinhaLivro';
import Livro from '../classe/modelo/Livro';
const LivroLista = () => {
  const baseURL = '/api/livros';
  const [livros, setlivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(true);
  const Apagar = async (Ind: number) => {
    await fetch(baseURL + '/' + Ind, { method: 'DELETE' })
      .then((a) => {
        console.log('then', a);
        setCarregado(true);
      })
      .catch((a) => {
        console.log('catch:', a);
      });
  };
  const obterLivros = async () => {
    try {
      const resposta = await fetch(baseURL, { method: 'GET' });
      const dados = await resposta.json();
      setlivros(dados);
      setCarregado(false);
      return true;
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    obterLivros();
  }, [!carregado]);
  return (
    <div>
      <Head>
        <title>LivroLista</title>
        <meta name="description" content="Lista de livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <h1>LivroLista</h1>
        <table className="table table-striped MgnLeft">
          <thead className="thead-dark">
            <tr>
              <th>TITULO</th>
              <th>RESUMO</th>
              <th>EDITORA</th>
              <th>AUTORES</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((Liv) => {
              return LinhaLivro(Liv, Apagar);
            })}
          </tbody>
        </table>
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

export default LivroLista;
