import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar,
} from '@ionic/angular/standalone';
import { DetailsState, NavStateService } from '../services/nav-state';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  imports: [IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton],
})
export class DetailsPage {
  private router = inject(Router);

  // Must be read in the constructor: getCurrentNavigation() is only set during navigation.
  data = inject(NavStateService).read<DetailsState>();

  home() {
    this.router.navigateByUrl('/home');
  }
}
