import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {
  public genero: string = '';
  
  public printGender: string = '';

  public img: string = '';
  
  getgender:[]=[];

  constructor(public api: ApiService) {

    
  }

  ngOnInit() {
  }

  public getGenero(): void {
    this.api.getGender(this.genero).subscribe((data) => {
      if (data.gender === 'male') {
        this.printGender = 'Masculino';
        this.img = 'https://icones.pro/wp-content/uploads/2021/05/icone-de-l-homme-bleu.png';
      } else if (data.gender === 'female') {
        this.printGender = 'Femenino';
        this.img = 'https://us.123rf.com/450wm/yupiramos/yupiramos1712/yupiramos171203937/91052778-dise%C3%B1o-femenino-del-ejemplo-del-vector-del-icono-de-la-silueta-femenina-del-g%C3%A9nero.jpg';
      } else {
        this.printGender = 'Datos inválidos en la API';
      }
      console.log(this.printGender);
    });
  } 
}
