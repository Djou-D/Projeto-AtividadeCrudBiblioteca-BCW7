import { Component, OnInit } from '@angular/core';

import { LivroService } from 'src/app/servico/livro.service';

import { Livro } from 'src/app/Livro';

import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-livro-form',
  templateUrl: './livro-form.component.html',
  styleUrls: ['./livro-form.component.css']
})
export class LivroFormComponent implements OnInit {

  livro: Livro = {
    id: undefined,
    nome: '',
    autor: '',
    foto: ''
  }

  isModal:boolean = false

  constructor(private service:LivroService, private router: Router, private routerActve:ActivatedRoute) { }

  ngOnInit(): void {

    const editId = <any>this.routerActve.snapshot.params['id'];

    this.service.pegarLivro(editId).subscribe(resultado => {

      return this.livro = resultado
    })
  }

  // adicionar(){

  //   this.service.addLivro(this.livro).subscribe(resultado => {
  //     this.livro = resultado
  //   })

  //   this.router.navigate(['/lista'])
  // }


  editar(){

    this.service.editLivro(this.livro.id, this.livro).subscribe(result => {

      return result
    })

    this.router.navigate(['/lista'])
  }


  // função para exibir o modal, trazendo o id do elemento a ser excluido
  mostrarModal(){
    this.isModal = true
  }

  cancelarAcao(){
    this.isModal = false
  }

  adicionar(){

    this.service.addLivro(this.livro).subscribe(resultado => {
      this.livro = resultado
    })

    this.isModal = false

    this.router.navigate(['/lista'])
  }



}
