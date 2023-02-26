import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StefamonService } from './services/stefamon.service';
import { JogadorService } from './services/jogador.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [StefamonService, JogadorService],
})
export class SharedModule { }
