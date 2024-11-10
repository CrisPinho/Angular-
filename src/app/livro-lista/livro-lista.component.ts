import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  livros: Array<Livro> = [];

  constructor(
    private controleLivrosService: ControleLivrosService,
    private controleEditoraService: ControleEditoraService
  ) {}

  ngOnInit(): void {   
    this.livros = this.controleLivrosService.obterLivros();
  }

  excluirLivro(codigo: number): void {
    this.controleLivrosService.excluir(codigo);
    this.livros = this.controleLivrosService.obterLivros();
  }

  obterNomeEditora(codEditora: number): string {
    return this.controleEditoraService.getNomeEditora(codEditora) || 'Editora não encontrada';
  }
}
