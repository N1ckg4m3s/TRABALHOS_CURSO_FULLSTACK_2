// CONEXÃO.JS
var Banco=require("mongoose")
var URI="mongodb://127.0.0.1:27017/livraria"
var options={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
Banco.connect(URI,options)
  .then(()=>{console.log("Tudo certo")})
  .catch((err)=>{console.log("Deu erro",err)})
module.exports=Banco
