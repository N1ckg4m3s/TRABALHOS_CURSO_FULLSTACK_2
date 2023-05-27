import ControleEditora from "./controle/ControleEditora"
import ControleLivro from "./controle/ControleLivros"
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Livro from "./modelo/Livro"

var Editoras = new ControleEditora().getEditoras()
var Opcoes

function LinhaLivro() {
    const [Titulo, SetTitulo] = useState("")
    const [Resumo, SetResumo] = useState("")
    const [Autores, SetAutores] = useState("")
    const [CodEdit, SetCodEdit] = useState(0)
    Opcoes = (
        <select
        id="InpEditora"
        required
        className="form-control"
        onChange={(e) => {SetCodEdit(e.target.value)}}>
        <option key={-1} value={0}>--SELECIONE--</option>

        {Editoras.map((op) => {
            return (
            <option key={op.codEditora} value={op.codEditora}>
                {op.nome}
            </option>
            )
        })}
    </select>
    )

    const TratarCombo = (e) => {
        e.preventDefault()
        if (CodEdit !== 0) {
        new ControleLivro()
            .incluir(
                new Livro("", 
                Number(CodEdit), 
                Titulo, Resumo, 
                new ControleEditora().getNomeEditora(CodEdit), 
                Autores.split("\n")
            ))
            .then(() => {
            document.getElementById("InpTitulo").value = ""
            document.getElementById("InpResumo").value = ""
            document.getElementById("InpEditora").value = 0
            document.getElementById("InpAutores").value = ""
            })
        }
    }
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
        <form id="Form1" onSubmit={(e) => TratarCombo(e)}>
            <div className="form-group">
                <label required htmlFor="FormTitulo">
                    Titulo
                </label>
                <input
                    required
                    type="text"
                    id="InpTitulo"
                    onChange={(e) => {
                    SetTitulo(e.target.value)
                    }}
                    className="form-control"></input>
            </div>
            <div className="form-group">
                <label htmlFor="FormResumo">Resumo</label>
                <textarea
                    required
                    id="InpResumo"
                    onChange={(e) => {
                    SetResumo(e.target.value)
                    }}
                    className="form-control"></textarea>
            </div>
            <div className="form-group">
                <label htmlFor="FormTitulo">Editora</label>
                {Opcoes}
            </div>
            <div className="form-group">
                <label htmlFor="FormTitulo">Autores(1) por linha</label>
                <textarea
                id="InpAutores"
                required
                onChange={(e) => {
                SetAutores(e.target.value)
                }}
                className="form-control"></textarea>
            </div>
            <button type="submit" value="Submit" className="btn btn-primary">
                Salvar dados
            </button>
        </form>
        </div>
    )
}
export default LinhaLivro