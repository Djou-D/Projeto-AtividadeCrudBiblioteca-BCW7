import { Injectable } from '@angular/core';

// importando o modelo de livro criado
import { Livro } from '../Livro';
// importando ol cliente de conexão http
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'http://localhost:3000/livros'

  constructor(private http: HttpClient) { }

  //Função para rotinas do backend fake
  listar():Observable<any>{

    // através do metodo get, retorna os valores listados do backend fake
    return this.http.get<any>(this.API)
  }

  pegarLivro(id:any):Observable<any>{

    return this.http.get<any>(this.API + '/' + id)
  }


  addLivro(livro: Livro):Observable<any>{

    return this.http.post<any>(this.API, livro)
  }

  delLivro(id:any){

    return this.http.delete(this.API + '/' + id)
  }

  editLivro(id:any, livro:Livro):Observable<any>{

    return this.http.put<any>(this.API + '/' + id, livro)
  }

}
