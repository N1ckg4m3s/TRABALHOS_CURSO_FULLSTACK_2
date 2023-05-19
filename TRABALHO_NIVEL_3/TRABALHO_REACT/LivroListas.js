import ControleEditora from "./controle/ControleEditora"
import ControleLivro from "./controle/ControleLivros";
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
function GerarHead(){
    return<thead className="thead-dark">
        <tr>
            <th>TITULO</th>
            <th>RESUMO</th>
            <th>EDITORA</th>
            <th>AUTORES</th>
        </tr>
    </thead>
}

function LinhaLivro(CodEdit){
    var Lvrs
    const [Carregado,TrocaBolean] = useState(0);
    var Livros=new ControleLivro().obterLivros()
    useEffect(()=>{
        TrocaBolean(false)
        Lvrs=(Livros.map((Liv,Ind)=>(
            <tr key={Ind}>
                <td>
                    {Liv.titulo}
                    <p><button onClick={()=>{
                        new ControleLivro().excluir(Ind)
                        TrocaBolean(true)
                        }} class="btn btn-danger">Apagar</button></p>
                </td>
                <td>{Liv.resumo}</td>
                <td>{Liv.Editora}</td>
                <td><ul>{
                        Liv.autores.map((au)=>{
                            return <li key={au}>{au}</li>
                        })
                    }</ul></td>
            </tr>)))
    });
    Lvrs=(Livros.map((Liv,Ind)=>(
        <tr key={Ind}>
            <td>
                {Liv.titulo}
                <p><button onClick={()=>{
                    new ControleLivro().excluir(Ind)
                    TrocaBolean(true)
                    }} className="btn btn-danger">Apagar</button></p>
            </td>
            <td>{Liv.resumo}</td>
            <td>{Liv.Editora}</td>
            <td><ul>{
                    Liv.autores.map((au)=>{
                        return <li key={au}>{au}</li>
                    })
                }</ul></td>
        </tr>)))

    return(
        <div>
            <nav className="navbar bg-dark nav-start">
                <Link className="text-white NoTxtDec" to="/">CATALOGO</Link>
                <Link className="text-white NoTxtDec" to="/Adicionar">ADICIONAR</Link>
            </nav>
            <table className="table table-striped">
                {GerarHead()}
                <tbody>{Lvrs}</tbody>
            </table>
        </div>)
}
export default LinhaLivro