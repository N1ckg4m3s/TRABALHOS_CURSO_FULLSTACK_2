var Livro=require("../src/modelo/livro-dao")
var express=require("express")
var router=express.Router()
router.get('/', async (req, res) => {
    console.log("Method GET")
    try {
        var livros=Livro.obterLivros();
        livros.then((A)=>{res.json(A)})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.post('/', async (req, res) => {
    console.log("Method POST")
    try {
        var Inc=await Livro.incluir(req.body)
        res.json({ message: 'sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
router.delete('/:id', async (req, res) => {
    console.log("Method DELETE")
    try {
        var codigo = req.params.codigo;
        await Livro.excluir(codigo);
        res.json({ message: 'sucesso' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports=router