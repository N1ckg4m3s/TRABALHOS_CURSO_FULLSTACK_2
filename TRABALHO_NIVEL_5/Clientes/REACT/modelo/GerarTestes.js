import Livro from "./Livro"
import ControleLivros from "../controle/ControleLivros"

var lvr1=new Livro(1,624,
    "Use a Cabeça: Java",
    "Use a Cabeça java é uma experiencia completa de aprendizado em programação orientada a objetos (OO) e Java.",
    "Alta Books",
    ["Bert Bates","Kathy Sierra"]
    )

var lvr2=new Livro(2,625,
    "Java, como Programar",
    "Milhoes de alunis e profissionais aprendem programação e desenvolvimento de software com os livros Deitel",
    "Pearson",
    ["Paul Deitel","Harvey Deitel"]
    )

new ControleLivros().incluir(lvr1)
new ControleLivros().incluir(lvr2)