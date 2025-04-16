import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView } from '@ionic/angular/standalone';
import { Etapa1Page } from './etapa1/etapa1.page';
import { Etapa2Page } from './etapa2/etapa2.page';
import { Etapa3Page } from './etapa3/etapa3.page';

@Component({
  selector: 'app-apresentacao',
  templateUrl: './apresentacao.page.html',
  styleUrls: ['./apresentacao.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, Etapa1Page, Etapa2Page, Etapa3Page]
})
export class ApresentacaoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
