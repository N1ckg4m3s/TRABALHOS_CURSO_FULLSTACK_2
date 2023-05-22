const Banco=require("./conexao")
var LivroSchema = new Banco.Schema({
    //_id:BancoConn.Schema.Types.ObjectId,
    codigo:Number,
    titulo:String,
    codEditora:Number,
    resumo:String,
    autores:[String]
})
var Livro=Banco.model('Livro',LivroSchema)
module.exports=Livro