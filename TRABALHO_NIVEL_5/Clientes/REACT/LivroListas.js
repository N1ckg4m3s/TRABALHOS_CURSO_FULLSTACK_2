import ControleLivro from "./controle/ControleLivros"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
function GerarHead() {
  return (
    <thead className="thead-dark">
      <tr>
        <th>TITULO</th>
        <th>RESUMO</th>
        <th>EDITORA</th>
        <th>AUTORES</th>
      </tr>
    </thead>
  )
}
function LivroLista() {
  const [Livros, setLivros] = useState([])
  const [Carregado, setCarregado] = useState(false)
  const excluirLivro = (index) => {
      new ControleLivro().excluir(index).then(() => {
        setCarregado(false)
      })
  }
  const LinhaLivro=(Livro)=>{
    console.log("Livro a colocar",Livro)
      return(
        <tr key={Livro._id}>
          <td>
            {Livro.titulo}
            <p>
            <button
              onClick={() => {
                excluirLivro(Livro._id)
              }}
              className="btn btn-danger">Apagar</button>
            </p>
          </td>
          <td>{Livro.resumo}</td>
          <td>{Livro.Editora}</td>
          <td>
            <ul>
            {Livro.autores.map((au, index) => (
                <li key={index}>{au}</li>
            ))}
            </ul>
          </td>
        </tr>
      )
  }
  useEffect(() => {
    new ControleLivro().obterLivros()
    .then((A)=>A.json())
    .then((A)=>{
      setLivros(A)
      setCarregado(true)
    })
  }, [Carregado])
  console.log(Livros)
  return (
    <div>
      <nav className="navbar bg-dark nav-start">
        <Link className="text-white NoTxtDec" to="/">
          CATALOGO
        </Link>
        <Link className="text-white NoTxtDec" to="/Adicionar">
          ADICIONAR
        </Link>
      </nav>
      <table className="table table-striped">
        {GerarHead()}
        <tbody>{Livros.map((Liv)=>{return LinhaLivro(Liv)})}</tbody>
      </table>
    </div>
  )
}
export default LivroLista