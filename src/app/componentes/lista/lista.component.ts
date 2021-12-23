
import { Component, OnInit } from '@angular/core';
// importando o service
import { LivroService } from 'src/app/servico/livro.service';
// importe da interface/modelo do projeto
import { Livro } from 'src/app/Livro';

import { Router } from '@angular/router';

// import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  livros!: Livro[]
  

  // função para fazer aparecer o modal
  isModal:boolean = false
  idLivroParaExcluir!: any

  constructor(private service:LivroService, private router:Router) {
    // isso ou um ! depois da variavel, indica que se inicial com um valor vaziu
    // this.livros = []
   }

  ngOnInit(): void {

    // rotanndo a função listarLivros ao iniciar o componente
    this.listarLivros()
  }



  // função para atribuir/pegar o listar do services
  listarLivros(){
    this.service.listar().subscribe(resultado => {
      console.log(resultado)

      this.livros = resultado
    })
  }

  // função para rota de edição
  editar(id:any){

    this.router.navigate(['/add/' + id])
  }

  // (click)="excluir(item.id)" colocar esse valor no botão de exclusao
  // excluir(id:any){

  //   this.service.delLivro(id).subscribe(resultado => {

  //     this.listarLivros()
  //   })
  // }


  confirmarAcao(){

    this.service.delLivro(this.idLivroParaExcluir).subscribe(resultado => {

      this.listarLivros()

      this.isModal = false
    })
  }

  cancelarAcao(){
    this.isModal = false
  }

  // função para exibir o modal, trazendo o id do elemento a ser excluido
  mostrarModal(id:any){
    this.isModal = true
    this.idLivroParaExcluir = id
  }

}
