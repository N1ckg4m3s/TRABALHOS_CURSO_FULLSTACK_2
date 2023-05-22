const Livro=require("./livro-schema")
exports.obterLivros = async() => {
    console.log("obit liv A1")
    console.log("TENTAR OBTER O LIVRO")
    return await Livro.find()
        /*.then((A)=>{
            console.log("Esse é o valor A",A)
            res.json(A)
        })
        .catch((err)=>{
            console.log("Erro ao Find",err)
        })*/
}
exports.incluir=async(livro)=>{
    try {
        const {codigo,titulo,codEditora,resumo,autores}=livro
        console.log("TENTAR 'CREATE' O LIVRO")
        const lvr=await Livro.create(livro)
            .then((thm)=>{console.log("Valor do create.Then",thm)})
            .catch((err)=>{console.log("Valor do create.Catch",err)})
        return {lvr}
    } catch (error) {
        console.log("Erro ao incluir livro",error);
    }
};
exports.excluir = async (codigo) => {
    try {
        await Livro.deleteOne({ codigo: codigo });
        console.log("Livro excluído com sucesso");
    } catch (error) {
        console.log(error);
        throw new Error("Erro ao excluir livro");
    }
};