import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  public nombre: string = '';
  public age: any;
  public img: string = '';
  public printedad: string = '';


  constructor(public api: ApiService) { }

  ngOnInit() {
  }


  public getAge(){
    this.api.getAge(this.nombre).subscribe((data) => {
      if(data.age == null){
        this.age = 'Nombre invalido';
      }else{
        this.age = data.age;
        if(this.age <= 10){
          this.printedad = 'Niño';
          this.img = 'https://static.wikia.nocookie.net/gakuenbabysitters/images/5/56/Kashima.Kotarou.full.2244903.png/revision/latest/scale-to-width/360?cb=20180326180348';
        }else if(this.age <= 20){
          this.printedad = 'Joven';
          this.img = 'https://static.wikia.nocookie.net/dororo/images/7/7c/Hyakkimaru.png/revision/latest?cb=20200712215738&path-prefix=es';
        }else if(this.age <= 50){
          this.printedad = 'Adulto';
          this.img = 'https://elrefugiodelosincomprendidos.files.wordpress.com/2014/02/okabe-steinsgate.jpg';  
        }else {
          this.printedad = 'Anciano';
          this.img = 'https://pm1.aminoapps.com/6343/9f8664e50d91b72f4c4209ccafa86298b82b17ee_hq.jpg';
        }
      }
    });
  }

}
