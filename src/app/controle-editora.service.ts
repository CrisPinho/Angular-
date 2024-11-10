
import { Injectable } from '@angular/core';
import { Editora } from './editora'; 

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  
  
  private editoras: Array<Editora> = [
    { codEditora: 1, editora: 'Livraria Cultura S/A' },
    { codEditora: 2, editora: 'Editora Ciência Moderna' },
    { codEditora: 3, editora: 'Editora Moderna' }
  ];

  constructor() {}

  
  getEditoras(): Array<Editora> {
    return this.editoras;
  }

 
  getNomeEditora(codEditora: number): string | undefined {
    const editora = this.editoras.find(e => e.codEditora === codEditora);
    return editora ? editora.editora : undefined;
  }
}
