import { Injectable } from '@angular/core';
import { Livro } from './livro'; 

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {

  private livros: Array<Livro> = [
    { codigo: 1, titulo: 'The brazilian exchange student', autores: ['Telma Guimarães'], codEditora: 1, resumo: 'Com texto escrito em inglês, a obra apresenta aos leitores comparações entre diferentes culturas através da temática do namoro. De forma leve e divertida, não rotula os jovens como bobos ou irresponsáveis, mas valoriza a amizade e o respeito entre eles.'},
    { codigo: 2, titulo: 'Dominando Ética', autores: ['Alysson Rachid'], codEditora: 1, resumo: 'Eles encontrarão neste livro o resumo dos principais pontos da matéria de Ética e Estatuto da Advocacia, conforme abordado nos melhores e mais tradicionais cursos preparatórios do país.'},
    { codigo: 3, titulo: 'Joel Rufino dos Santos - Humanista, inquieto, um homem livre', autores: ['Luis Pimentel'], codEditora: 2, resumo: 'Um escritor negro, com família de origem pernambucana, vindo de Cascadura (RJ), cujo primeiro emprego foi de [office] boy.' }
  ];

  constructor() {}

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }


  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
