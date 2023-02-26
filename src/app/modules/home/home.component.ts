import { Component, OnInit } from '@angular/core';
import { Jogador } from 'src/app/shared/entities/jogador';
import { JogadorService } from 'src/app/shared/services/jogador.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  login: string = ''
  senha: string = ''
  jogador: Jogador = new Jogador();

  constructor(jogadorService: JogadorService) { }

  ngOnInit(): void {
    
  }

  cadastrar = () => {
    this.jogador.nome = this.login;
    this.jogador.senha = this.senha;
  }
}
