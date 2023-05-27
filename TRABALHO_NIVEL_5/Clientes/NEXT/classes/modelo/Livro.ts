export default class Livro {
    codigo:string='';
    codEditora:number=0;
    titulo:string="";
    resumo:string="";
    Editora:string="";
    autores: string[]=[];
    constructor(CD:string,CdE:number,Tit:string,Res:string,Edt:string,Aut:string[]){
        this.codigo=CD
        this.codEditora=CdE
        this.titulo=Tit
        this.resumo=Res
        this.Editora=Edt
        this.autores=Aut
    };
}
