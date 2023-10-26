import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'albums' },
    { title: 'Genero', url: 'genero', icon: 'male-female' },
    { title: 'Edad', url: 'edad', icon: 'body' },
    { title: 'Universidad', url: 'universidad', icon: 'school' },
    { title: 'Clima', url: 'clima', icon: 'rainy' },
    { title: 'WordPress', url: 'wordpress', icon: 'newspaper' },
    { title: 'Contratame', url: 'contratame', icon: 'document' },
  ];
  
  constructor() {}
}
