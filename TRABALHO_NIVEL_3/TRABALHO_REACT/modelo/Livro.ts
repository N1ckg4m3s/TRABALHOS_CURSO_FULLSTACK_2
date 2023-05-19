export default class Livro {
    codigo:number=0;
    codEditora:number=0;
    titulo:string="";
    resumo:string="";
    Editora:string="";
    autores: string[]=[];
    constructor(CD:number,CdE:number,Tit:string,Res:string,Edt:string,Aut:string[]){
        this.codigo=CD
        this.codEditora=CdE
        this.titulo=Tit
        this.resumo=Res
        this.Editora=Edt
        this.autores=Aut
    };
}