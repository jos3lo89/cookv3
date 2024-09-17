import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
} from '@ionic/angular/standalone';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonFooter,
  ],
})
export class AppComponent {
  constructor() {}
}
