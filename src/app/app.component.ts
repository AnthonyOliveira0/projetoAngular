import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Olá mundo!';

  link: string = 'https://www.google.com';

  // Variáveis que armazenarão as cores do background e da fonte
  background: string = '#ffffff';
  color: string = '#000000';

  // Variável que armazenará a opção selecionada
  selectedOption: string = '';

  // Variável que armazenará a referência ao seletor
  select: HTMLSelectElement | null = null;

  // Variável que armazenará o valor da soma
  total: number = 0;

  options: Array<{ label: string, value: number }> = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 }
  ];

  constructor() {}

  ngOnInit() {
    // Define as cores iniciais do background e da fonte
    this.background = '#ffffff';
    this.color = '#000000';

    
    const select = document.querySelector('select');
    if (select) {
      // Atribui o seletor à propriedade `select`
      this.select = select;
    }
  }

  // Função que será executada quando o parágrafo for clicado
  onParagraphClick() {
    // Altera as cores do background e da fonte
    this.background = '#000000';
    this.color = '#ffffff';
  };

  onSelectionChange() {
    if (this.select)
    this.selectedOption = this.select.value;
    this.total += Number(this.selectedOption);
  }

}
