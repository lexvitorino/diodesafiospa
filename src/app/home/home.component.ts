import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa.model';
import { PessoaService } from './../pessoa/pessoa.service';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'name', 'city', 'actions'];
  public filter: string;
  public actionIs = 'LIST';
  public selected: Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.pessoaService.get().subscribe(resp => this.pessoaService.dataSource = resp);
  }

  public get(): Pessoa[] {
    if (!this.filter || this.filter === '') {
      return this.pessoaService.dataSource;
    } else {
      return this.pessoaService.dataSource.filter(
        v =>
          (v.name.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) !== -1) ||
          (v.city.toLocaleLowerCase().indexOf(this.filter.toLocaleLowerCase()) !== -1) ||
          (v.id === this.filter)
      );
    }
  }

  public action(actionIs: string, data: Pessoa) {
    this.actionIs = actionIs;
    this.selected = data ?? new Pessoa();
  }

  public outPessoa(resp: any) {
    switch (resp.status) {
      case 'BACK':
        this.actionIs = 'LIST';
        break;
      case 'SAVE':
        if (resp.data.id) {
          const idx = this.pessoaService.dataSource.findIndex(c => c.id === resp.data.id);
          this.pessoaService.dataSource[idx] = resp.data;
        } else {
          resp.data.id = this.pessoaService.dataSource.length + 1;
          this.pessoaService.dataSource.push(resp.data);
        }
        this.actionIs = 'LIST';
        break;
      default:
        break;
    }
  }

}
