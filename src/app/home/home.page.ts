import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonContent, IonHeader, IonInput, IonItem, IonList, IonNote, IonTextarea, IonTitle, IonToolbar,
} from '@ionic/angular/standalone';
import { DetailsState, NavStateService } from '../services/nav-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonTextarea, IonButton, IonNote],
})
export class HomePage {
  private nav = inject(NavStateService);

  name = '';
  message = '';

  send() {
    const state: DetailsState = {
      name: this.name.trim(),
      message: this.message.trim(),
      secretCode: Math.floor(100000 + Math.random() * 900000),
      sentAt: new Date().toISOString(),
    };
    this.nav.go('/details', state);
  }
}
