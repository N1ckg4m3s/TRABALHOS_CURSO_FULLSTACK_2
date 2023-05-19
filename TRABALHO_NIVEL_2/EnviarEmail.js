function EnviarEmail(){
    Nome=document.getElementById("InputNome").value
    Email=document.getElementById("InputEmail").value
    Cep=document.getElementById("InputCep").value
    Rua=document.getElementById("InputRua").value
    Numero=document.getElementById("InputNumero").value
    Complemento=document.getElementById("InputComplemento").value
    Cidade=document.getElementById("InputCidade").value
    Uf=document.getElementById("InputUf").value
    Txt1="Meu Nome: "+Nome
    Txt2="\n Meu Email: "+Email
    Txt3="\n Moro ná "+Rua+","+Numero+" "+Cidade+" "+Cep+" "+Uf
    Txt4="\n Complemento: "+Complemento

    document.getElementById("TEXTO").value=Txt1+Txt2+Txt3+Txt4 
}