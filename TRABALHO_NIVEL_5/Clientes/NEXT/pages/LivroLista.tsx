export default (Liv, Index, Apagar) => {
  console.log('Gerar linha', Liv);
  return (
    <tr key={Index}>
      <td>
        {Liv.titulo}
        <p>
          <button
            onClick={() => {
              console.log('Cliquei no Excluir');
              Apagar(Liv._id);
            }}
            className="btn btn-danger"
          >
            Apagar
          </button>
        </p>
      </td>
      <td>{Liv.resumo}</td>
      <td>{Liv.Editora}</td>
      <td>
        <ul>
          {Liv.autores.map((au) => {
            return <li key={au}>{au}</li>;
          })}
        </ul>
      </td>
    </tr>
  );
};
