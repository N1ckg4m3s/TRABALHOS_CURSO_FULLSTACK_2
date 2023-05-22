import { ControleLivrosService } from "./controle-livros.service"
import { Livro } from "./livro"

export default class{
    Gerar(){
        new ControleLivrosService().incluir(
            new Livro(1,624,
                "Use a Cabeça: Java",
                "Use a Cabeça java é uma experiencia completa de aprendizado em programação orientada a objetos (OO) e Java.",
                "Alta Books",
                ["Bert Bates","Kathy Sierra"]
            )
        )
        new ControleLivrosService().incluir(
            new Livro(2,625,
                "Java, como Programar",
                "Milhoes de alunis e profissionais aprendem programação e desenvolvimento de software com os livros Deitel",
                "Pearson",
                ["Paul Deitel","Harvey Deitel"]
            )
        )
    }
}
