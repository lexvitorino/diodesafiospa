import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'spa-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  @Input() data: Pessoa = new Pessoa();
  @Output() execute = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public action(actionIs: string) {
    this.execute.emit({
      status: actionIs,
      data: actionIs === 'BACK' ? null : this.data
    });
  }

}
