import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  public dataSource: Pessoa[];

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>('http://localhost:4200/assets/dataset.json');
  }

}
