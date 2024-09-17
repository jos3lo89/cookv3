import { Component, OnInit } from '@angular/core';

import { IonHeader, IonTitle , IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonToolbar],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
